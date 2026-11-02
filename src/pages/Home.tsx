import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { profile } from '@/data/profile';
import { education } from '@/data/education';
import { certifications } from '@/data/certifications';
import { buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Données structurées pour les moteurs de recherche (JSON-LD)
const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role,
  email: profile.email,
  sameAs: profile.socials.map((s) => s.href),
  alumniOf: education.map((e) => ({
    '@type': 'CollegeOrUniversity',
    name: e.school,
  })),
  hasCredential: certifications.map((c) => ({
    '@type': 'EducationalOccupationalCredential',
    name: c.title,
    recognizedBy: { '@type': 'Organization', name: c.issuer },
    validFrom: c.issueDate,
    validUntil: c.expiryDate,
    url: c.credentialUrl,
  })),
};

export default function Home() {
  return (
    <section className="grid items-center gap-8 md:grid-cols-2">
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta
          name="description"
          content="Portfolio : IA, SIG, DevSecOps, Android."
        />
        <script type="application/ld+json">{JSON.stringify(personLd)}</script>
      </Helmet>

      <div>
        <h1 className="text-4xl font-bold md:text-5xl">{profile.name}</h1>
        <p className="mt-2 text-xl">{profile.role}</p>
        <p className="mt-4 text-muted-foreground">{profile.about}</p>

        <div className="mt-6 flex gap-3">
          <Link to="/projects" className={buttonVariants()}>
            Voir les projets
          </Link>
          <Link
            to="/contact"
            className={buttonVariants({ variant: 'outline' })}
          >
            Contact
          </Link>
        </div>

        <div
          className="mt-6 flex flex-wrap gap-2"
          aria-label="Compétences principales"
        >
          {profile.skills.map((s) => (
            <Badge key={s} variant="secondary">
              {s}
            </Badge>
          ))}
        </div>
      </div>

      <div
        className="aspect-square rounded-2xl border bg-muted"
        role="img"
        aria-label="Illustration de profil"
      />
    </section>
  );
}