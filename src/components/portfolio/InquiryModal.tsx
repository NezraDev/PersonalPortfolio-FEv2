import { useEffect, useId, useRef, useState, type FormEvent } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, X } from 'lucide-react';

export default function InquiryModal({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  const sendingRef = useRef(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const noteId = useId();
  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sendingRef.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    sendingRef.current = true;
    setStatus('sending');
    setError('');
    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data)),
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.success !== true) {
        throw new Error(result?.error || (response.status === 429 ? 'Too many requests. Please wait a minute before trying again.' : 'Unable to send. Please try again or use the email link on the contact page.'));
      }
      setStatus('success');
      form.reset();
    } catch (cause) {
      setStatus('error');
      setError(cause instanceof Error && cause.name !== 'TimeoutError' ? cause.message : 'The request timed out. Please try again shortly.');
    } finally {
      sendingRef.current = false;
    }
  }

  return createPortal(<dialog ref={dialogRef} className="inquiry-dialog" aria-labelledby={titleId} aria-describedby={noteId}
    onCancel={event => { event.preventDefault(); onClose(); }}
    onClick={event => { if (event.target === event.currentTarget) {
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
    } }}>
    <div className="inquiry-dialog-heading"><div><p className="contact-studio-label">GET IN TOUCH</p><h2 id={titleId}>Start a conversation.</h2></div><button type="button" className="icon-button" aria-label="Close inquiry" onClick={onClose}><X size={22} /></button></div>
    {status === 'success' ? <div className="inquiry-success" role="status"><h3>Thank you for reaching out.</h3><p>Your inquiry has been submitted. A reply will go to the contact email you provided.</p><button type="button" className="contact-studio-cta" onClick={onClose}>Done</button></div> : <form onSubmit={handleSubmit} className="inquiry-form" aria-busy={status === 'sending'}>
      <div className="inquiry-honeypot" aria-hidden="true"><label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <label>Name<input name="name" autoComplete="name" required maxLength={120} placeholder="Your full name" autoFocus /></label>
      <label>Contact email<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" /></label>
      <label>Inquiry<textarea name="inquiry" required maxLength={4000} rows={5} placeholder="Tell me about the role, project, or collaboration." /></label>
      <p id={noteId} className="inquiry-note">Your message will be sent directly to Arwil. Your contact email will be used to reply.</p>
      {status === 'error' && <p className="inquiry-error" role="alert">{error}</p>}
      <button className="contact-studio-cta" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Send inquiry'} <ArrowUpRight size={18} /></button>
    </form>}
  </dialog>, document.body);
}
