export const SITE = {
  name: "Karan Bhosale",
  title: "Karan Bhosale — Java Backend Developer & Full Stack Engineer",
  description:
    "Portfolio of Karan Bhosale, a Java backend developer specializing in Spring Boot, REST APIs, and full stack engineering. Building scalable, secure, production-grade systems.",
  url: "https://karanbhosale.dev",
  email: "karan.bhosale.dev@gmail.com",
  phone: "+91 9309993571",
  location: "Mumbai, Maharashtra, India",
  github: "https://github.com/Karanbhosale18",
  linkedin: "https://linkedin.com/in/karan-bhosale08",
  leetcode: "https://leetcode.com/u/karanbhosale",
  githubUsername: "Karanbhosale18",
  leetcodeUsername: "karanbhosale",
  resumePath: "/resume.pdf",
};
export const LEETCODE_STATS = {
  totalSolved: 41,
  easySolved: 28,
  mediumSolved: 9,
  hardSolved: 4,
  ranking: 3234407,
};

export const ROLES = [
  "Software Developer",
  "Java Backend Developer",
  "Spring Boot Developer",
  "Backend Engineer",
  "Full Stack Java Developer",
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Education", href: "#education" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const HERO_STACK = [
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "JWT",
  "REST API",
  "AWS",
  "Microservices",
  "Git",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  points: string[];
  stack: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    company: "SaiKet Systems",
    role: "Java Developer Intern",
    period: "2024",
    location: "Remote",
    summary:
      "Worked on real-world Java applications, applying object-oriented design and collaborative engineering practices across the full software development lifecycle.",
    points: [
      "Built and maintained Java modules following OOP principles and clean-code standards",
      "Worked extensively with Java Collections for data handling and business logic",
      "Collaborated with a team using Git for version control and code review",
      "Participated in the full SDLC — requirements, design, implementation, testing",
      "Debugged production issues and improved code reliability under senior guidance",
    ],
    stack: ["Java", "OOP", "Collections", "Git", "SDLC"],
  },
  {
    company: "Navyug Infotech",
    role: "Android Developer Intern",
    period: "2023",
    location: "Mumbai, India",
    summary:
      "Developed Android applications end-to-end — from UI in XML to Firebase-backed authentication and data persistence — building the architectural instincts later applied to backend systems.",
    points: [
      "Built native Android UIs using XML layouts and the Android SDK",
      "Implemented Firebase Authentication and real-time database integration",
      "Designed local and remote data flows between the app and backend services",
      "Debugged across devices and API levels, tightening the dev-test-fix loop",
      "Collaborated closely with designers and senior developers in an agile team",
    ],
    stack: ["Java", "Android SDK", "XML", "Firebase", "Auth", "Debugging"],
  },
];

export type SkillGroup = {
  category: string;
  items: { name: string; level?: number }[];
};

