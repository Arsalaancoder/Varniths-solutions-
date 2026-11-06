# Wayfare Reference Design & Animation Audit

**Reference URL:** [Wayfare Travel Agency Preview](https://touroperator.framer.website/)  
**Template Details:** [Framer Marketplace - Wayfare](https://www.framer.com/marketplace/templates/wayfare/)  
**Audit Target:** Varnith Global Rebuild

---

## 1. Visual Design Language & Brand Identity

### Color System (Reference vs Varnith Global Adaptation)

| Semantic Role | Reference (Wayfare) | Varnith Global Adaptation | Usage |
|---|---|---|---|
| **Primary Accent** | `#FFC94A` (Sun Gold) | `#315EF4` (Electric Blue) & `#C5A46D` (Muted Gold) | Buttons, highlight chips, active indicators |
| **Accent Light** | `#FFD978` (Sun Light) / `#FFF5D6` | `#EBF0FF` / `#F0E7D8` | Button hover fill layer, subtle badge glow |
| **Deep Ground** | `#1A1712` (Night Deep) / `#211D16` | `#101C32` (Deep Navy) | Dark mode ground, dark showcase cards, footer |
| **Warm Canvas** | `#F5EFE4` (Sand) | `#F7F6F2` (Warm Ivory) | Light mode page background |
| **Surface** | `#FCF9F3` (Surface Ivory) | `#FFFFFF` (Pure White) & `#FAF9F6` | Card backgrounds, floating navigation pill |
| **Line / Border** | `#E0D6C4` (Line) / `#2F2A20` (Dark) | `#E4E0D7` / `#1E2B47` (Dark) | Subtle division lines, pill outlines, card borders |
| **Ink / Headings** | `#211D16` / `#F3ECDF` (Dark) | `#101C32` / `#F7F6F2` (Dark) | Display headlines, section titles, high-contrast text |
| **Body Text** | `#4E493F` / `#C4BDAF` (Dark) | `#3B465E` / `#B8C2D8` (Dark) | Editorial paragraphs, descriptions, secondary copy |
| **Muted Meta** | `#857E70` / `#8F887A` (Dark) | `#74819E` / `#8391B2` (Dark) | Eyebrow labels, numbers, metadata |

---

## 2. Typography Architecture

The reference uses Fontshare fonts: **Clash Grotesk** (display & headings) and **General Sans** / **Inter** (body & numbers).

| Level | Font Family | Weight | Size (Desktop / Mobile) | Line Height | Letter Spacing | Purpose |
|---|---|---|---|---|---|---|
| **Display Hero** | Clash Grotesk Variable | 500 (Medium) | 76px / 44px | 1.05 | -0.035em | Hero main headline ("People. Potential. Progress.") |
| **Heading 1 / Statement** | Clash Grotesk Variable | 500 (Medium) | 60px / 32px | 1.12 | -0.03em | Scroll-filled brand statement & showcase titles |
| **Heading 2** | Clash Grotesk Variable | 500 (Medium) | 48px / 28px | 1.15 | -0.025em | Section primary headings |
| **Heading 3** | Clash Grotesk Variable | 500 (Medium) | 28px / 22px | 1.25 | -0.02em | Service titles, card titles, large numbers |
| **Heading 4** | General Sans / Clash | 500 / 600 | 20px / 18px | 1.35 | -0.01em | Sub-features, FAQ questions |
| **Lead / Subtitle** | General Sans Variable | 400 (Regular) | 20px / 17px | 1.55 | -0.01em | Hero subtitle, intro summary |
| **Body** | General Sans Variable | 400 (Regular) | 16px / 15px | 1.6 | 0 | Descriptive text, editorial content |
| **Eyebrow / Small** | General Sans / Inter | 500 (Medium) | 13px / 12px | 1.4 | +0.06em (Uppercase) | Section labels ("01 / SOLUTIONS", "OUR PROMISE") |
| **Button Text** | General Sans Variable | 500 (Medium) | 15px / 14px | 1.2 | -0.01em | CTA button text |

---

## 3. Section Rhythm & Layout Characteristics

1. **Floating Navigation Header (`Nav Wrap`)**:
   - Fixed pill container centered with `top: 20px`, `z-index: 100`.
   - Subtle blur (`backdrop-filter: blur(16px)`), rounded pill (`border-radius: 999px`), `border: 1px solid var(--line)`.
   - Left: Logo icon + Wordmark.
   - Center: Nav links with smooth hover underline / opacity shift.
   - Right: Theme toggle pill + Primary CTA pill with circular arrow button.
   - Mobile: Collapses into floating bottom/top pill with animated hamburger drawer.

2. **Hero (`Hero`)**:
   - Asymmetric split editorial layout:
     - Left / Top: Eyebrow badge with glowing status dot (`Sun Dot`), bold display typography, lead description, dual CTA buttons (`Primary` and `Dark/Ghost`).
     - Right: Tall portrait/rounded landscape photo panel with subtle atmospheric gradient veil (`Veil`).
   - Entrance sequence: Staggered reveal of badge -> headline -> lead copy -> CTAs.

3. **Animated Scroll-Filled Statement (`Statement` / `Text Fill`)**:
   - Full-width editorial statement container with generous vertical breathing room (`padding: 140px 0`).
   - Clash Grotesk 60px display font.
   - Words starts in low-opacity/line color (`dimColor`) and progressively transition character-by-character into solid ink color as window scroll progresses between `start: 0.1` and `end: 0.5`.

4. **Business Verticals Showcase (`Destinations` & `Hover Slider`)**:
   - Header with section index, title, and action link.
   - Interactive vertical selector:
     - Left: Vertical list (01 HR Consulting, 02 Training & Development, 03 Technology & Digital Transformation) with active highlight, title, and description note.
     - Right: Pinned/clip-path image panel (42% width desktop, 4/5 aspect ratio) that cross-reveals and scales smoothly when hovering or clicking each vertical.

5. **Company Overview & Metrics (`Intro`)**:
   - 2-column editorial overview:
     - Left: Mission statement, verified proof block (client/student ratings, avatar stack, review count).
     - Right: Tall featured photo + overlapping `Facts Card` with cleanly styled verified metric rows and guarantee note.

6. **Pinned Storytelling Narrative (`How It Works`)**:
   - Sticky two-column layout (`position: sticky; top: 100px` for image panel).
   - Left: Sticky photo card with rounded corners (`radius: 24px`).
   - Right: 5 sequential transformation stages (01 Understand, 02 Identify, 03 Develop, 04 Enable, 05 Transform).
   - Scrolling through stages updates active indicators and the sticky quote/context panel.

7. **Service Offerings / Expertise Grid (`Trips` / `Trip Grid` & `Included`)**:
   - Interactive category pill filters (All, HR Consulting, Training, Technology).
   - Card grid with hover zoom, tags (duration, delivery mode, focus area), title, description, and view action pill.
   - Service breakdown matrix (`Included Grid`) with icon chips.

8. **Editorial Testimonials Marquee (`Reviews` / `Ticker Rows`)**:
   - Double-row or single-row infinite smooth marquee ticker with lateral gradient edge fades (`Fade Left`, `Fade Right`).
   - High-contrast quote cards with client/student author attribution and course/service tags.

9. **Insights & Journal (`Journal`)**:
   - 3-column editorial grid: image cover with aspect ratio 16/10, category badge, date & reading time, bold title, excerpt.

10. **Interactive Interactive CTA (`CTA Window` & `Image Trail`)**:
    - High-contrast deep navy banner with rounded corners (`radius: 32px`).
    - Staggered headline animation with blur & translateY entrance.
    - **Cursor Photo Trail**: As the user moves their mouse over the CTA banner on desktop, floating recruitment & team imagery spawns at the cursor tip every 110px with gentle rotational offset, scales in, and drifts upward before gracefully fading out.
    - Responsive fallback: On touch devices or reduced motion, displays a curated ambient image mosaic.

11. **Footer (`Footer Wrap`)**:
    - Top newsletter/contact pitch with rounded input and submit button.
    - Divider rule.
    - Multi-column link layout (Brand, Solutions, Company, Direct Contact).
    - Bottom bar with large cropped Varnith Global wordmark backdrop (`Wordmark Clip`), copyright, and live Hyderabad status.

---

## 4. Animation Inventory & Measured Timing Specifications

| Animation ID | Feature | Mechanism | Timing & Easing | Trigger |
|---|---|---|---|---|
| **Anim-A** | Text Fill (Brand Statement) | Character-by-character color interpolation based on scroll position | Scroll progress driven (`0.0 - 0.45`), `transition: color 0.35s ease` | Scroll Trigger |
| **Anim-B** | Hover Slider (Solutions) | Wipe clip-path `inset(100% 0 0 0)` -> `inset(0% 0 0 0)` + scale `1.12` -> `1.0` | `clip-path 0.9s cubic-bezier(0.22, 1, 0.36, 1)`, `transform 1.4s cubic-bezier(0.22, 1, 0.36, 1)` | Pointer enter / click |
| **Anim-C** | Cursor Photo Trail | Spawn image every 110px move, rotate -8° to +8°, drift Y by 40px, scale 0.55 -> 1.0 -> 0.92 | Duration: 1.2s - 1.4s, `cubic-bezier(0.16, 1, 0.3, 1)` | Mousemove over CTA |
| **Anim-D** | Arrow-Fill Button | Background pill expands `width: 36px` -> `inset: 0`; arrow translates `left: -24px` -> `0px` | `duration: 0.45s`, `ease: [0.785, 0.135, 0.15, 0.86]` | Button hover / focus |
| **Anim-E** | Smooth Scroll | Virtual scroll interpolation with Lenis | `lerp: 0.07`, `wheelMultiplier: 0.8` | Continuous user scroll |
| **Anim-F** | Entrance Word Reveals | Blur `8px` -> `0px`, `translateY(24px)` -> `0px`, `opacity: 0` -> `1` | `duration: 0.9s`, `ease: [0.16, 1, 0.3, 1]`, stagger `0.04s` | ScrollTrigger enter |
| **Anim-G** | Card & Image Reveal | `scale(0.97)` -> `scale(1.0)`, `opacity: 0` -> `1`, `translateY(26px)` -> `0px` | `duration: 0.9s`, `delay: 0.05s - 0.25s`, `ease: [0.16, 1, 0.3, 1]` | ScrollTrigger enter |
| **Anim-H** | Pinned Storytelling | Sticky viewport pinning (`top: 100px`) with scroll trigger scrub/steps | Scroll progress scrub, step opacity `0.3` -> `1.0` | Scroll progress in viewport |
| **Anim-I** | Theme Switcher | CSS custom properties swap on `[data-theme="dark"]` with transition | `color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease` | Theme toggle click |
| **Anim-J** | Marquee Reviews Ticker | Continuous CSS translate3d marquee loop with pause on hover | `animation: marquee 35s linear infinite` | Always active |

---

## 5. Mobile & Tablet Adaptations

- **Navigation**: Desktop pill navigation collapses at `< 810px` to a compact top bar with mobile menu button; slide-down full-screen overlay menu.
- **Hover Slider**: Replaces mouse hover with touch tap + automatic autoplay (3.2s interval) when no touch occurs.
- **Cursor Photo Trail**: Automatically disabled on touch screens (`@media (pointer: coarse)`) and replaced with high-quality static/carousel visual to maintain 60fps performance and zero DOM bloat.
- **Pinned Storytelling**: Switches to vertical stack with sticky stage indicator tabs on screens `< 1024px`.
- **Typography**: Responsive scaling (`clamp()` and breakpoint font sizes: 76px -> 42px for Display; 60px -> 30px for Statement).

