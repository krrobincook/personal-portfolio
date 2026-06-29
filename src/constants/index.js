const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Education",
    link: "#education",
  },
  {
    name: "Journey",
    link: "#journey",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 4, suffix: "", label: "Projects Completed" },
  { value: 250, suffix: "+", label: "LeetCode Problems Solved" },
  { value: 3, suffix: "", label: "Technologies Learned" },
  { value: 1, suffix: "", label: "Internships & Certifications" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/code.png",
    title: "Clean & Efficient Code",
    desc: "Building clean, scalable, and maintainable applications.",
  },
  {
    imgPath: "/images/fullstack.png",
    title: "Full Stack Development",
    desc: "Creating modern web applications with MERN and Spring Boot.",
  },
  {
    imgPath: "/images/problem-solving.png",
    title: "Problem Solving",
    desc: "Solving coding challenges with efficient algorithms and DSA.",
  },
];

const techStackImgs = [
  {
    name: "React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Three.js",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Node.js",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Express.js",
    imgPath: "/images/logos/express.png",
  },
  {
    name: "Spring Boot",
    imgPath: "/images/logos/spring-boot.svg",
  },
  {
    name: "MongoDB",
    imgPath: "/images/logos/mongodb.svg",
  },
  {
    name: "MySQL",
    imgPath: "/images/logos/mysql.svg",
  },
  {
    name: "Docker",
    imgPath: "/images/logos/docker.svg",
  },
  {
    name: "Git",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React.js",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Java",
    modelPath: "/models/java-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Three.js",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    review:
      "Built a scalable Employee Management System using the MERN stack with secure authentication, role-based access control, and Dockerized deployment.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/project-logo.png",
    title: "MERN Stack Developer (Personal Project)",
    date: "2026 - Present",
    responsibilities: [
      "Developed a full-stack Employee Management System using React, Node.js, Express.js, and MongoDB.",
      "Implemented JWT authentication, role-based authorization, and protected routes.",
      "Containerized the application using Docker and configured GitHub Actions for CI/CD.",
    ],
  },
  {
    review:
      "Developed backend applications with Spring Boot, focusing on REST APIs, database integration, and clean architecture.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/spring-logo.png",
    title: "Spring Boot Developer (Personal Projects)",
    date: "2025 - 2026",
    responsibilities: [
      "Built REST APIs using Spring Boot, Spring Data JPA, and MySQL.",
      "Created Book Store and Todo Management applications with CRUD functionality.",
      "Applied DTOs, ModelMapper, validation, and layered architecture for maintainable code.",
    ],
  },
  {
    review:
      "Strengthened problem-solving skills by consistently solving Data Structures and Algorithms problems and implementing efficient algorithms.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/leetcode-logo.png",
    title: "Data Structures & Algorithms",
    date: "2025 - Present",
    responsibilities: [
      "Solved 120+ LeetCode problems covering Trees, Graphs, Dynamic Programming, and Binary Search.",
      "Practiced writing optimized Java solutions with clean and readable code.",
      "Improved analytical thinking and interview preparation through consistent problem-solving.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];



const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};