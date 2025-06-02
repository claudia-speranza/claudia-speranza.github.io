import { Experience, Project, Skill, Education, PersonalInfo } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Claudia Speranza',
  title: 'AI Engineer',
  email: '',
  phone: '',
  location: 'Milan, Italy',
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
    degree: 'Erasmus Exchange Programme',
    institution: 'Katholieke Universiteit of Leuven',
    location: 'Leuven, Belgium',
    graduationDate: '2020',
  },
  {
    degree: 'Bachelor of Science in Mathematical Engineering',
    institution: 'Politecnico di Milano',
    location: 'Milan, Italy',
    graduationDate: '2019',
  }
];

export const skills: Skill[] = [
  {
    category: 'Programming Languages',
    items: ['Python', 'Java', 'C++', 'C#', 'HTML/CSS/JS', 'NodeJS/React']
  },
  {
    category: 'ML & Robotics Tools',
    items: ['Tensorflow,', 'PyTorch', 'TensorRT', 'Onnx', 'CUDA', 'OpenCV', 'ROS2']
  },
  {
    category: 'Database',
    items: ['MongoDB', 'PostgreSQL', 'Redis', 'Timescale']
  },
  {
    category: 'DevOps & Tools',
    items: ['Git', 'Unix', 'Docker', 'Kubernetes', 'CI/CD', 'GCP/VertexAI', 'Atlassian suite']
  }
];

export const projects: Project[] = [
  {
    id: 'proj1',
    title: 'Gear Fault Detection from Vibrational Data',
    description: 'Developed an LSTM-based system to detect anomalies in vibrational timeseries data from gear systems. Project conducted in collaboration with an Italian car manufacturer.',
    technologies: ['PyTorch', 'LSTM', 'LabView'],
    githubUrl: 'https://github.com/claudia-speranza/GearFaultDetection',
    websiteUrl: '',
    imageUrl: '/images/proj1.png'
  },
  {
    id: 'proj2',
    title: 'Augmented Reality in Mobility',
    description: 'Project in collaboration with Politecnico di Milano and Move research team to develop augmented reality systems for driving applications.',
    technologies: ['Unity', 'C#'],
    githubUrl: '',
    websiteUrl: 'https://www.hmdrive.it/',
    imageUrl: '/images/proj2.png'
  },
  // Add more projects as needed
];