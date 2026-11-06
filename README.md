# Varnith Global — Enterprise HR & Talent Solutions

Official website for **Varnith Global**, an enterprise HR Consulting, Talent Acquisition, Training & Development, and Digital Transformation partner headquartered in Hyderabad.

Rebuilt with a digital design language and motion architecture inspired by the Wayfare template, featuring smooth scroll interactions, responsive layouts, and dedicated multi-page routing.

---

## 🚀 Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS 3
- **Animations & Motion**: GSAP 3 + ScrollTrigger, Framer Motion, Lenis Smooth Scroll
- **Icons**: Lucide React
- **Routing**: React Router DOM (v7)
- **Typography**: Clash Grotesk & General Sans (Fontshare CDN), Inter (Google Fonts)

---

## 📁 Repository Structure

```
├── public/                 # Static assets, official logos, and hero photography
├── src/
│   ├── animations/         # Lenis smooth scroll, GSAP curves & transitions
│   ├── components/         # Navigation, Footer, Buttons, Modals, Forms
│   ├── data/               # Services, industries, insights, and brand content
│   ├── pages/              # Real multi-page routes (Home, About, Services, etc.)
│   ├── sections/           # Modular page sections (Hero, Disciplines, etc.)
│   └── styles/             # Global styles and Tailwind typography tokens
├── docs/                   # Architectural audits and design inventory
├── tailwind.config.js      # Custom theme colors and font families
└── vite.config.ts          # Vite build configuration
```

---

## 🛠️ Local Development

### Prerequisites
- Node.js (v18+)
- npm / yarn / pnpm

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Arsalaancoder/Varniths-solutions-.git
   cd Varniths-solutions-
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## 🎨 Key Features

- **Wayfare Aesthetic**: Warm photographic tone, Sand (`#F5EFE4`), Surface (`#FCF9F3`), Sun Gold (`#FFC94A`), and Ink (`#211D16`).
- **Cinematic Pinned Scroll**: "Core Disciplines" section with GSAP ScrollTrigger converting vertical scroll to smooth horizontal travel with inner image parallax and live progress indicators.
- **Full Multi-Page Architecture**: Dedicated pages for `/about`, `/services`, `/services/:slug`, `/industries`, `/insights`, `/contact`, `/privacy`, and `/terms`.
- **Responsive Layout**: Designed for mobile, tablet, and desktop viewports.

---

© 2026 Varnith Global. All rights reserved.

