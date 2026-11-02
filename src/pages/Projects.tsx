import { Helmet } from 'react-helmet-async';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Projects() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Projets — Portfolio</title>
        <meta
          name="description"
          content="Mes projets personnels et professionnels."
        />
      </Helmet>

      <h2 className="text-2xl font-semibold">Projets</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.title} className="pt-6 transition hover:shadow-md">
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
              <CardDescription>
                {p.period ? `${p.period} • ` : ''}
                {p.summary}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="mt-4 flex gap-3 text-sm">
                {p.link && (
                  <a
                    className="underline"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                )}
                {p.repo && (
                  <a
                    className="underline"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}