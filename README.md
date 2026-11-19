<div align="center">
  <h1>Tharindu Rashan</h1>
  <p><strong>Software Developer · IT Undergraduate · Tech Enthusiast</strong></p>
  <p>An Apple-inspired, minimalist personal portfolio crafted with purpose and precision.</p>

  <p>
    <a href="https://github.com/TharinduRashan"><strong>GitHub</strong></a> ·
    <a href="https://www.linkedin.com/in/tharindu-rashan/"><strong>LinkedIn</strong></a> ·
    <a href="mailto:tharindurashan7@gmail.com"><strong>Email</strong></a>
  </p>
</div>

---

## ✨ Overview

This repository contains the source code for my personal portfolio website. Designed with an editorial, Apple-inspired aesthetic, the site showcases selected software projects, technical toolkit, academic background at SLIIT & BIT at UoM, and co-building work at Cloudzyne.

### 🌟 Key Highlights

- **Apple-Inspired Aesthetic**: Clean typography, subtle glassmorphism, fluid micro-interactions, and geometric CSS illustrations.
- **Light & Dark Mode**: Seamless theme switching with user preference persistence via `localStorage`. Default light theme for new visitors.
- **Modular Architecture**: Built with reusable React components driven by a centralized data layer (`data/portfolio.ts`).
- **Performance & SEO Ready**: Next.js 15 App Router, zero layout shift (CLS), dynamic OpenGraph image generation, `robots.txt`, and automated `sitemap.xml`.
- **Fully Responsive**: Thoughtfully adapted layouts across desktop, tablet, and mobile viewports.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server & Client Components)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Modern Custom CSS (CSS Variables, Flexbox, Grid, Glassmorphism)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 📂 Project Structure

```bash
├── app/
│   ├── globals.css          # Design system, CSS variables & typography
│   ├── icon.svg             # Monogram favicon
│   ├── layout.tsx           # Root layout, metadata & SEO setup
│   ├── opengraph-image.tsx  # Dynamic 1200x630 social preview generator
│   ├── page.tsx             # Main client page layout & theme controller
│   ├── robots.ts            # Search engine crawler instructions
│   └── sitemap.ts           # Automatic sitemap generation
├── components/
│   ├── About.tsx            # Academic background, bio & CV link
│   ├── Contact.tsx          # Contact channels & social links
│   ├── Footer.tsx           # Wordmark, back-to-top & copyright
│   ├── Hero.tsx             # Interactive header, headline & CSS card art
│   ├── Navbar.tsx           # Sticky navigation, mobile drawer & theme toggle
│   ├── Projects.tsx         # Selected works with interactive CSS mockups
│   └── Skills.tsx           # Categorized technology pills
├── data/
│   └── portfolio.ts         # Centralized typed content & profile configuration
└── public/
    ├── Tharindu-Rashan-CV.pdf  # Curriculum Vitae
    └── favicon.svg             # Vector favicon asset
```

---

## 🚀 Getting Started

To run this project locally:

```bash
# Clone the repository
git clone https://github.com/TharinduRashan/portfolio.git

# Navigate into the project directory
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To create an optimized production build:

```bash
npm run build
npm run start
```

---

## 📬 Contact & Connect

- **LinkedIn**: [linkedin.com/in/tharindu-rashan](https://www.linkedin.com/in/tharindu-rashan/)
- **GitHub**: [github.com/TharinduRashan](https://github.com/TharinduRashan/)
- **Email**: [tharindurashan7@gmail.com](mailto:tharindurashan7@gmail.com)

---

<div align="center">
  <sub>Designed & built with care by Tharindu Rashan.</sub>
</div>
