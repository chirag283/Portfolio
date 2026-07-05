import { Project, SkillCategory, TimelineItem, Certification, Achievement } from "./types";

export const PERSONAL_INFO = {
  name: "Chirag Jangid",
  role: "Frontend Developer",
  tagline: "Code. Create. Innovate.",
  email: "chirag2002jangid@gmail.com",
  phone: "+91 8829858166",
  location: "Jaipur, Rajasthan, India",
  github: "https://github.com/chirag283",
  linkedin: "https://www.linkedin.com/in/chirag-jangid-b3308b24b/",
  resumeUrl: "#", // Can be handled dynamically or offer a professional print-friendly layout
  summary: "Passionate Frontend Developer with hands-on experience in HTML5, CSS3, JavaScript (ES6+), React.js, Java, and SQL, specializing in building responsive, user-centric web applications with highly immersive interactions.",
  careerGoal: "To leverage modern frontend technologies to engineer pixel-perfect, accessible, and high-performance user interfaces that solve complex commercial workflows and enhance brand narratives.",
};

export const HIGHLIGHTS = [
  {
    title: "REST API Integration",
    description: "Expertise in connecting frontends with live backend APIs, handling asynchronous fetch patterns, and caching responses.",
  },
  {
    title: "Responsive Design",
    description: "Creating fluid, viewport-agnostic designs using CSS Flexbox, Grid, and mobile-first responsive media breakpoints.",
  },
  {
    title: "AI Assisted Development",
    description: "Leveraging cutting-edge development systems like Google AI Studio, Lovable, and Firebase to accelerate product cycles.",
  },
  {
    title: "Problem Solving",
    description: "Developing clean, structured algorithms to solve data manipulation, table filtering, and real-time computation problems.",
  },
  {
    title: "Clean Code",
    description: "Following semantic standards, lint policies, clean directory scoping, and typing constraints to support scalable codebases.",
  },
  {
    title: "Performance Optimization",
    description: "Minimizing bundle footprint, leveraging virtualized lists, debouncing events, and optimizing heavy layout animations.",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    skills: [
      { name: "HTML5", iconName: "Html5", level: 95 },
      { name: "CSS3", iconName: "Css3", level: 90 },
      { name: "JavaScript (ES6+)", iconName: "Js", level: 88 },
      { name: "React.js", iconName: "React", level: 85 },
      { name: "Bootstrap", iconName: "Bootstrap", level: 80 },
      { name: "Responsive Design", iconName: "Responsive", level: 95 },
      { name: "CSS Flexbox & Grid", iconName: "Layout", level: 90 },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "REST APIs", iconName: "Api", level: 85 },
      { name: "JSON Parsing", iconName: "Json", level: 90 },
      { name: "Java Programming", iconName: "Java", level: 75 },
      { name: "SQL Querying", iconName: "Sql", level: 80 },
      { name: "MySQL Database", iconName: "Database", level: 80 },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", iconName: "Git", level: 85 },
      { name: "GitHub Version Control", iconName: "Github", level: 90 },
      { name: "Postman Client", iconName: "Postman", level: 80 },
      { name: "VS Code Editor", iconName: "Vscode", level: 90 },
    ],
  },
  {
    title: "Cloud & AI Utilities",
    skills: [
      { name: "Google AI Studio", iconName: "AiStudio", level: 85 },
      { name: "Firebase Services", iconName: "Firebase", level: 80 },
      { name: "Google Cloud Run", iconName: "Cloud", level: 75 },
      { name: "Lovable Integration", iconName: "Tool", level: 80 },
    ],
  },
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "edu-2",
    year: "2025 - Present",
    title: "Master of Computer Applications (MCA)",
    subtitle: "Currently Pursuing | JECRC University",
    description: "Deepening knowledge in advanced software systems, database engineering, and modern scalable frameworks."
  },
  {
    id: "edu-1",
    year: "2022 - 2025",
    title: "Bachelor of Computer Applications (BCA)",
    subtitle: "JECRC University",
    description: "Acquired core knowledge in network engineering, systems programming, databases, and client-tier application development."
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "2023",
  },
  {
    name: "Certified Network Defender (CND)",
    issuer: "EC-Council",
    date: "2022",
  },
  {
    name: "Web Development Certification",
    issuer: "JECRC University & Tech Partners",
    date: "2021",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Built multiple React projects",
    description: "Designed, tested, and deployed complex responsive web dashboards solving retail points of sale and modular e-commerce requirements.",
  },
  {
    title: "REST API Integration Mastery",
    description: "Configured reliable server queries and responsive client-side visual binding patterns using JSON models.",
  },
  {
    title: "Responsive UI Excellence",
    description: "Formulated robust multi-device grid alignments matching mobile, tablet, and desktop viewports seamlessly.",
  },
  {
    title: "Git & GitHub Governance",
    description: "Practiced disciplined commit workflows, branching patterns, and dynamic open-source documentation publishing.",
  },
  {
    title: "Postman API Diagnostic Testing",
    description: "Successfully validated request structures, API payload security, and network response speeds during full-stack cycles.",
  },
  {
    title: "Modern Web Engineering Focus",
    description: "Leveraged modern component lifecycles, virtual hooks, state memoization, and responsive transition setups.",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "chronos-saas",
    name: "Chronos SaaS",
    tagline: "E-Commerce Billing Desk & Inventory Console",
    description: "Developed a responsive E-Commerce Billing Platform with invoice generation, product management, scientific calculator integration, REST API connectivity, and MySQL-backed CRUD operations.",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "REST API", "MySQL"],
    githubUrl: "https://github.com/chirag283/Chronos-SaaS.git",
    liveUrl: "https://e-commerce-billing-platform-with-scientific-calcu-16930122928.asia-southeast1.run.app",
    features: [
      "Invoice Generation & Printable Receipts",
      "Dynamic Product Management Console",
      "Scientific Calculator Integration inside checkout flow",
      "Robust REST API CRUD payload binding",
      "Responsive layout for mobile sales clerks",
    ],
    details: {
      overview: "Chronos SaaS is a high-performance, point-of-sale and commercial administration console designed to optimize inventory management, real-time cost calculation, and transaction billing. It unifies essential digital business operations into a single rapid interface.",
      problemStatement: "Small-to-medium retail desks often execute calculations across disjointed apps—using independent hand calculators, writing down customer ledgers manually, and keeping product inventories in detached spreadsheet lists. This separation causes double-entry errors, input lag, and frustrated queues during busy periods.",
      solution: "Chronos SaaS provides a single unified view. A scientific computing module is built into the billing table, so sales agents can perform quick calculations side-by-side with invoice item additions. The console links immediately with REST services to synchronize customer details and product lists in real-time.",
      architecture: "Engineered as a clean, single-page client dashboard utilizing state management to keep billing calculations synchronous, linking with backend endpoints to manage state changes instantly.",
      folderStructure: `src/
├── components/
│   ├── BillingTable.tsx      # Invoice list & price aggregator
│   ├── ScientificCalc.tsx    # Math processor panel
│   ├── InventoryList.tsx     # Product table controller
│   └── ReceiptPDF.tsx        # High-precision print document
├── hooks/
│   └── useInventory.ts       # REST CRUD connector hook
└── App.tsx`,
      challenges: [
        "Constructing a high-precision arithmetic engine inside the reactive HTML DOM without triggering infinite render cycles or layout jumps.",
        "Ensuring the generated billing documents maintain perfect pixel sizing constraints for continuous thermal receipts and standard desktop printer models.",
      ],
      futureImprovements: [
        "Implementing an offline local cache layer using IndexedDB, syncing pending invoices back once a stable network restores.",
        "Adding optical camera scanning for automated UPC/barcode additions.",
      ],
    },
  },
  {
    id: "luxe-store",
    name: "Luxe Store",
    tagline: "Boutique E-Commerce App & Shopping Experience",
    description: "Developed a responsive e-commerce application featuring a product catalog, search, filtering, shopping cart, reusable React components, and REST API integration.",
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "REST API"],
    githubUrl: "https://github.com/chirag283/Luxe--Store-.git",
    liveUrl: "https://luxe-store-862759778813.asia-southeast1.run.app",
    features: [
      "Intuitive Product Catalog & Visual Masonry",
      "Client-Side Multi-Parameter Search & Filters",
      "Interactive sliding Shopping Cart drawer",
      "Reusable product item panels and layout modules",
      "Fully responsive touch targets for mobile buyers",
    ],
    details: {
      overview: "Luxe Store is a luxury boutique digital storefront emphasizing swift navigation, high-contrast imagery, responsive micro-animations, and instant feedback loops that capture a buyer's visual attention.",
      problemStatement: "Conventional store templates depend heavily on full-page refreshes during filtering. They also present bulky, slow shopping carts and clutter the user interface with unrefined filter panels, driving mobile bounce rates higher.",
      solution: "Implemented high-performance client-side memoized filter matching. All products are matched on the fly based on search keywords, selected categories, and pricing limits. The sliding shopping cart aggregates and totals item counts immediately, providing a smooth and instant checkout feel.",
      architecture: "Vite + React SPA structure utilizing centralized reactive state hooks for basket changes. Employs clean utility filters and lazy images for fast initial load.",
      folderStructure: `src/
├── components/
│   ├── ProductGrid.tsx   # Fluid layout of items
│   ├── FilterSidebar.tsx # Responsive search & options list
│   ├── MiniCart.tsx      # Slide-out basket manager
│   └── Badge.tsx         # Reusable styling badge
├── context/
│   └── CartContext.tsx   # Context for shopping state
└── App.tsx`,
      challenges: [
        "Perfecting touch-action responsiveness for the mobile side drawer across various web layouts and rendering engines.",
        "Managing local inventory counters dynamically so multiple catalog pages sync with cart subtotals securely.",
      ],
      futureImprovements: [
        "Integrating Stripe API for secure payments and real-time shipping estimate calculations.",
        "Developing AI-powered suggestions matching cross-sell trends.",
      ],
    },
  },
  {
    id: "personal-portfolio",
    name: "Personal Portfolio Website",
    tagline: "Recruiter-Optimized Interactive Terminal",
    description: "Developed a responsive portfolio website showcasing projects, technical skills, achievements, certifications, and contact information with modern animations and dark mode.",
    technologies: ["React.js", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/chirag283",
    features: [
      "Premium Dark & Light Mode themes with native CSS variables",
      "Staggered entrance layouts & elegant particle backgrounds",
      "Live Github API integrations rendering active repo stars",
      "Fully functional case-study modal details reader",
      "Interactive contact form supporting verified status states",
    ],
    details: {
      overview: "A premium, digital showcase built as an interactive resume for Chirag Jangid. It utilizes micro-animations and modular state tracking to display projects, live repository stats, and certifications in a recruiter-friendly format.",
      problemStatement: "Standard paper resumes and simple single-page static templates fail to showcase a frontend developer's visual judgment, interactive engineering capacity, or aesthetic attention to detail.",
      solution: "Created an immersive portfolio dashboard featuring smooth scroll transitions, dynamic card hovering effects, a personalized real-time clock, a styled live GitHub data console, and full responsive layout adaptability.",
      architecture: "Modular React component architecture styled with modern Tailwind CSS and coordinated with Framer Motion transitions.",
      folderStructure: `src/
├── components/
│   ├── Hero.tsx        # Title displays & tagline cards
│   ├── About.tsx       # Timeline & professional goals
│   ├── Skills.tsx      # Interactive skill badges
│   ├── GithubFeed.tsx  # Dynamic GitHub dashboard
│   ├── Contact.tsx     # Form state & local maps visual
│   └── Modal.tsx       # Detailed case-study viewer
└── App.tsx`,
      challenges: [
        "Balancing fluid particle vectors and shadow filters to maintain smooth 60fps scrolling on resource-constrained mobile screens.",
        "Providing an elegant local fallback structure to display valid project stats if the client's network encounters GitHub API rate limits.",
      ],
      futureImprovements: [
        "Integrating a lightweight visual retro Shell/CLI terminal for technical recruiters who prefer keyboard commands.",
        "Enabling live system performance graphs logging CPU and render times.",
      ],
    },
  },
];
