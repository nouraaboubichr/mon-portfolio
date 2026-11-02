export type Certification = {
  title: string;
  issuer: string;
  issueDate: string; // "YYYY-MM"
  expiryDate?: string; // "YYYY-MM"
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string; // "/certs/aws-saa.webp"
  imageAlt?: string;
  status?: 'active' | 'expired' | 'revoked';
};

export const certifications: Certification[] = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    issueDate: '2024-03',
    credentialUrl: 'https://credly.com/badges/xxxx',
    skills: ['VPC', 'Autoscaling'],
    tags: ['Cloud', 'DevOps'],
    image: '/certs/aws-saa.webp',
    imageAlt: 'Badge AWS SAA',
    status: 'active',
  },
  {
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'The Linux Foundation',
    issueDate: '2025-01',
    skills: ['Kubernetes', 'Networking', 'Troubleshooting'],
    tags: ['Kubernetes', 'DevOps'],
    image: '/certs/cncf-cka.webp',
    imageAlt: 'Badge CKA CNCF',
    status: 'active',
  },
];