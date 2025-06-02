import { Experience, Project, Skill, Education, PersonalInfo } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Claudia Speranza',
  title: 'AI Engineer',
  email: '',
  phone: '',
  location: 'Mialn, Italy',
  imageUrl: '/images/picture.jpg',
  githubUrl: 'https://github.com/yourusername',
  linkedinUrl: 'https://linkedin.com/in/yourusername',
  portfolioUrl: '',
  bio: 'AI Engineer specialized in computer vision and machine learning applications for robotics and autonomous systems. I leverage my strong mathematical foundation to create cutting-edge solutions for complex technical challenges.'

};

export const experiences: Experience[] = [
  {
    id: 'exp1',
    title: 'Computer Vision & AI Engineer',
    company: 'Oversonic Robotics',
    location: 'Milan, Italy',
    startDate: 'Apr 2023',
    endDate: 'Present',
    description: [
      'Developed vision algorithms for robotic object manipulation and human interaction, integrating VLMs to boost perception of surroundings',
      '• Built a custom ML platform from scratch to train and validate models using VertexAI',
      '• Led the selection of cameras and GPUs to maximize real-time system performance',
      '• Designed and deployed a data pipeline for real-time telemetry processing and analysis',
    ],
    technologies: ['Python', 'MongoDB', 'SQL', 'Pytorch']
  },
  {
    id: 'exp2',
    title: 'AI & Data Science Associate Intern',
    company: 'JP Morgan',
    location: 'London, United Kingdom',
    startDate: 'Sep 2022',
    endDate: 'Mar 2022',
    description: [
      'Developed algorithmic trading strategies for Credit Systematic Market Making using Java for real-time execution',
      'Created Python data analysis tools for historical market data'
    ],
    technologies: ['Java', 'Python', 'Jira']
  },
  {
    id: 'exp3',
    title: 'Computer Vision Engineer',
    company: 'Oversonic Robotics',
    location: 'Milan, Italy',
    startDate: 'Mar 2021',
    endDate: 'Aug 2022',
    description: [
      'Implemented real-time image processing systems for humanoid robots including camera integration and streaming',
      'Developed visual data analysis using both traditional computer vision techniques and deep learning models'
    ],
    technologies: ['C++', 'Python', 'OpenCV']
  },
  // Add more experiences as needed
];

export const education: Education[] = [
  {
    degree: 'Master of Science in Mathematical Engineering',
    institution: 'Politecnico di Milano',
    location: 'Milan, Italy',
    graduationDate: '2022',
    description: 'Specialized in Software Engineering and Data Science'
  },
  {
    degree: 'Bachelor of Science in Mathematical Engineering',
    institution: 'Politecnico di Milano',
    location: 'Milan, Italy',
    graduationDate: '2022',
  }
];

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C++']
  },
  {
    category: 'Frontend Development',
    items: ['React', 'Vue.js', 'Angular', 'HTML5', 'CSS3/SCSS', 'Redux']
  },
  {
    category: 'Backend Development',
    items: ['Node.js', 'Express', 'Django', 'Flask', 'GraphQL', 'REST API']
  },
  {
    category: 'Database',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']
  },
  {
    category: 'DevOps & Tools',
    items: ['Git', 'Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Azure']
  }
];

export const projects: Project[] = [
  {
    id: 'proj1',
    title: 'E-commerce Platform',
    description: 'A full-featured online shopping platform with user authentication, product catalog, and payment processing.',
    technologies: ['TypeScript', 'React', 'Node.js', 'MongoDB', 'Stripe API'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://ecommerce-platform.example.com',
    imageUrl: '/images/projects/'
  },
  {
    id: 'proj2',
    title: 'Task Management App',
    description: 'A productivity application for managing personal and team tasks with real-time updates.',
    technologies: ['TypeScript', 'React', 'Firebase', 'Material-UI'],
    githubUrl: 'https://github.com/yourusername/task-management',
    liveUrl: 'https://task-app.example.com',
    imageUrl: '/images/projects/task-app.jpg'
  },
  // Add more projects as needed
];