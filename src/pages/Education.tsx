import { Helmet } from 'react-helmet-async';
import { education } from '@/data/education';
import { formatMonth } from '@/lib/date';

export default function EducationPage() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Formations — Portfolio</title>
        <meta name="description" content="Mes diplômes et formations." />
      </Helmet>

      <h2 className="text-2xl font-semibold">Formations</h2>

      <ol className="relative border-s">
        {education.map((e) => (
          <li key={e.school + e.start} className="ms-6 pb-6">
            <span
              className="absolute -start-1.5 mt-2 h-3 w-3 rounded-full border bg-primary"
              aria-hidden="true"
            />
            <h3 className="font-semibold">
              {e.degree}
              {e.field ? ` — ${e.field}` : ''} @ {e.school}
            </h3>
            <p className="text-sm text-muted-foreground">
              {formatMonth(e.start)} — {formatMonth(e.end)}
              {e.location ? ` • ${e.location}` : ''}
              {e.gpa ? ` • GPA ${e.gpa}` : ''}
            </p>

            {e.courses?.length ? (
              <p className="mt-2 text-sm">
                Cours : {e.courses.slice(0, 5).join(', ')}
              </p>
            ) : null}

            {e.highlights?.length ? (
              <ul className="ms-5 mt-2 list-disc text-sm">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}