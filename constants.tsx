import { Project, Experience, SkillCategory, Education } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'DJI Drone Store',
    description: 'A full-scale MERN stack e-commerce platform dedicated to high-performance drones. Features include secure Stripe integration, real-time inventory tracking, and an advanced administrative dashboard.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux', 'Stripe'],
    imageUrl: 'https://picsum.photos/seed/drone/800/600',
    liveLink: '#',
  },
  {
    id: '2',
    title: 'The Valley Travel',
    description: 'A comprehensive tourism booking engine allowing users to explore exotic destinations, book customized travel packages, and manage itineraries. Built with a robust admin control panel.',
    techStack: ['React', 'Node.js', 'Firebase', 'Tailwind CSS', 'Material UI'],
    imageUrl: 'https://picsum.photos/seed/travel/800/600',
    liveLink: '#',
  },
  {
    id: '3',
    title: 'Delmont Health Service',
    description: 'A healthcare specialized platform focusing on maternal and childcare. Features include doctor appointments, service reservations, and detailed medical resource management.',
    techStack: ['React', 'Express', 'MongoDB', 'React Bootstrap', 'JWT'],
    imageUrl: 'https://picsum.photos/seed/health/800/600',
    liveLink: '#',
  },
  {
    id: '4',
    title: 'Sopno Academy',
    description: 'An interactive online learning platform offering specialized course packages. Designed for high performance and seamless video streaming for students across Bangladesh.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Cloudinary', 'Firebase'],
    imageUrl: 'https://picsum.photos/seed/academy/800/600',
    liveLink: '#',
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    role: 'Senior Web Developer',
    company: 'Sopno IT Solutions',
    period: 'Dec 2021 – Present',
    location: 'Remote',
    highlights: [
      'Architecting and maintaining complex MERN stack applications.',
      'Leading UI/UX overhaul projects using React and Tailwind CSS.',
      'Optimizing backend performance and database queries for large-scale users.',
      'Mentoring junior developers and conducting code reviews.'
    ]
  },
  {
    id: 'exp2',
    role: 'Associate Web Developer Intern',
    company: 'NeoDocto Inc',
    period: 'Nov 2021 – May 2022',
    location: 'Remote, India',
    highlights: [
      'Assisted in developing healthcare-focused modules for global platforms.',
      'Implemented responsive design patterns using Bootstrap and Material UI.',
      'Collaborated with cross-functional teams to debug and improve web features.'
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: 'Cpu' },
      { name: 'JavaScript', icon: 'Code' },
      { name: 'Tailwind', icon: 'Palette' },
      { name: 'TypeScript', icon: 'ShieldCheck' },
      { name: 'UI/UX', icon: 'Layout' },
      { name: 'Web', icon: 'Globe' }
    ]
  },
  {
    title: 'Backend & Data',
    skills: [
      { name: 'Node.js', icon: 'Server' },
      { name: 'Express', icon: 'FastForward' },
      { name: 'MongoDB', icon: 'Database' },
      { name: 'APIs', icon: 'Network' },
      { name: 'Firebase', icon: 'Flame' }
    ]
  },
  {
    title: 'Dev Tools',
    skills: [
      { name: 'GitHub', icon: 'GitBranch' },
      { name: 'Cloud', icon: 'Cloud' },
      { name: 'Design', icon: 'Figma' },
      { name: 'Terminal', icon: 'Terminal' }
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: 'Diploma in Computer Science & Engineering',
    institution: 'Pabna Polytechnic Institute',
    period: '2018 – 2022'
  }
];