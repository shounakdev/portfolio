import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Shounak Chandra",
  initials: "SC",
  location: "India",
  description:
    "A human who loves engineering",
  summary:
    "I'm a Software Engineer with a passion for building scalable tech solutions. I love learning new things. My expertise spans full-stack development, system design, and cloud infrastructure.",
  avatarUrl: "/icon.jpg",
  skills: [
    "Go",
    "Rust",
    "Java",
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "Cloud",
    "Blockchain"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "way2shounak@gmail.com",
    tel: "9674617402",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/shounakdev",
        icon: Icons.github,
        navbar: true
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shounakchandra/",
        icon: Icons.linkedin,
        navbar: true
      },
      X: {
        name: "X",
        url: "https://x.com/_shounakchandra",
        icon: Icons.x,
        navbar: true
      },
    }
  },
  education: [
    
    {
      school: "SRM Institute of Science and Technology",
      href: "https://www.srmist.edu.in/",
      degree: "B.Tech in Computer Science",
      logoUrl: "/srmlogo.png",
      start: "2021",
      end: "2025",
    }
  ],
  work: [
    {
      company: "Ericsson",
      title: "Software Enginner",
      location: "Remote, Global",
      type: "Full Time",
      start: "January 2025",
      end: "Present",
      href: "https://www.ericsson.com/en",
      logoUrl: "/Ericsson_log.png",
      description: "Currently paving the way for the next generation of wireless networks at Ericsson Research Labs  in collaboration with major telecom operators, including AT&T, Vodafone and China Mobile.",
      badges: []
    }
  ],
  projects: [
    {
      title: "JamJiggle",
      href: "https://github.com/shounakdev/meetup",
      dates: "August, 2025",
      active: true,
      description:
        "A fun video conference app where 2 people can connect, chat, share movies and have a great time.",
      technologies: [
        "Next.js",
        "React",
        "WebRTC",
        "Socket.io",
        "TypeScript"
      ],
      links: [
          {
            type: "Website",
            href: "https://jamjiggle.netlify.app/",
            icon: <Icons.globe className="size-3" />,
          },
      ],
      image: "/JamJiggle.png",
      video: "",
    },
    {
      title: "GitDock",
      href: "https://github.com/shounakdev/gitdock-web",
      dates: "June, 2025",
      active: true,
      description:
        "Your own cloud based RBAC first version control system. Control your code, collaborate with others, and manage your projects seamlessly.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Firebase",
        "Supabase",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://gitdock.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/Gitdock Intro.mp4",
    },
    {
      title: "Torrentino",
      href: "https://github.com/shounakdev/torentino",
      dates: "August, 2025",
      active: true,
      description:
        "An open source torrent client inspired by qbit torrent. Sevrer side build as a codecrafters advamced challenge. Clientside revamped with modern UI.",
      technologies: [
        "Node.js",
        "Express",
        "NativeFetch",
        "CookieHandler",
      
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abhi-yo/smart-shelf",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/Torrentino.png",
      //video: "/videos/smartshelf.mp4 ",
    },
    {
      title: "Bongiler",
      href: "https://github.com/shounakdev/Bongiler",
      dates: "September 2024",
      active: true,
      description:
        "A rust based bengali compiler for beginers. Bongiler was previously used by a NGO to encourage first gen learners to learn programming in their native language.",
      technologies: [
        "TypeScript",
        "Express",
        "MongoDB",
        "React",
        "SASS",
        "Docker"
      ],
      links: [
        {
          type: "Website",
          href: "https://bongiler.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        
      ],
      image: "",
      video: "/videos/bongiler demo video.mp4",
    },
  ],
  Milestones: [
    {
      title: "JamJiggle",
      dates: "August, 2025",
      description:
        "A fun video conference app where 2 people can connect, chat, share movies and have a great time.",
      location:"",
      image:
        "./JamJiggle.jpg",
      links: [
        {
          title: "Live Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://jamjiggle.netlify.app/",
        }
      ],
    },
    {
      title: "Gitdock",
      dates: "April, 2025",
      description:
        "Your own cloud based RBAC first version control system. Control your code, collaborate with others, and manage your projects seamlessly.",
      location:"",
      image:
        "./gitdock.png",
      links: [
        {
          title: "Live Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://gitdock.vercel.app/",
        }
      ],
    },
    {
      title: "Integration Engineer Intern",
      dates: "Jaunuary, 2025",
      description:
        "I join Ericsson as an Intern. On my way to climb the corporate ladder.",
      location:"",
      image:
        "./Ericsson_log.png",
    
    },
    {
      title: "Bongiler",
      dates: "Decmeber, 2024",
      description:
        "Bongiler gains tracktion and is used by a NGO to encourage first gen learners to learn programming in their native language.",
      location:"",
      image:
        "./Bongiler.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://bongiler.netlify.app/",
        }
      ],
    },
    {
      title: "Bongiler",
      dates: "September, 2024",
      description:
        "Start working on Bongiler a rust based bengali programming language compiler for beginners.",
      location:"",
      image:
        "./Bongiler.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/shounakdev/Bong-Compiler",
        }
      ],
    },
    {
      title: "Sparkathon",
      dates: "August, 2024",
      description: "Developed an IoT-based inventory management system using RFID technology for real-time stock monitoring. Features include automated restocking alerts, secure admin dashboard, and seamless integration with RFID sensors for accurate inventory tracking.",
      location:"",
      image:
        "./sparkathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/abhi-yo/smart-shelf",
        },
      ],
    },
    {
      title: "Stick and Dot",
      dates: "January, 2024",
      description:
        "Helped them build a 3D AR application using Unity 3D based on the Unity 3D AR Foundation Framework.",
      location:"",
      image:
        "./stickdot.jpg",
    },
    {
      title: "Cubane",
      dates: "June, 2023",
      description:
        "Started working with Cubane as a blockchain devloper intern.",
      location:"",
      image:
        "/cubane_logo.jpeg",
      
    },
    {
      title: "IoT Expo",
      dates: "March, 2023",
      description:
        "Placed 3rd at IoT Expo 2023 for providing the best waste management solution for the SRM Kattankulathur Campus.",
      location:"",
      image:
        "./srmlogo.png",
        links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://shounak2003-my.sharepoint.com/personal/shounak_chandra_shounak2003_onmicrosoft_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fshounak%5Fchandra%5Fshounak2003%5Fonmicrosoft%5Fcom%2FDocuments%2FShounak%2FPers%2FCertificate%20nd%20Ids%2FSRM%2FIoT%20Expo%2FIoT%20Expo%2Epdf&parent=%2Fpersonal%2Fshounak%5Fchandra%5Fshounak2003%5Fonmicrosoft%5Fcom%2FDocuments%2FShounak%2FPers%2FCertificate%20nd%20Ids%2FSRM%2FIoT%20Expo&ga=1",
        },
      ],
    },
    {
      title: "Speaker at first Offline Seminar",
      dates: "August, 2022",
      description:
        "Volunteering experience at Think Digital where I taught Unity 3d, basics of game physics and built a simple tetris 3d game with 50+ students.",
      location:"",
      image:
        "./td.png",
      
    },
    {
      title: "Hosting my first Offline Event",
      dates: "February, 2022",
      description:
        "Hosted my first offline event at RMC where students from more than 250+ collegees registered and perticipated in the event.",
      location:"",
      image:
        "./rmc.jpeg",
     
    },
    {
      title: "Technical Researcher",
      dates: "January, 2022",
      description:
        "Worked as a technical researcher at Christ Univerity, Bangalore. I built a Virtual Reality platform for cogitive research.",
      location:"",
      image:
        "./emblem_logo.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/shounakdev/Neuroscience-and-Instrumentation.git",
        }
      ],
    },
    {
      title: "Hosted first Online Event",
      dates: "August, 2021",
      description:
        "Hosted first online event at RMC where participants from more than 150+ colleges in India participated in more than 50+ events throughout the event.",
      location:"",
      image:
        "./rmc.jpeg",
    },
    {
      title: "Undergraduate Techinical Researcher",
      dates: "April 1st, 2025",
      description:
        "Helped make Virtual Maze Environments using Vizard.AI. Worked on connecting and getting data streams through biopac.",
      location:"",
      image:
        "./roorkee.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/shounakdev/Route-Learning-and-Spatial-Navigation.git",
        }
      ],
    },
    
    
  ],
} as const;
