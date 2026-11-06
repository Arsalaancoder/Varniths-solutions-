# Varnith Global — Comprehensive Visual QA & Wayfare Side-by-Side Audit

**Reference URL:** [Wayfare Framer Preview](https://touroperator.framer.website/)  
**Local Deployment:** `http://localhost:4173/`  
**Template Specification:** Exact section sequence, layout proportions, visual balance, animations, and typography from Wayfare.

---

## 1. Complete Section-by-Section Mapping

| Sequence # | Wayfare Reference Section | Varnith Global Adaptation | Key Design & Interaction Traits | QA Status |
|---|---|---|---|---|
| **01** | `Nav Wrap` | Floating Pill Navigation | Height `60px`, `rounded-full`, centered fixed at `top: 20px`, glass backdrop blur, logo with 26px sun orb, 7 links (**Home \| About \| Solutions \| Services \| Insights \| Careers \| Contact**), theme switcher pill, arrow-fill `Let's Talk` button. | **PASS** |
| **02** | `Hero` | Full-Bleed Photographic Hero | Full-width photo background covering entire container inside `rounded-[28px]` frame (`12px` desktop margin), warm directional gradient veil (`from-[#F7F6F2]/95` to transparent), left-aligned eyebrow badge with glowing amber dot, headline (*"Building better teams, empowering better futures."*), lead description, dual buttons (*Explore Our Solutions* & *Let's Talk*), anchored bottom-right preview card (*Next Enterprise Practice*). | **PASS** |
| **03** | `Statement` | Scroll-Filled Brand Statement | Eyebrow *Our Core Conviction*, 60px Clash Grotesk display text (*"Great businesses are built by exceptional people, developed through continuous learning and empowered by technology."*), progressive character-by-character color fill driven by scroll progress. | **PASS** |
| **04** | `Intro` | High-Touch Architecture & Facts Card | Eyebrow *Why Varnith Global*, title *High Touch by Design. Enterprise in Scale.*, lead text, *Explore Our Story* dark button, 4.9 rating with 5 stars and avatar stack, featured side photo + overlapping *Facts Card* with 6 snapshot metric rows and verified quote note. | **PASS** |
| **05** | `Destinations` | Core Disciplines Horizontal Showcase | Eyebrow *Disciplines*, title *Core Disciplines We Deliver with Excellence*, link *All practices →*, horizontal carousel track of 8 practice cards with bottom shade, hover veil, and caption. | **PASS** |
| **06** | `Trips` | Filterable Solutions Explorer | Eyebrow *Specialized Capabilities*, title *Explore Our Core Practices & Programs*, interactive filter pill bar (*All*, *HR Consulting*, *Training*, *Technology*), 3-column card grid with duration and format chips, view pill opening full practice detail modal. | **PASS** |
| **07** | `Travel Styles` | Business Verticals Hover Slider | Eyebrow *Ways to Partner*, title *Three Verticals, One Standard of Execution*, dark panel (`Sea Panel`) with interactive `Hover Slider` executing bottom-up wipe clip-path `inset(100% 0 0 0)` -> `inset(0% 0 0 0)` and slow zoom on hover or tap. | **PASS** |
| **08** | `How It Works` | Pinned Consulting Storytelling | Eyebrow *The Transformation Journey*, title *From Talent Challenges to Business Transformation.*, sticky pinned photo on left (`top: 112px`), 5 scrolling numbered stages on right, dynamically updating sticky quote window. | **PASS** |
| **09** | `Reviews` | Client & Student Feedback Marquee | Eyebrow *Verified Feedback*, title *What Professionals & Clients Say*, infinite smooth marquee loop with lateral edge gradient fades, verified quotes from Rahul Radhirao, Priya Bhaskar, Ravi Theja, and Manasa Chowdary. | **PASS** |
| **10** | `Included` | Service Capabilities Matrix | Eyebrow *Always Delivered*, title *Complete Capability, Nothing Left to Chance*, 2-column layout: left featured photo with guarantee card + right 2x2 grid of 4 capability cells with icon chips. | **PASS** |
| **11** | `Journal` | The Varnith Global Journal | Eyebrow *Thoughts & Observations*, title *The Varnith Global Journal*, link *All perspectives →*, 3-column editorial grid with 16:10 cover photos, category tags, reading times, and full article reader modal. | **PASS** |
| **12** | `FAQ` | Good to Know Questions | Left column with description and *Call Us* link + Right column accordion with plus/minus rotation toggle, verified questions from varnithglobal.com. | **PASS** |
| **13** | `CTA Window` | Interactive Final Call to Action | Full-width rounded dark window with desktop **Cursor Photo Trail** (`Image Trail` spawning recruitment/leadership imagery on mousemove with natural angle tilt, upward drift, and instant DOM cleanup), headline *Let's Build What's Next, Together.*, dual action buttons. | **PASS** |
| **14** | `Contact Section` | Working Direct Office Enquiry | Complete form with name, email, phone, practice select, and message fields, client-side validation, loading spinner, success/error banners, direct phone link, email link, address, and WhatsApp chat. | **PASS** |
| **15** | `Footer Wrap` | Grand Editorial Footer | Top quarterly intelligence newsletter input with subscribe button, 4-column links (Brand, Solutions, Company, Talk to Us), live Hyderabad operational status, legal modal triggers, and cropped `VARNITH GLOBAL` watermark backdrop. | **PASS** |

---

## 2. Animation & Interaction Fidelity

- [x] **Text Fill Animation:** Progressive scroll progress interpolation using `requestAnimationFrame`, character color transition `0.35s ease`.
- [x] **Hover Image Slider:** Mask wipe transition with `clip-path 0.9s cubic-bezier(0.22, 1, 0.36, 1)` and `transform 1.4s cubic-bezier(0.22, 1, 0.36, 1)`.
- [x] **Cursor Photo Trail:** Spawn threshold `>= 110px`, angle jitter `(count * 37) % 17 - 8` (-8° to +8°), upward drift, auto-removed via `animation.onfinish`, disabled on touch and reduced motion.
- [x] **Arrow-Fill Buttons:** Expanding fill layer (`inset-0`) with double-arrow slide (`-left-6` to `left-0`) over `0.45s` using `cubic-bezier(0.785, 0.135, 0.15, 0.86)`.
- [x] **Virtual Smooth Scroll:** Lenis engine active with `lerp: 0.07` and `wheelMultiplier: 0.8`.
- [x] **Light/Dark Mode:** Seamless instant theme swap via `data-theme` attribute and CSS custom properties with smooth color transitions.
