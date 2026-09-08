# 🚀 Jayson Baldovino — Portfolio

The personal developer portfolio of **Jayson Baldovino**, a full-stack web developer and creative technologist. Built on top of the open-source [3D Portfolio](https://github.com/Naresh-Khatri/3d-portfolio) template by **Naresh Khatri** — featuring an interactive 3D keyboard where each keycap represents a skill, smooth scroll-driven animations, and a space-themed aesthetic.

🔗 **Live site:** [jaysonbaldovino.vercel.app](https://jaysonbaldovino.vercel.app)

![Portfolio Preview](https://github.com/Naresh-Khatri/Portfolio/blob/main/public/assets/projects-screenshots/portfolio/landing.png?raw=true)

> This project is built on the [3D Portfolio](https://github.com/Naresh-Khatri/3d-portfolio) template, created by [Naresh Khatri](https://github.com/Naresh-Khatri) and used here under the MIT License. All credit for the original 3D keyboard concept, animation system, and base architecture goes to the original author — see [Credits](#-credits) below.

## ✨ Features

- **Interactive 3D Keyboard** — Custom Spline keyboard where each keycap represents a skill, revealing titles and descriptions on hover/press
- **Buttery Animations** — GSAP + Framer Motion powered scroll, hover, and reveal animations
- **Space Theme** — Floating particles on a dark canvas for a cosmic vibe
- **Light & Dark Mode** — Full theme support
- **Responsive** — Works across all screen sizes
- **Contact Form** — Email delivery via Resend
- **Real Projects** — NearZeroDowntime AI Audit System, MVAA school management platform, PeerFusion skill-share platform, and more

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 14, React 18, TypeScript |
| **Styling** | Tailwind CSS, Shadcn UI |
| **Animation** | GSAP, Framer Motion |
| **3D** | Spline Runtime |
| **Email** | Resend |
| **Misc** | Lenis (smooth scroll), Zod, next-themes |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm (recommended), npm, or yarn

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/jysnbldvn01/jayson_profile.git
    cd jayson_profile
    ```

2. **Install dependencies:**

    ```bash
    pnpm install
    ```

3. **Set up environment variables:**

    Copy `.env.example` to `.env.local` and fill in the values:

    ```bash
    cp .env.example .env.local
    ```

    | Variable | Required | Description |
    |---|---|---|
    | `RESEND_API_KEY` | Yes | API key from [Resend](https://resend.com) for the contact form |
    | `NEXT_PUBLIC_WS_URL` | No | WebSocket server URL for realtime features (cursors, chat, presence) |
    | `UMAMI_DOMAIN` | No | Umami analytics script URL |
    | `UMAMI_SITE_ID` | No | Umami website ID |

4. **Run the development server:**

    ```bash
    pnpm dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) to view it locally.

---

## 📁 Project Structure

Personal info lives in [`src/data/config.ts`](src/data/config.ts) — name, bio, social links, and SEO metadata.

| File | What it controls |
|---|---|
| `src/data/config.ts` | Name, title, bio, keywords, social links |
| `src/data/projects.tsx` | Project entries, screenshots, descriptions, and tech stacks |
| `src/data/constants.ts` | Skills list and work experience |
| `public/assets/` | Images, OG image, and project screenshots |

---

## ⌨️ The 3D Keyboard

The skill keycaps are baked into a Spline scene (`public/assets/skills-keyboard.spline`). Each keycap's object name in Spline must match a key in `SKILLS` inside `src/data/constants.ts` for hover/press interactions to work correctly.

---

## 🔌 Realtime Features (Optional)

Supports optional realtime features (live cursors, presence, chat) powered by a separate backend. These activate automatically when `NEXT_PUBLIC_WS_URL` is set; without it, the site runs perfectly fine as a static build.

---

## 🚀 Deployment

Deployed on **Vercel**. Every push to `main` triggers an automatic deployment.

---

## 🙏 Credits

This portfolio is built on top of the [**3D Portfolio**](https://github.com/Naresh-Khatri/3d-portfolio) open-source template by **[Naresh Khatri](https://github.com/Naresh-Khatri)**, licensed under MIT. The 3D keyboard concept, base animation system, and original architecture are his work — all project content, branding, and personal data in this repository are my own.

If you're looking for the original template to build your own portfolio, check it out here: **https://github.com/Naresh-Khatri/3d-portfolio**

## 📄 License

This project is based on an MIT-licensed template. See [LICENSE](LICENSE) for details.