/**
 * SEO Utilities for Portfolio
 */

// Structured Data for JSON-LD
export const getPersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kuldeep Kumar",
  url: "https://kuldeep-portfolio.com",
  image: "https://kuldeep-portfolio.com/avtar-image.jpg",
  sameAs: [
    "https://www.linkedin.com/in/kuldeep-kumar-485a13252/",
    "https://github.com/Kuldeep-Angural",
  ],
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Self Employed",
  },
});

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kuldeep Kumar Portfolio",
  url: "https://kuldeep-portfolio.com",
  logo: "https://kuldeep-portfolio.com/avtar-image.jpg",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "General Support",
    email: "kuldeep.navv@gmail.com",
  },
  sameAs: [
    "https://www.linkedin.com/in/kuldeep-kumar-485a13252/",
    "https://github.com/Kuldeep-Angural",
  ],
});

// Update meta tags dynamically
export const updateMetaTags = (title, description, keywords) => {
  const metaDescription = document.querySelector("meta[name='description']");
  const metaKeywords = document.querySelector("meta[name='keywords']");

  if (metaDescription) {
    metaDescription.setAttribute("content", description);
  }
  if (metaKeywords) {
    metaKeywords.setAttribute("content", keywords);
  }
  document.title = title;
};

// SEO Metadata for different sections
export const seoMetadata = {
  home: {
    title: "Kuldeep Kumar - Full Stack Developer Portfolio",
    description:
      "Welcome to my portfolio. I'm a full stack developer specializing in MERN stack and modern web technologies.",
    keywords:
      "Kuldeep Kumar, developer portfolio, about me, full stack developer",
  },
  journey: {
    title: "My Journey - Kuldeep Kumar Developer",
    description:
      "Explore my professional experience, career timeline, and journey as a full stack developer.",
    keywords:
      "experience, career timeline, professional journey, Kuldeep Kumar",
  },
  projects: {
    title: "My Projects - Kuldeep Kumar",
    description:
      "Discover the projects I've built using MERN stack, React, Node.js, and other modern technologies.",
    keywords:
      "projects, portfolio projects, MERN stack projects, React projects, Node.js",
  },
  skills: {
    title: "Technical Skills - Kuldeep Kumar",
    description:
      "I specialize in frontend and backend development with technologies like React, Node.js, MongoDB, and more.",
    keywords:
      "technical skills, React, Node.js, MongoDB, JavaScript, web development",
  },
  contact: {
    title: "Contact Me - Kuldeep Kumar",
    description:
      "Get in touch with me for collaboration, freelance projects, or just to say hello.",
    keywords: "contact, email, collaboration, freelance",
  },
};
