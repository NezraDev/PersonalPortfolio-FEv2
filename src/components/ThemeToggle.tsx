import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const update = () => {
      let saved: string | null = null;
      try { saved = localStorage.getItem('portfolio-theme'); } catch { /* Storage is optional. */ }
      if (saved !== 'light' && saved !== 'dark') { const next = media.matches ? 'dark' : 'light'; document.documentElement.dataset.theme = next; setTheme(next); }
    };
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try { localStorage.setItem('portfolio-theme', next); } catch { /* Switching works without storage. */ }
  }
  return <button className="icon-button theme-toggle" type="button" onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button>;
}
