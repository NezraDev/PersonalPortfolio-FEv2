import { useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export default function ImageLightbox({ src, alt, onClose }: { src?: string; alt: string; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const closeRef = useRef(onClose);
  const labelId = useId();
  useEffect(() => { closeRef.current = onClose; }, [onClose]);
  useEffect(() => {
    if (!src || !ref.current) return;
    const dialog = ref.current;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => { dialog.close(); document.body.style.overflow = previousOverflow; previousFocus?.focus({ preventScroll: true }); };
  }, [src]);
  if (!src) return null;
  return createPortal(<dialog className="image-dialog" ref={ref} aria-labelledby={labelId} onCancel={event => { event.preventDefault(); closeRef.current(); }} onClick={event => { if (event.target === event.currentTarget) closeRef.current(); }}>
    <div className="image-dialog-inner"><div className="image-dialog-toolbar"><p id={labelId}>{alt}</p><button className="icon-button" type="button" autoFocus aria-label="Close image preview" onClick={() => closeRef.current()}><X size={22} /></button></div><div className="image-dialog-scroll"><img src={src} alt={alt} /></div></div>
  </dialog>, document.body);
}
