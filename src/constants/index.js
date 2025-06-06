import ecomPix from "../assets/projects/ecomPix.png";
import resumePix from "../assets/projects/resumescreen.png";

export const HERO_CONTENT = `I'm a passionate and versatile Fullstack Developer dedicated to building robust, scalable, and user-centric web applications. With expertise spanning both frontend and backend technologies, I bring ideas to life, from intuitive interfaces to powerful server-side logic.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    description: `
While I'm currently seeking my first professional role, I've honed my skills by independently designing, developing, and deploying several impactful applications. These projects demonstrate my ability to tackle real-world challenges, manage full-stack development, and deliver robust, user-centric solutions.

Dynamic Resume Builder
Developed a multi-step web application using React, React Hook Form, and the Context API to streamline resume creation.
Implemented real-time form validation and dynamic state management for a smooth, intuitive user experience.
Featured a live preview and direct PDF export functionality, ensuring high-quality, professional outputs.
Designed a responsive and modern UI with Tailwind CSS. 

E-commerce Platform
Engineered a full-stack e-commerce solution, providing a seamless shopping experience.
Managed product listings, user authentication, shopping cart functionality, and order processing.
Utilized.
Implemented secure payment gateway integration [if applicable, mention which one, e.g., Stripe API].`,
    technologies: [
      "Javascript",
      "Typescript",
      "React.js",
      "tailwind css",
      "Nodejs",
      "mongoDB",
    ],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: ecomPix,
    description:
      "A production-ready, responsive eCommerce platform built to deliver a seamless user experience across devices. This project demonstrates strong frontend architecture, performance optimization, and real-world API integration.",
    technologies: ["HTML", "CSS", "TailwindCSS", "React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/Mylawyer555/street_shop/tree/master",
    demo: "https://street-shop2025.vercel.app/",
  },
  {
    title: "Resume Builder App",
    image: resumePix,
    description:
      "Engineered a sophisticated, multi-step resume builder application designed to streamline professional resume creation. Leverages React for a dynamic user interface, React Hook Form for robust real-time validation, and the Context API for efficient global state management. Features an intuitive, interactive form experience with instant preview capabilities and direct PDF export, ensuring high-quality, polished outputs. Styled with Tailwind CSS for a modern, responsive design.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],

    githubLink: "https://github.com/Mylawyer555/Resume-Generator",
    demo: "https://resume-proj-alpha.vercel.app/",
  },
];

export const CONTACT = {
  address: "Port Harcourt, Rivers State, Nigeria ",
  phoneNo: "+234 810 2882 359 ",
  email: "samuelabel636@gmail.com",
};
