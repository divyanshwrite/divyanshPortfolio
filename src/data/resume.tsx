import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Divyansh Singh Parihar",
  initials: "DS",
  description:
    "Software Engineer, I love building things and helping people. Very active on GitHub.",
  summary:
    "At the end of 2023, I decided to transition from my current role to fully focus on pursuing my passions and building something impactful. With a background shaped by Full Stack Development And Problem Solving, I’ve enjoyed exploring diverse opportunities—whether through Participating In Multiple Hackathons And by being part of inspiring communities like Tech community (dev.to,hashnode,medium) which keep me updated on regular basis.",
  avatarUrl: "/Profile.jpg", 
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://digitalfrontierdigest.framer.website/", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/divyanshwrite",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/divyansh-singh-parihar/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "Mail",
        url: "mailto:iemaildivyansh@Gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      Blog: {
        name: "Blog",
        url: "/blog",
        icon: Icons.globe,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "JobYaan",
      href: "https://jobyaan.com/",
      badges: [],
      location: "Remote",
      title: "Frontend Developer, App Developer",
      logoUrl: "/JobYaan.png",
      start: "Jan 2025",
      end: "Present",
      duration: "3 Months",
      description: [
        "Built and launched JobYaan, a React Native/Expo job marketplace for blue-collar workers in India, taking the product from inception to Play Store release.",
        "Helped the app cross 100+ downloads within its first week of going live through a polished mobile experience and production-ready release flow.",
        "Architected the frontend for job discovery, multi-step job posting, recruiter workflows, deep linking, and user onboarding.",
        "Integrated Razorpay payments with GST handling, FCM push notifications, Firebase Analytics, and SMS OTP auto-fetch using Android SMS Retriever API.",
        "Collaborated with backend (Go/Gin) and QA teams across EAS build pipelines, release testing, and production deployments.",
      ],
    },
    {
      company: "Artixio",
      href: "https://www.artixio.com/",
      badges: [],
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/Artixio.png",
      start: "Aug 2025",
      end: "",
      duration: "6 Months",
      description:
        "Working On Automation And User Interface And User Expreience For The Web",
    },
    {
      company: "Religare Housing Development Finance Corporation Limited",
      badges: [],
      href: "https://www.religarehomeloans.com/",
      location: "On-Site",
      title: "Full Stack Developer | Intern",
      logoUrl: "/Religare.png",
      start: "May 2025",
      end: "July 2025",
      duration: "2 Months",
      description:
        "I built a MERN-based entitlement review system for three departments, reducing manual review efforts by 60%. I integrated LDAP authentication and Excel-driven rights controls with dynamic filters, automated notification emails with Nodemailer (migrating from Gmail to Outlook SMTP), and led the production deployment on Ubuntu 22.04. Additionally, I authored comprehensive documentation for code, database, production, and onboarding workflows.",
    },
  ],
  education: [
    {
      school: "Jaypee Insitute Of Information Technology",
      href: "https://www.jiit.ac.in/",
      degree: "Bachelor Of Technology In Computer Science",
      logoUrl: "https://upload.wikimedia.org/wikipedia/en/5/56/Logo-jiit.png",
      start: "2023",
      end: "2026",
    },
    {
      school: "Graphic Era Hill University",
      href: "https://geu.ac.in/",
      degree: "Diploma Of Computer Science Engineering",
      logoUrl: "https://www.admissionindia.net/uploads/colleges/7/geu%20lgo.jpg",
      start: "2020",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "AI PPT Generator | ThesisOne - SlideOne",
      href: "https://vandral-thesis-one.vercel.app/",
      dates: "Jun 2025 - Jun 2025",
      active: true,
      description:
        "ThesisOne is an AI-powered presentation generator designed to instantly convert unstructured content — like documents, URLs, or text prompts — into professional, investor-ready pitch decks. Built for founders, analysts, and consultants, it uses LLMs and design intelligence to auto-generate slide layouts, visuals, and narratives. The platform offers real-time collaboration, drag-and-drop editing, export to PPT/PDF, and workspace management — all in a seamless Google Slides–like interface.",
      technologies: [
        "React JS",
        "Node JS",
        "MongoDB",
        "Vercel",
        "Render",
        "Express",
        "pptxgenjs",
        "jspdf",
        "Tailwind"
      ],
      links: [
        {
          type: "Website",
          href: "https://vandral-thesis-one.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vandralcapital/VandralThesisOne",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/AIPPT.png",
    },
    {
      title: "Intelligent Memory-Based Obfuscated Malware Detector",
      href: "https://obfucated-malware-detector-lrc3tjj7lzhwqssgxs8q6q.streamlit.app/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Modern malware frequently employs obfuscation techniques to evade detection by traditional systems. This project addresses these challenges by developing a Memory-Based Explainable Obfuscated Malware Detector, leveraging advanced machine learning techniques and explainable AI methodologies. The system is lightweight, efficient, and transparent, providing both high accuracy and interpretability in its malware detection process.",
      technologies: [
        "Python",
        "NumPy",
        "Pandas",
        "Pandas",
        "Scikit-Learn",
        "XGBoost",
        "SHAP",
        "Streamlit (for UI development)."
      ],
      links: [
        {
          type: "Website",
          href: "https://obfucated-malware-detector-lrc3tjj7lzhwqssgxs8q6q.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/divyanshwrite/obfucated-malware-detector",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Detector.png",
    },

    {
      title: "AIContent Generator",
      href: "",
      dates: "April 2025 - April 2025",
      active: true,
      description:
        "AI Content Generator With Gemini API",
      technologies: [
        "NEXT JS",
        "Toast UI",
        "Tailwind CSS",
        "Gemini API"
      ],
      links: [
        {
          type: "Website",
          href: "https://docontent.vercel.app/dashboard",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/DoContent.png",
    },
    {
      title: "StudyPal",
      href: "",
      dates: "April 2025 - April 2025",
      active: true,
      description:
        "Lets Like Minded Student Connect Each Other Via Video Confrencing, Made Me Qualified For The Final Round Of The RIDE Hack Hackathon Held In JIIT Sector 62 Noida, Uttar Pradesh",
      technologies: [
        "React Js",
        "Bootstrap",
        "oAuth",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/StudyPal.png",
    },
    {
      title: "Code To Image",
      href: "https://code-to-image-azure.vercel.app/",
      dates: "Dec 2024 - Present",
      active: true,
      description: "Code to Image is a web application that converts code snippets into beautiful images. It is designed to help developers share their code on social media platforms like Twitter, LinkedIn, and Instagram in a visually appealing way. The application supports multiple programming languages and themes, allowing users to customize the appearance of their code snippets before generating the final image.",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "HTML2Canvas",
        "Moncao Editor API"
      ],
      links: [
        {
          type: "Website",
          href: "https://code-to-image-azure.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/divyanshwrite/code-to-image",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/CodeToImage.png",
    },
    {
      title: "Nebula Canvas",
      href: "https://66f2d8cef57ecb95d2ba62ed-djaywyfdzy.chromatic.com/?path=/docs/components-button--docs",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "A React component library that provides a set of customizable and reusable components for building modern web applications. It is designed to be easy to use, flexible, and highly customizable, allowing developers to create beautiful and functional user interfaces with minimal effort.",
      technologies: [
        "React JS",
        "JavaScript",
        "Tailwind CSS"
      ],
      links: [
        {
          type: "Website",
          href: "https://66f2d8cef57ecb95d2ba62ed-djaywyfdzy.chromatic.com/?path=/docs/components-button--docs",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/nebulacanvas.png",
    },
    {
      title: "Web Portfolio",
      href: "https://utkarshbishtportfolio.vercel.app/",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "Utkarsh Bisht's Portfolio is a testament to modern web development, built with a robust tech stack designed for performance and aesthetics. Featuring technologies like React, Next.js, and Vercel for seamless deployment, it highlights projects that leverage cutting-edge tools and frameworks. From dynamic front-end designs to scalable back-end solutions, this portfolio is a showcase of technical expertise and innovation in the tech space.",
      technologies: [
        "Next.js",
        "Typescript",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://utkarshbishtportfolio.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/divyanshwrite/project",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/WebPortfolio.png",
    },
    {
      title: "8-Bit Style Design",
      href: "https://8-bit-style-design.vercel.app/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "8-Bit Style Design is your gateway to retro-inspired creativity, blending nostalgia with modern design aesthetics. Explore a collection of pixel-perfect designs, vibrant 8-bit artwork, and tools tailored to spark your imagination. Whether you're a fan of classic gaming visuals or simply love the charm of pixel art, this platform brings timeless creativity to life in every pixel.",
      technologies: [
        "HTML",
        "CSS",
        "Tailwind"
      ],
      links: [
        {
          type: "Website",
          href: "https://8-bit-style-design.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/divyanshwrite/8BitStyleDesign",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/BitStyle.png",
    },


    {
      title: "The Gmail Clone",
      href: "",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Its A Gmail Clone Wrote This Code For Practicle ",
      technologies: [
        "React JS",
        "Material UI",
        "Tailwind CSS"
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Mail.png",
    },



    {
      title: "Web Based JS Code Compiler",
      href: "",
      dates: "April 2025 - April 2025",
      active: true,
      description:
        "A Web Based JavaScript Compiler Based Out Of Monaco Editor API Which Is Currelty Used IN VS Code",
      technologies: [
        "Next Js",
        "Tailwind CSS",
        "Clerk",
        "Monaco Editor API"
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/JSCode.png",
    },
  ],
  hackathons: [
    {
      title: "RIDE HACK",
      dates: "April 19 - 21th, 2024",
      location: "Noida, Uttar Pradesh",
      description:
        "StudyPal, Developed a web app which help students connect with like minded student and have a video chat with them to explore the topic better. Qualified For Final Round",
      image:
        "./RideHackk.jpg",
      links: [],
    },
    {
      title: "Innovate 1.0",
      dates: "Nov 25 - 26, 2023",
      location: "Noida, Uttar Pradesh",
      description:
        "WealthVista, Property Management System Participated With A Team Of 3 Members Handled The Frontend Part Of The Project ",
      image:
        "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=1,background=white,quality=75,width=400,height=400/event-covers/z4/cdc5cf5b-6ca7-4f3c-b6d4-d902f18b1afe",
      links: [],
    },
    {
      title: "Technovation",
      dates: "May 09 - 11, 2020",
      location: "Bhimtal, Uttarakhand",
      description:
        "Developed A Full Frontend Website Under 1 Hour Matching All The Criteria. Successfully Secured 3rd Position",
      image:
        "TechNovation.png",
      links: [],
    },
  ],
} as const;
