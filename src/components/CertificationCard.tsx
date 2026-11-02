import { useState } from 'react';
import clsx from 'clsx';
import type { Certification } from '@/data/certifications';
import { formatMonth } from '@/lib/date';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

// Calculé une seule fois (le rendu doit rester pur)
const NOW = new Date().toISOString().slice(0, 7); // "YYYY-MM"

export default function CertificationCard({ c }: { c: Certification }) {
  const [imgOk, setImgOk] = useState(true);

  const isExpired =
    c.status === 'expired' || (!!c.expiryDate && c.expiryDate < NOW);

  return (
    <Card
      className={clsx(
        'pt-6 transition hover:shadow-md',
        isExpired && 'opacity-80'
      )}
      aria-label={`Certification ${c.title}`}
    >
      <CardContent>
        {c.image && imgOk && (
          <img
            src={c.image}
            alt={c.imageAlt ?? c.title}
            width={256}
            height={256}
            loading="lazy"
            onError={() => setImgOk(false)}
            className="mb-3 h-24 w-24 rounded object-contain"
          />
        )}

        <h3 className="font-semibold leading-snug">{c.title}</h3>
        <p className="text-sm text-muted-foreground">
          {c.issuer} • {formatMonth(c.issueDate)}
          {c.expiryDate ? ` → ${formatMonth(c.expiryDate)}` : ''}
          {c.credentialId ? ` • ID ${c.credentialId}` : ''}
        </p>

        {c.skills?.length ? (
          <p className="mt-2 text-sm">Compétences : {c.skills.join(', ')}</p>
        ) : null}

        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
          {c.credentialUrl && (
            <a
              className="underline"
              href={c.credentialUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Voir le certificat ${c.title}`}
            >
              Voir le certificat
            </a>
          )}
          {isExpired && <Badge variant="outline">Expirée</Badge>}
          {c.status === 'revoked' && (
            <Badge variant="destructive">Révoquée</Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}