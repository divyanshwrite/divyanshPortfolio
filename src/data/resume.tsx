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
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
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
