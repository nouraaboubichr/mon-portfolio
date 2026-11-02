export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: 'Université Cadi Ayyad',
    degree: 'Master',
    field: 'Intelligence Artificielle',
    location: 'Marrakech',
    start: '2023-09',
    end: '2025-07',
    courses: ['Deep Learning', 'MLOps', 'SIG & IA'],
    highlights: ['Major de promo', 'Projet UAV + CNN'],
  },
];