export const SKILLS: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "Java", level: 5 },
      { name: "SQL", level: 4 },
      { name: "JavaScript", level: 3 },
      { name: "Python", level: 3 },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Spring Boot" },
      { name: "Spring Security" },
      { name: "REST APIs" },
      { name: "Hibernate" },
      { name: "Spring Data JPA" },
      { name: "JWT" },
      { name: "Maven" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Firebase" },
    ],
  },
  {
    category: "Frontend",
    items: [{ name: "React" }, { name: "Tailwind CSS" }, { name: "Bootstrap" }],
  },
  {
    category: "Tools",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "IntelliJ IDEA" },
      { name: "Postman" },
      { name: "Docker (Learning)" },
    ],
  },
  {
    category: "Currently Learning",
    items: [
      { name: "Microservices" },
      { name: "OAuth2" },
      { name: "Redis" },
      { name: "Kafka" },
      { name: "AWS" },
      { name: "System Design" },
      { name: "Docker" },
      { name: "CI/CD" },
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  hero?: boolean;
  stack: string[];
  features: string[];
  challenges: string[];
  architecture: string;
  github?: string;
  demo?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "bank-management-system",
    name: "Bank Management System",
    tagline:
      "A secure, role-based banking backend with JWT authentication, transaction handling, and an admin dashboard.",
    hero: true,
    stack: ["Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Spring Data JPA", "REST API"],
    features: [
      "Role-based authentication for customers, tellers, and admins",
      "Secure login with hashed credentials and token refresh",
      "Full account management — open, freeze, close, and audit accounts",
      "Transaction engine with balance validation and ledger history",
      "Email notifications for logins, transfers, and account alerts",
      "JWT-based stateless authentication across all endpoints",
      "Admin dashboard for account oversight and transaction monitoring",
    ],
    challenges: [
      "Designing a transaction model that stays consistent under concurrent requests",
      "Layering Spring Security so role permissions stay declarative, not scattered in controllers",
      "Keeping JWT refresh flows secure without adding friction for the client",
    ],
    architecture:
      "Client → API Gateway (Spring Boot Controller) → Service Layer (business rules, validation) → Repository Layer (Spring Data JPA) → PostgreSQL. Security filter chain validates JWT on every request before it reaches the controller; a scheduled job reconciles ledgers nightly.",
    github: "https://github.com/Karanbhosale18/Bank-Management-System",
  },
  {
    slug: "student-progress-tracker",
    name: "Student Progress Tracker",
    tagline:
      "An Android app for teachers to track attendance and academic performance, backed by Firebase.",
    stack: ["Android", "Java", "Firebase"],
    features: [
      "Daily attendance marking with class-wise summaries",
      "Student performance tracking across subjects and terms",
      "Firebase Authentication for teacher and admin accounts",
      "Dashboard with at-a-glance class analytics",
      "Real-time database integration for instant sync across devices",
    ],
    challenges: [
      "Structuring Firebase's NoSQL model to support fast, class-wise queries",
      "Keeping the UI usable for teachers marking attendance quickly between periods",
    ],
    architecture:
      "Android client (Java, XML UI) ↔ Firebase Authentication ↔ Firebase Realtime Database, with a repository layer abstracting reads/writes so the UI never talks to Firebase directly.",
    github: "https://github.com/Karanbhosale18/StudentsProgressTrackerApp",
  },
  {
    slug: "milind-pawar-website",
    name: "Milind Pawar Website",
    tagline: "A modern, responsive business website built for performance and clarity.",
    stack: ["React", "Tailwind CSS", "SEO"],
    features: [
      "Fully responsive layout across mobile, tablet, and desktop",
      "Clean, distraction-free UI focused on conversion",
      "Optimized asset loading for fast page speed",
      "On-page SEO — meta tags, semantic structure, sitemap",
    ],
    challenges: [
      "Balancing a content-heavy business site with fast load times",
      "Designing a UI accessible to a non-technical client to update",
    ],
    architecture:
      "Static React front end with component-based sections, deployed behind a CDN for fast global delivery.",
    github: "https://github.com/Karanbhosale18/milind-pawar-website",
  },
  {
    slug: "Event-Planner-App",
    name: "Event Planner Application",
    tagline: "A feature-rich Android application that simplifies event planning, attendee management, and real-time event coordination.",
    stack: ["Android", "Java", "Firebase"],
    features: [
      "User registration and secure authentication",
      "Create, update, and manage events with event details",
      "Browse upcoming events with search and category filtering",
      "Event registration and attendee management",
      "Responsive user interface with intuitive navigation",
    ],
    challenges: [
      "Managing real-time event data synchronization and ensuring a smooth user experience across multiple screens.",
    ],
    architecture:
        "Android application following a layered architecture with Activities, Services, Firebase backend, and reusable UI components for authentication, event management, and data persistence.",
    github: "https://github.com/Karanbhosale18/EventPlannerApp",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering, Computer Engineering",
    school: "University of Mumbai",
    period: "2022 — 2026",
  },
  {
    degree: "Diploma, Computer Engineering",
    school: "Rayat Shikshan Sanstha",
    period: "2019 — 2022",
  },
];

export const CERTIFICATIONS = [
  { name: "AI Agents for Beginners", issuer: "Microsoft", link:"https://drive.google.com/file/d/1muK8mH5wcSpwBoWctQt5apxo4KmSg6h2/view?usp=drive_link"},
  { name: "Deloitte Data Analytics Job Simulation", issuer: "Forage / Deloitte", link:"https://drive.google.com/file/d/1naKTkSYZaOAtlNR8Byw58BdHep1-Keeb/view?usp=drive_link"},
  { name: "Goldman Sachs Operations Job Simulation", issuer: "Forage / Goldman Sachs", link:"https://drive.google.com/file/d/104VwdkS9JDJPHhJ9exBUAsKSc8xyhoJZ/view?usp=drive_link" },
  { name: "Java Development Internship", issuer: "SaiKet Systems", link:"https://drive.google.com/file/d/1RJnQuh2rHfHm_2o1B1_bFqYo812CELQj/view?usp=drive_link" },
  { name: "Android Development Internship", issuer: "Navyug Infotech", link:"https://drive.google.com/file/d/1pf4DH7Tv9xfr2aKPkilLiNGR7GNs_IyD/view?usp=drive_link" },
];

export const CODING_JOURNEY = [
  "Started Programming",
  "Learned Java",
  "Android Development",
  "Firebase",
  "Git & GitHub",
  "Spring Boot",
  "REST APIs",
  "Spring Security",
  "JWT",
  "Backend Projects",
  "Microservices",
  "Docker",
  "AWS",
  "Software Engineer",
];

export const ACHIEVEMENTS = [
  { label: "Projects Completed", value: 4 },
  { label: "Technologies Learned", value: 25 },
  { label: "Certificates", value: 5 },
  { label: "Years Learning", value: 3 },
];

export const SERVICES = [
  {
    title: "Backend Development",
    description: "Robust, well-tested backend systems designed to scale with real traffic.",
  },
  {
    title: "REST API Development",
    description: "Secure, documented APIs following consistent, predictable conventions.",
  },
  {
    title: "Full Stack Development",
    description: "End-to-end applications connecting a React front end to a Java backend.",
  },
  {
    title: "Java Application Development",
    description: "Clean, maintainable Java applications built on solid OOP foundations.",
  },
  {
    title: "Database Design",
    description: "Schemas and queries tuned for correctness first, then performance.",
  },
  {
    title: "Android Development",
    description: "Native Android apps with Firebase-backed auth and data sync.",
  },
];
