import { useState, type FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { profile } from '@/data/profile';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// URL Formspree optionnelle, définie dans le fichier .env
const FORM_URL = import.meta.env.VITE_FORM_URL as string | undefined;

type Status = 'idle' | 'sending' | 'ok' | 'error';

export default function Contact() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Sans service d'envoi : ouvre le client mail de l'utilisateur
    if (!FORM_URL) {
      const sujet = encodeURIComponent(`Contact depuis le portfolio — ${nom}`);
      const corps = encodeURIComponent(`${message}\n\n${nom} (${email})`);
      window.location.href = `mailto:${profile.email}?subject=${sujet}&body=${corps}`;
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(FORM_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ nom, email, message }),
      });
      if (!res.ok) throw new Error('Erreur serveur');
      setStatus('ok');
      setNom('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="mx-auto grid max-w-xl gap-6">
      <Helmet>
        <title>Contact — Portfolio</title>
        <meta name="description" content="Me contacter." />
      </Helmet>

      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="text-muted-foreground">
        {profile.email} • {profile.location}
      </p>

      <form onSubmit={handleSubmit} className="grid gap-4">
        <Input
          required
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          aria-label="Nom"
        />
        <Input
          required
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email"
        />
        <Textarea
          required
          rows={5}
          placeholder="Votre message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-label="Message"
        />
        <Button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Envoi...' : 'Envoyer'}
        </Button>

        {status === 'ok' && <p role="status">Message envoyé, merci !</p>}
        {status === 'error' && (
          <p role="alert">L'envoi a échoué, réessayez plus tard.</p>
        )}
      </form>

      <div className="flex gap-4 text-sm">
        {profile.socials.map((s) => (
          <a
            key={s.label}
            className="underline"
            href={s.href}
            target="_blank"
            rel="noreferrer"
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}