const config = {
  title: "Jayson Baldovino | Full-Stack Web Developer",
  description: {
    long: "Explore the portfolio of Jayson Baldovino, a passionate full-stack web developer and creative technologist specializing in building scalable web applications, interactive user experiences, and innovative digital solutions. Discover my latest projects including e-commerce platforms, real-time collaboration tools, AI-powered applications, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Jayson Baldovino, a full-stack developer creating innovative web experiences and scalable applications.",
  },
  keywords: [
    "Jayson Baldovino",
    "Jayson portfolio",
    "full-stack developer",
    "web developer",
    "creative technologist",
    "web development",
    "software engineer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "full-stack web development",
    "e-commerce platforms",
    "real-time applications",
    "AI applications",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "tRPC",
    "Drizzle ORM",
    "Cloudflare",
    "Docker",
    "portfolio",
    "interactive websites",
  ],
  author: "Jayson Baldovino",
  email: "jysnbldvn@gmail.com",
  site: "https://jaysonbaldovino.vercel.app",

  // for github stars button
  githubUsername: "jysnbldvn01",
  githubRepo: "portfolio",

  // Add this for smaller name display
  nameDisplay: {
    size: "text-4xl", // or "text-3xl" for even smaller
    fontWeight: "font-bold",
    spacing: "tracking-tight",
  },

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/jysnnn_",
    linkedin: "https://www.linkedin.com/in/jysnbldvn/",
    instagram: "https://www.instagram.com/jysnnnn_/",
    facebook: "https://web.facebook.com/jysn.bldvn",
    github: "https://github.com/jysnbldvn01",
    email: "jysnbldvn@gmail.com",
  },
};

export { config };