import { Outlet, NavLink } from 'react-router-dom';
import ThemeToggle from '@/components/ThemeToggle';
import { profile } from '@/data/profile';

const links = [
  { to: '/projects', label: 'Projets' },
  { to: '/experience', label: 'Parcours' },
  { to: '/education', label: 'Formations' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/contact', label: 'Contact' },
];

// Calculé une seule fois (le rendu doit rester pur)
const YEAR = new Date().getFullYear();

export default function RootLayout() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 p-4">
          <NavLink to="/" className="font-bold">
            {profile.name}
          </NavLink>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  isActive
                    ? 'font-semibold underline underline-offset-4'
                    : 'text-muted-foreground hover:text-foreground'
                }
              >
                {l.label}
              </NavLink>
            ))}
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl p-6">
        <Outlet />
      </main>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © {YEAR} • {profile.name}
      </footer>
    </div>
  );
}