export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: 'EcoShop',
    period: '2025',
    tags: ['React', 'Node', 'OpenFoodFacts'],
    summary: 'Application de scan produits pour achat durable.',
    repo: 'https://github.com/me/ecoshop',
  },
];