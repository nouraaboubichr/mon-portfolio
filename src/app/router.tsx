import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import Experience from '@/pages/Experience';
import EducationPage from '@/pages/Education';
import CertificationsPage from '@/pages/Certifications';
import Contact from '@/pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', element: <Projects /> },
      { path: 'experience', element: <Experience /> },
      { path: 'education', element: <EducationPage /> },
      { path: 'certifications', element: <CertificationsPage /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);