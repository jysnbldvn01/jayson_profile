export enum SkillNames {
  JS = "js",
  TS = "ts",
  PYTHON = "python",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  NODEJS = "nodejs",
  EXPRESS = "express",
  PHP = "php",
  DJANGO = "django",
  KOTLIN = "kotlin",
  CPP = "cpp",
  MYSQL = "mysql",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  SUPABASE = "supabase",
  AWS = "aws",
  GIT = "git",
  GITHUB = "github",
  DOCKER = "docker",
  VITE = "vite",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "ES6+ scripting for interactive, dynamic web apps.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Typed JavaScript for safer, more maintainable code.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.PYTHON]: {
    id: 3,
    name: "python",
    label: "Python",
    shortDescription: "General-purpose scripting and backend development.",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.HTML]: {
    id: 4,
    name: "html",
    label: "HTML5",
    shortDescription: "Semantic markup for the web.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 5,
    name: "css",
    label: "CSS3",
    shortDescription: "Styling and layout for responsive interfaces.",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 6,
    name: "react",
    label: "React.js",
    shortDescription: "Component-based UI development, including Vite setups.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.NODEJS]: {
    id: 7,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript runtime for backend services and APIs.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 8,
    name: "express",
    label: "Express.js",
    shortDescription: "Building RESTful APIs and backend routing.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  [SkillNames.PHP]: {
    id: 9,
    name: "php",
    label: "PHP",
    shortDescription: "Server-side scripting for custom backend systems.",
    color: "#777bb4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  [SkillNames.DJANGO]: {
    id: 10,
    name: "django",
    label: "Django",
    shortDescription: "Python web framework for rapid backend development.",
    color: "#092e20",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  [SkillNames.KOTLIN]: {
    id: 11,
    name: "kotlin",
    label: "Kotlin",
    shortDescription: "Native Android app development.",
    color: "#7f52ff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  },
  [SkillNames.CPP]: {
    id: 12,
    name: "cpp",
    label: "C++",
    shortDescription: "Embedded systems and Arduino programming.",
    color: "#00599c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.MYSQL]: {
    id: 13,
    name: "mysql",
    label: "MySQL",
    shortDescription: "Relational database design and querying.",
    color: "#4479a1",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 14,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "Relational database, including Supabase/AWS RDS setups.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 15,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "NoSQL document database for flexible data models.",
    color: "#4db33d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.SUPABASE]: {
    id: 16,
    name: "supabase",
    label: "Supabase",
    shortDescription: "Postgres backend-as-a-service with REST APIs (PostgREST).",
    color: "#3ecf8e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  [SkillNames.AWS]: {
    id: 17,
    name: "aws",
    label: "AWS",
    shortDescription: "Cloud infrastructure, including RDS-hosted databases.",
    color: "#ff9900",
    icon: "/assets/logos/aws2-mono.svg",
  },
  [SkillNames.GIT]: {
    id: 18,
    name: "git",
    label: "Git",
    shortDescription: "Version control for tracking and managing code changes.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 19,
    name: "github",
    label: "GitHub",
    shortDescription: "Code hosting, collaboration, and project management.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerization for consistent deployments.",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.VITE]: {
    id: 21,
    name: "vite",
    label: "Vite",
    shortDescription: "Fast build tooling for React front-ends.",
    color: "#646cff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "2026",
    endDate: "Present",
    title: "Freelance Web Developer & Computer Technician",
    company: "Self-employed — Parañaque City",
    description: [
      "Developed customized web applications and digital systems, delivering solutions based on client requirements.",
      "Implemented frontend, backend, database, and API components, creating functional and integrated applications.",
      "Diagnosed hardware, software, and Windows issues, restoring systems to working condition.",
      "Collaborated with clients throughout development, ensuring requirements were understood and solutions met their needs.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.TS,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.PHP,
      SkillNames.POSTGRES,
      SkillNames.MYSQL,
      SkillNames.SUPABASE,
    ],
  },
  {
    id: 2,
    startDate: "Mar 2026",
    endDate: "Jun 2026",
    title: "IT On-Site Support (OSS) Intern — Technology Services",
    company: "KMC Solutions",
    description: [
      "Resolved hardware, software, and basic network issues, minimizing disruptions to daily operations.",
      "Configured and deployed laptops, desktops, and IT equipment, ensuring devices were ready for users.",
      "Performed WiFi, printer, peripheral, and system access troubleshooting, improving workplace IT reliability.",
      "Supported meetings, events, and equipment requests, ensuring smooth technical operations.",
    ],
    skills: [SkillNames.GIT, SkillNames.GITHUB],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};