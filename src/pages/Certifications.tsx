import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { certifications } from '@/data/certifications';
import CertificationCard from '@/components/CertificationCard';
import { Input } from '@/components/ui/input';

export default function CertificationsPage() {
  const [q, setQ] = useState('');

  const list = useMemo(() => {
    const query = q.toLowerCase();
    return [...certifications]
      .filter((c) =>
        [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
          .join(' ')
          .toLowerCase()
          .includes(query)
      )
      .sort((a, b) => b.issueDate.localeCompare(a.issueDate));
  }, [q]);

  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Certifications — Portfolio</title>
        <meta
          name="description"
          content="Mes certifications professionnelles."
        />
      </Helmet>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <Input
          placeholder="Filtrer (ex : AWS, Kubernetes)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="w-72"
          aria-label="Filtrer les certifications"
        />
      </div>

      {list.length === 0 ? (
        <p className="text-muted-foreground">Aucune certification trouvée.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <CertificationCard key={c.title + c.issueDate} c={c} />
          ))}
        </div>
      )}
    </section>
  );
}