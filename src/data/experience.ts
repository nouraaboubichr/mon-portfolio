export type Experience = {
  company: string;
  role: string;
  location?: string;
  start: string;
  end?: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: 'Entreprise Exemple',
    role: 'Ingénieur Logiciel',
    location: 'Marrakech',
    start: '2025-09',
    bullets: [
      'Développement d\'applications web avec React et TypeScript',
      'Mise en place de pipelines CI/CD',
    ],
  },
];