import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const BASE_PATH = "/assets/projects-screenshots";

// Renders a brand SVG from /public as a monochrome glyph that inherits the
// surrounding text color (the skill dock styles every icon via currentColor).
const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={live}>
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link className="font-mono underline flex gap-2" rel="noopener" target="_new" href={repo}>
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

// Brand chips sourced from thesvg CLI mono SVGs in /public/assets/logos.
const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const PROJECT_SKILLS = {
  tsx: brand("TypeScript React", "typescript-mono.svg"),
  js: brand("JavaScript", "javascript-mono.svg"),
  python: brand("Python", "python-mono.svg"),
  react: brand("React.js", "react-mono.svg"),
  vite: brand("Vite", "vite-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  express: brand("Express.js", "express-mono.svg"),
  php: brand("PHP", "php-mono.svg"),
  html: brand("HTML5", "html5-mono.svg"),
  css: brand("CSS3", "css3-mono.svg"),
  supabase: brand("Supabase", "supabase-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  mysql: brand("MySQL", "mysql-mono.svg"),
  mongodb: brand("MongoDB", "mongodb-mono.svg"),
  aws: brand("AWS RDS", "aws-mono.svg"),
  firebase: brand("Firebase", "firebase-mono.svg"),
  kotlin: brand("Kotlin", "kotlin-mono.svg"),
  androidstudio: brand("Android Studio", "Android-Studio-mono.svg"),
  arduino: brand("Arduino / C++", "arduino-mono.svg"),
  xampp: brand("XAMPP", "xampp-mono.svg"),
  // Not in the thesvg registry — keep text marks.
  lovable: {
    title: "Lovable AI",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">AI</span>,
  },
  litedb: {
    title: "LiteDB",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Lite</span>,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const AUTHOR = {
  name: "Jayson Baldovino",
  email: "jysnbldvn@gmail.com",
  github: "https://github.com/jysnbldvn01",
  linkedin: "https://www.linkedin.com/in/jysnbldvn",
};

const projects: Project[] = [
  {
    id: "nearzerodowntime",
    category: "AI Audit System",
    title: "NearZeroDowntime AI Audit System",
    src: `${BASE_PATH}/nearzerodowntime/landing.png`,
    screenshots: ["landing.png", "dashboard.png", "choice.png", "aichat.png"],
    live: "https://nearzerodowntime.com",
    github: "#",
    skills: {
      frontend: [PROJECT_SKILLS.tsx, PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.supabase, PROJECT_SKILLS.postgres, PROJECT_SKILLS.lovable],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-driven infrastructure auditing against ISO 27001, NIST, ITIL, and FinOps.
          </TypographyP>
          <TypographyP className="font-mono">
            Co-developed a full-stack architecture with a TSX frontend integrated with a Supabase
            PostgreSQL backend via Lovable AI.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">AI Auditing Engine</TypographyH3>
          <p className="font-mono mb-2">
            Automatically evaluates infrastructure data against ISO 27001, NIST, ITIL, and FinOps
            frameworks.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/nearzerodowntime/choice.png`,
              `${BASE_PATH}/nearzerodowntime/aichat.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Reporting Dashboard</TypographyH3>
          <p className="font-mono mb-2">
            Delivers real-time infrastructure visibility and boardroom-ready strategic insights to the
            executive team.
          </p>
          <SlideShow images={[`${BASE_PATH}/nearzerodowntime/dashboard.png`]} />
        </div>
      );
    },
  },
  {
    id: "mvaa",
    category: "School Management Platform",
    title: "Medes Voice and Arts Academy (MVAA)",
    src: `${BASE_PATH}/mvaa/landing.png`,
    screenshots: [
      "landing.png",
      "enrollementreg.png",
      "dashboard.png",
      "calendar.png",
      "schedulevisit.png",
    ],
    live: "#",
    github: "#",
    skills: {
      frontend: [PROJECT_SKILLS.tsx, PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.php, PROJECT_SKILLS.supabase, PROJECT_SKILLS.postgres],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Full-stack academy management system — as Lead Full-Stack Developer.
          </TypographyP>
          <TypographyP className="font-mono">
            Engineered the full-stack architecture using a React.js frontend and a custom PHP backend
            with Supabase (PostgREST REST API) and PostgreSQL.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Centralized Scheduling</TypographyH3>
          <p className="font-mono mb-2">
            A centralized master calendar synchronizing instructor availability, classes, and
            appointments.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/mvaa/calendar.png`,
              `${BASE_PATH}/mvaa/schedulevisit.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Enrollment & Support</TypographyH3>
          <p className="font-mono mb-2">
            A dynamic online enrollment module for secure student registration, plus an end-to-end
            support ticketing dashboard and role-based admin panels.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/mvaa/enrollementreg.png`,
              `${BASE_PATH}/mvaa/dashboard.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "peerfusion",
    category: "Skill Share Platform",
    title: "PeerFusion Skill Share Platform",
    src: `${BASE_PATH}/peerfusion/landing.png`,
    screenshots: [
      "landing.png",
      "homepage.png",
      "login.png",
      "signin.png",
      "accountsetup.png",
      "accountsettings.png",
      "chat.png",
      "videostream.png",
    ],
    live: "https://peerfusionskillshare.com",
    github: "#",
    skills: {
      frontend: [PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.aws, PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A peer-to-peer skill-sharing platform for students — as Lead Full-Stack Developer.
          </TypographyP>
          <TypographyP className="font-mono">
            Led development of a web-based platform, designing and implementing both front-end and
            back-end components.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Onboarding & Auth</TypographyH3>
          <p className="font-mono mb-2">
            Login, sign-in, and account setup flows for getting new users onto the platform.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/peerfusion/login.png`,
              `${BASE_PATH}/peerfusion/signin.png`,
              `${BASE_PATH}/peerfusion/accountsetup.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Platform Features</TypographyH3>
          <p className="font-mono mb-2">
            Features for user interaction, skill sharing, and platform management, with databases and
            APIs integrated to support core functionality.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/peerfusion/homepage.png`,
              `${BASE_PATH}/peerfusion/chat.png`,
              `${BASE_PATH}/peerfusion/videostream.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Account Management</TypographyH3>
          <p className="font-mono mb-2">
            Account settings for managing profile info and platform preferences.
          </p>
          <SlideShow images={[`${BASE_PATH}/peerfusion/accountsettings.png`]} />
        </div>
      );
    },
  },
  {
    id: "barangay",
    category: "Government Records System",
    title: "Barangay Management System",
    src: `${BASE_PATH}/barangay/landing.png`,
    screenshots: [
      "landing.png",
      "dashboard.png",
      "certification.png",
      "logbook.png",
      "record.png",
      "settings.png",
    ],
    live: "#",
    github: "#",
    skills: {
      frontend: [PROJECT_SKILLS.html],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.xampp, PROJECT_SKILLS.mysql],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Digital records system for Barangay 570 & Bagong Tanyag — Co-Developer.
          </TypographyP>
          <TypographyP className="font-mono">
            Built with HTML5, Python, and XAMPP MariaDB to replace manual barangay paperwork.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Automated Certificates</TypographyH3>
          <p className="font-mono mb-2">
            A resident search feature that auto-generates Barangay Clearances and other government
            certificates on demand.
          </p>
          <SlideShow images={[`${BASE_PATH}/barangay/certification.png`]} />

          <TypographyH3 className="my-4 mt-8">Centralized Records</TypographyH3>
          <p className="font-mono mb-2">
            A centralized digital record system that improved processing speed and accessibility for
            barangay staff.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/barangay/dashboard.png`,
              `${BASE_PATH}/barangay/record.png`,
              `${BASE_PATH}/barangay/logbook.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Administration</TypographyH3>
          <p className="font-mono mb-2">
            System settings for managing staff access and configuring day-to-day operations.
          </p>
          <SlideShow images={[`${BASE_PATH}/barangay/settings.png`]} />
        </div>
      );
    },
  },
  {
    id: "dailycal",
    category: "Mobile App",
    title: "DailyCal Application",
    src: `${BASE_PATH}/dailycal/landing.png`,
    screenshots: [
      "landing.png",
      "login.png",
      "register.png",
      "dashboard.png",
      "trackcalories.png",
      "trackphysical.png",
      "bmicalculator.png",
      "history.png",
    ],
    live: "#",
    github: "#",
    skills: {
      frontend: [PROJECT_SKILLS.kotlin, PROJECT_SKILLS.androidstudio],
      backend: [PROJECT_SKILLS.litedb],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Native Android calorie-tracking app — Co-Developer.
          </TypographyP>
          <TypographyP className="font-mono">
            Engineered in Kotlin for productivity and real-time calorie tracking, with LiteDB as an
            embedded NoSQL store for lightweight, local data management.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Onboarding</TypographyH3>
          <p className="font-mono mb-2">
            Login and registration flows for setting up a new user profile.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/dailycal/login.png`,
              `${BASE_PATH}/dailycal/register.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Tracking & Dashboard</TypographyH3>
          <p className="font-mono mb-2">
            Interactive UI components paired with real-time data tracking pipelines, including calorie
            and physical activity logging.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/dailycal/dashboard.png`,
              `${BASE_PATH}/dailycal/trackcalories.png`,
              `${BASE_PATH}/dailycal/trackphysical.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">BMI & History</TypographyH3>
          <p className="font-mono mb-2">
            A built-in BMI calculator alongside a history view for reviewing past entries over time.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/dailycal/bmicalculator.png`,
              `${BASE_PATH}/dailycal/history.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "iot-humidifier",
    category: "IoT System",
    title: "IoT Air Humidifier Detector",
    src: `${BASE_PATH}/iot-humidifier/landing.png`,
    screenshots: ["landing.png"],
    live: "#",
    github: "#",
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.arduino],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Arduino Uno-based environmental monitoring system — Technical Leader.
          </TypographyP>
          <TypographyP className="font-mono">
            Led development of an Arduino Uno-based IoT system using environmental sensors, integrating
            hardware and software for automated humidifier control.
          </TypographyP>
        </div>
      );
    },
  },
  {
    id: "earist-enrollment",
    category: "School Enrollment System",
    title: "School Enrollment Web System (EARIST)",
    src: `${BASE_PATH}/earist/landing.png`,
    screenshots: ["landing.png", "enrollment.png"],
    live: "#",
    github: "#",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.vite],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.xampp, PROJECT_SKILLS.mysql],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Enrollment system for EARIST — Lead Developer.
          </TypographyP>
          <TypographyP className="font-mono">
            Built with React.js (Vite) on the frontend and Node/Express.js with MySQL on the backend.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Data Flow & Processing</TypographyH3>
          <p className="font-mono mb-2">
            Implemented HTTP request/response handling between frontend and backend, and managed
            multiple database entities for enrollment data processing.
          </p>
        </div>
      );
    },
  },
];

export default projects;