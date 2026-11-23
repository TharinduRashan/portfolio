export interface Project {
  number: string;
  name: string;
  type: string;
  description: string;
  tags: string[];
  href: string;
  visual: "pos" | "control" | "vidgrab";
  image?: string;
}

export interface SkillCategory {
  group: string;
  items: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HighlightItem {
  number: string;
  label: string;
  value: string | string[];
}

export interface ContactLink {
  name: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
}

export const portfolioData = {
  personal: {
    name: "Tharindu Rashan",
    initials: "TR",
    title: "Software Developer",
    subtitle: "CEO & Co-Founder of Cloudzyne",
    email: "tharindurashan7@gmail.com",
    roleDescription: "a software developer and IT undergraduate who enjoys turning thoughtful ideas into useful digital experiences.",
    location: "Sri Lanka",
    websiteUrl: "https://tharindurashan.me",
    seoDescription: "Tharindu Rashan — Software Developer & CEO & Co-Founder of Cloudzyne. I build useful software with purpose and precision.",
    shortBio: "Software Developer · CEO & Co-Founder of Cloudzyne. I build useful software with purpose and precision.",
    ogImageUrl: "https://tharindurashan.me/og-image.png?v=2",
    resumePath: "/Tharindu-Rashan-CV.pdf",
    resumeNote: "Curriculum Vitae • PDF"
  },

  socialLinks: {
    github: "https://github.com/TharinduRashan",
    linkedin: "https://www.linkedin.com/in/tharindu-rashan/",
    email: "mailto:tharindurashan7@gmail.com"
  },

  navigation: {
    wordmark: "TR",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Work", href: "/#work" },
      { label: "Skills", href: "/#skills" },
      { label: "Contact", href: "/#contact" }
    ] as NavLink[],
    cta: {
      label: "Let's talk",
      href: "#contact"
    }
  },

  hero: {
    status: "AVAILABLE FOR OPPORTUNITIES",
    heading: {
      main: "Building what's",
      muted: "next."
    },
    actions: {
      primary: {
        label: "Explore my work",
        href: "#work"
      },
      secondary: {
        label: "Get in touch",
        href: "mailto:tharindurashan7@gmail.com"
      }
    },
    meta: {
      location: "BASED IN SRI LANKA",
      tagline: "BUILDING FOR EVERYWHERE"
    },
    card: {
      yearTag: "TR / 2026",
      cross: "✳",
      monogram: {
        first: "T",
        second: "R"
      },
      lines: ["IDEAS INTO", "INTERFACES."],
      index: "01 — 03",
      caption: "DESIGN MINDED. ENGINEERING LED."
    }
  },

  introBand: {
    kicker: "A LITTLE ABOUT ME",
    quotePrefix: "I care about the details behind great software — ",
    quoteHighlight: "clear thinking, thoughtful design,",
    quoteSuffix: " and engineering that solves real problems.",
    linkHref: "#about"
  },

  about: {
    kicker: "01 / ABOUT",
    heading: {
      main: "Curious by nature.",
      muted: "Builder by choice."
    },
    paragraphs: [
      {
        id: "p1",
        lead: true,
        text: "I'm an IT undergraduate at SLIIT and BIT at UoM in Sri Lanka, focused on learning how technology can make everyday work simpler, smarter, and more reliable.",
        highlight: "SLIIT & BIT at UoM"
      },
      {
        id: "p2",
        lead: false,
        textBeforeLink: "Alongside my studies, I co-build ",
        linkText: "Cloudzyne",
        linkUrl: "https://www.cloudzyne.com",
        textAfterLink: ", a software venture where I get to explore real product development, client needs, and the decisions that turn an idea into a working solution."
      },
      {
        id: "p3",
        lead: false,
        text: "I enjoy working across the stack, learning how systems fit together, and getting hands-on with new tools. I'm especially interested in software products, AI, cloud technologies, and cybersecurity."
      }
    ],
    highlights: [
      { number: "01", label: "Currently", value: ["Studying IT at SLIIT", "BIT at UoM"] },
      { number: "02", label: "Building", value: "Software at Cloudzyne" },
      { number: "03", label: "Interested in", value: "AI · Cloud · Cybersecurity" }
    ] as HighlightItem[],
    resume: {
      label: "View résumé",
      href: "/Tharindu-Rashan-CV.pdf"
    }
  },

  projects: {
    kicker: "02 / SELECTED WORK",
    heading: {
      main: "Things I've been",
      muted: "working on."
    },
    note: "A selection of experiments, coursework, and products. More will find their way here as they take shape.",
    githubUrl: "https://github.com/TharinduRashan",
    items: [
      {
        number: "01",
        name: "Cloudzyne POS",
        type: "Business software · In development",
        description: "An offline-first point-of-sale platform designed around reliable retail workflows, licensing, and multi-terminal consistency.",
        tags: ["TypeScript", "Node.js", "Offline-first"],
        href: "https://github.com/Cloudzyne/POS",
        visual: "pos",
        image: "/projects/pos.png"
      },
      {
        number: "02",
        name: "VidGrab",
        type: "Desktop application · Open source",
        description: "A fast, modern desktop video and audio downloader powered by yt-dlp, featuring multi-platform extraction, format inspection, and parallel queue management.",
        tags: ["Python", "yt-dlp", "Tkinter"],
        href: "https://github.com/TharinduRashan/vidgrab",
        visual: "vidgrab",
        image: "/projects/vidgrab.png"
      },
      {
        number: "03",
        name: "TUF Control Center",
        type: "Desktop utility · Experiment",
        description: "A personal exploration into building useful system controls and desktop tooling for an ASUS TUF laptop.",
        tags: ["Rust", "Windows", "Systems"],
        href: "https://github.com/TharinduRashan/TUF-Control-Center",
        visual: "control",
        image: "/projects/control.png"
      }
    ] as Project[]
  },

  skills: {
    kicker: "03 / TOOLKIT",
    heading: {
      main: "Tools are just the",
      muted: "beginning."
    },
    intro: "I believe in choosing the right tool for the problem. Here are some of the technologies I've worked with and the areas I'm exploring.",
    categories: [
      { group: "Languages", items: ["Python", "Java", "JavaScript", "TypeScript", "C#", "Rust"] },
      { group: "Web & backend", items: ["React", "Next.js", "Spring Boot", "Node.js", "HTML & CSS"] },
      { group: "Tools & platforms", items: ["Git & GitHub", "Linux", "Azure", "Vercel", "Docker"] },
      { group: "Exploring", items: ["Artificial intelligence", "Cybersecurity", "Cloud infrastructure", "Automation"] }
    ] as SkillCategory[]
  },

  contact: {
    kicker: "04 / WHAT'S NEXT?",
    heading: {
      main: "Have a good idea?",
      highlight: "Let's make it real."
    },
    description: "I'm open to interesting projects, internships, collaborations, and conversations about technology.",
    cta: {
      label: "Say hello",
      href: "mailto:tharindurashan7@gmail.com"
    },
    links: [
      { name: "GitHub", href: "https://github.com/TharinduRashan", icon: "github" },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/tharindu-rashan/", icon: "linkedin" },
      { name: "Email", href: "mailto:tharindurashan7@gmail.com", icon: "mail" }
    ] as ContactLink[]
  },

  footer: {
    wordmark: "TR",
    tagline: "Designed & built with care.",
    backToTopLabel: "Back to top ↑"
  }
};
