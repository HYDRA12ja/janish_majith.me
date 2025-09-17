import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Video Game Player",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "HND in Computing",
    company_name: "ESOFT Metro Campus",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2025 -  2027",
    points: [
      "Gained practical knowledge in database design, software development, and web technologies.",
      "Developed and tested applications using Python, Java, and web development tools.",
      "Designed and managed databases with SQL, ensuring efficiency, integrity, and security.",
      "Applied networking principles including configuration, troubleshooting, and security.",
    ],
  },
  {
    title: "Pearson BTEC Level 3",
    company_name: "ESOFT Metro Campus",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Feb 2025",
    points: [
      "Gained foundational knowledge of IT systems, networking, and database management.",
      "Learned principles of programming, software design, and web technologies.",
      "Developed skills in IT support, troubleshooting, and system maintenance.",
      "Completed practical projects demonstrating problem-solving, teamwork, and communication skills.",
    ],
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    company_name: "Google",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2025 - Present",
    points: [
      "Developed hands-on skills in network security, system hardening, and security operations.",
      "Learned to use SIEM tools, intrusion detection systems, and security frameworks.",
      "Applied knowledge of threat analysis, incident response, and risk management.",
      "Gained experience with Linux, SQL, and Python for cybersecurity tasks.",
    ],
  },
  {
    title: "Full stack Developement Certificate",
    company_name: "Google",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Game Blaze",
    description:
      "A gaming community and platform that connects players through game streaming, community events, and digital game sales, while also expanding into game development, web solutions, and cybersecurity projects, creating an all-in-one hub for gamers and developers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://legion-arcade.vercel.app/",
  },
 
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
