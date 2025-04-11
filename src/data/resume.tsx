import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Akshat Singh",
  initials: "DV",
  // url: "https://dillion.io",
  location: "India",
  description:
    "Engineering elegant solutions to complex problems",
  summary:
    "I'm a Software Engineer with a strong foundation in Computer Science and a passion for building scalable tech solutions. My expertise spans full-stack development, system design, and cloud infrastructure. Through hands-on projects and hackathons, I've developed proficiency in building robust applications.",
  avatarUrl: "/me.png",
  skills: [
    "C++",
    "JavaScript",
    "TypeScript",
    "React",
    "ReactNative",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Redis",
    "Docker",
    "AWS",
    "Tailwind CSS"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "akshatsing11@gmail.com",
    tel: "8009938000",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/abhi-yo",
        icon: Icons.github,
        navbar: true
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/singh-akshat/",
        icon: Icons.linkedin,
        navbar: true
      },
      X: {
        name: "X",
        url: "https://x.com/akshatsingh_s",
        icon: Icons.x,
        navbar: true
      },
    }
  },
  education: [
    {
      school: "Delhi Public School",
      href: "https://dpsjankipuram.com/Site/Home/240000001_240000001_Home",
      degree: "High School",
      logoUrl: "/dps.jpg",
      start: "2020",
      end: "2021",
    },
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
      company: "Stick & Dot Media",
      title: "Founding Software Development Engineer",
      location: "India",
      type: "Full-time",
      start: "January 2025",
      end: "Present",
      href: "https://stickanddot.com",
      logoUrl: "/stickdot.jpg",
      description: "Working as a founding member of the engineering team, responsible for architecting and developing core platform features. Leading technical decisions and implementing scalable solutions for the company's digital media platform. Collaborating with cross-functional teams to define and execute product roadmap.",
      badges: []
    }
  ],
  projects: [
    {
      title: "Devconnect",
      href: "https://github.com/abhi-yo/hyperlocal",
      dates: "April, 2025",
      active: true,
      description:
        "A modern social platform for developers to connect, share ideas, and collaborate on projects. Features include GitHub OAuth integration, trending repositories section, and Dev.to/Reddit content integration.",
      technologies: [
        "Next.js",
        "React",
        "TailwindCSS",
        "tRPC",
        "Prisma",
        "PostgreSQL",
        "Redis",
        "NextAuth.js",
        "TypeScript"
      ],
      links: [
          {
            type: "Website",
            href: "https://devconnect-social.vercel.app",
            icon: <Icons.globe className="size-3" />,
          },
      ],
      image: "",
      video: "/videos/devconnect.mp4",
    },
    {
      title: "Event Sphere",
      href: "https://github.com/abhi-yo/hyperlocal",
      dates: "October, 2024",
      active: true,
      description:
        "Event platform where users can create, discover, and join local events in real-time. Developed event-specific chat channels enabling dedicated real-time communication for each event.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Socket.io",
        "Redis",
        "MongoDB",
        "Google Maps API",
        "Vultr Cloud"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abhi-yo/hyperlocal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/eventsphere.mp4",
    },
    {
      title: "Smart Shelf",
      href: "https://github.com/abhi-yo/smart-shelf",
      dates: "August 16th - 17th, 2024",
      active: true,
      description:
        "Automates inventory tracking by reading RFID tags and storing data in a database. Streamlines stock monitoring and reduces manual checks by automatically recording RFID tag data in real-time.",
      technologies: [
        "Node.js",
        "Express",
        "SerialPort",
        "MongoDB",
        "Arduino",
        "JavaScript",
        "HTML/CSS"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/abhi-yo/smart-shelf",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video: "/videos/smartshelf.mp4 ",
    },
    {
      title: "Ecommerce",
      href: "https://github.com/abhi-yo/ecommerce-frontend",
      dates: "Feb 2024 - May 2024",
      active: true,
      description:
        "A full-stack ecommerce platform with user authentication, product catalog, shopping cart, and admin dashboard.",
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
          href: "https://ecommerce-frontend-iota-three.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/abhi-yo/ecommerce-frontend",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video: "https://i.imgur.com/xN9C6gb.mp4",
    },
  ],
  Milestones: [
    {
      title: "Casino Games",
      dates: "February 14th, 2025",
      description:
        "A browser-based casino application featuring Slots and Roulette games, built with TypeScript.",
      location:"",
      image:
        "./casinogame.jpg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/abhi-yo/casino-games",
        }
      ],
    },
    {
      title: "Code Complexity Analyzer",
      dates: "February 8th, 2025",
      description:
        "A powerful tool that leverages Generative AI to analyze and visualize the complexity of your algorithms. This tool provides detailed insights into time complexity, space complexity, and potential optimizations for your code.",
      location:"",
      image:
        "./bigOcalc.jpg",
      links: [
        {
          title: "Live Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://big-o-calc.vercel.app/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/abhi-yo/BigOCalc",
        }
      ],
    },
    {
      title: "API Rate Limiter",
      dates: "January 6th - 11th, 2025",
      description:
        "Test rate limiting on any API endpoint",
      location:"",
      image:
        "./apiratelimiter.jpg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/abhi-yo/rate-limiter",
        }
      ],
    },
    {
      title: "WebRTC Video Streaming Application",
      dates: "December 12th - 13th, 2024",  // Using current date since no specific date was provided
      description:
        "Developed a real-time peer-to-peer video streaming application using WebRTC and WebSocket. Features include live video broadcasting from a sender to receiver with efficient signaling server implementation.",
        location:"",
      image:
        "./webrtc.jpeg",  // Keeping the same image path
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/abhi-yo/simple-webrtc-stream",
        },
      ],  // Keeping empty links array
      // Removed MLH badge since it's not relevant to this project
},
{
  title: "GitHub Profile Roaster",
  dates: "2024",
  description: "A fun web application built with React and Next.js that roasts GitHub profiles in a humorous way. Users can input GitHub usernames to receive entertaining and playful critiques of their profiles.",
  location:"",
  image: "./githubroast.png",  // You'll need to update with actual image URL
  links: [
    {
      title: "Live Demo",
      icon: <Icons.globe className="h-4 w-4" />,
      href: "https://roasting-github.vercel.app",
    },
    {
      title: "Source",
      icon: <Icons.github className="h-4 w-4" />,
      href: "https://github.com/YourUsername/github-profile-roaster",  // You'll need to update with actual GitHub repo
    }
  ]
},
    {
      title: "Sparkathon",
      dates: "August 16th, 2024",
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
  ],
} as const;
