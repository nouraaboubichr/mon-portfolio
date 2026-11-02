import { Helmet } from 'react-helmet-async';
import { experiences } from '@/data/experience';
import { formatMonth } from '@/lib/date';

export default function Experience() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Parcours — Portfolio</title>
        <meta name="description" content="Mon parcours professionnel." />
      </Helmet>

      <h2 className="text-2xl font-semibold">Parcours</h2>

      <ol className="relative border-s">
        {experiences.map((e) => (
          <li key={e.company + e.start} className="ms-6 pb-6">
            <span
              className="absolute -start-1.5 mt-2 h-3 w-3 rounded-full border bg-primary"
              aria-hidden="true"
            />
            <h3 className="font-semibold">
              {e.role} @ {e.company}
            </h3>
            <p className="text-sm text-muted-foreground">
              {formatMonth(e.start)} — {formatMonth(e.end)}
              {e.location ? ` • ${e.location}` : ''}
            </p>
            <ul className="ms-5 mt-2 list-disc text-sm">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}