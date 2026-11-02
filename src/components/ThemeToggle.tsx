import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setDark((d) => !d)}
      aria-label="Basculer le thème"
    >
      {dark ? 'Light' : 'Dark'}
    </Button>
  );
}