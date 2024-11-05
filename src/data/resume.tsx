import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Amaljith",
  initials: "T A",
  url: "https://x.com/Amaljith_T_A",  // Replace with your actual website URL if available
  location: "India",  // Replace with your actual location
  locationLink: "https://www.google.com/maps/place/YourLocation",  // Replace with actual Google Maps link if needed
  description:
    "Full Stack Developer with a passion for crafting seamless digital experiences using modern web technologies.",
  summary:
    "As a dedicated developer, I specialize in building robust applications using a range of technologies, with experience in both frontend and backend development. Currently enhancing my skills in full stack development, I am focused on leveraging JavaScript frameworks, Python, and database management to create impactful projects.",
  avatarUrl: "/propic.png",  // Replace with the path to your avatar image
  skills: [
    "React",
    "Redux",
    "Next.js",
    "Python",
    "Django",
    "REST APIs",
    "Microservices",
    "PostgreSQL",
    "MongoDB",
    "Node.js",
    "SQL",
    "Docker",
    "Kubernetes",
    "Tailwind CSS",
    "HTML/CSS",
    "JavaScript",
    "Postman",
    "Figma",
    "Photoshop",
    "API Development",
    "Git",
    "Version Control",
    "Agile Methodologies",
  ],
  
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "amaljith6430@gmail.com",
    tel: "+91 7025765018",  // Replace with your actual phone number if you want it included
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Amaljiththedev",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amaljith-t-a-679542311/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Amaljith_T_A",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:amaljith6430@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },


  work: [
    {
      company: "Luminary Lines",
      href: "https://luminarylines.com",  // Update if there's an actual URL
      badges: [],
      location: "Remote",
      title: "Software Contractor",
      logoUrl: "/luminarylines.png",  // Ensure this file is in your project assets
      start: "June 2023",
      end: "Present",
      description:
        "Worked on full stack application development, focusing on building and optimizing features using React, Redux, Django, and PostgreSQL. Enhanced system performance and streamlined API integrations to improve user experience.",
    },
    {
      company: "Brototype",
      href: "https://brototype.com",  // Update if there's an actual URL
      badges: [],
      location: "Remote",
      title: "Software Engineering Intern",
      logoUrl: "/broto.png",  // Ensure this file is in your project assets
      start: "February 2023",
      end: "Present",
      description:
        "Gained hands-on experience in software development through projects in Python, PostgreSQL, React, and Redux. Collaborated in a team environment to build and test scalable applications, focusing on writing clean, efficient code and learning best practices for modern web development.",
    },
  ],

  education: [
    {
      school: "Brototype",
      href: "https://brototype.com",  // Update if there's a specific URL for your program
      degree: "Coding Bootcamp in Full Stack Development",
      logoUrl: "/broto.png",  // Ensure this logo file is in your assets
      start: "2023",  // Adjust based on your actual start date
      end: "2024",
    },
    {
      school: "Chandigarh University",
      href: "https://www.cuchd.in/",
      degree: "Bachelor's Degree in Computer Science (BSc)",
      logoUrl: "/chandi.png",  // Ensure this logo file is in your assets
      start: "2020",
      end: "2023",
    },
  ],

  projects: [
    {
      title: "Luminary Lines",
      href: "https://www.luminarylines.com/",
      dates: "Start Date - Present",  // Replace "Start Date" with the actual month and year
      active: true,
      description:
        "A dynamic and visually engaging project featuring interactive elements and animations, built to showcase creative content. The project integrates advanced frontend technologies and cloud services to provide a seamless user experience.",
      technologies: [
        "TypeScript",
        "API",
        "Firebase",
        "Next.js",
        "Framer Motion",
        "Three.js",
        "Tailwind CSS",
        "AWS"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.luminarylines.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/luminary.png",  // Add image link if available
      video: "",  // Add video link if available
    },
  ],


} as const;
