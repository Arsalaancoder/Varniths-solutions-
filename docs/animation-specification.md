# Varnith Global — Animation Specification

**Source Reference:** Wayfare Framer Architecture & Measured Settings  
**Core Technologies:** React, TypeScript, Tailwind CSS, Framer Motion, GSAP, GSAP ScrollTrigger, Lenis

---

## 1. Global Timing & Easing Curves

Based on direct inspection of the reference's production animation curves:

```typescript
export const ANIMATION_CURVES = {
  // Primary Wayfare entrance curve (used across hero, titles, and section transitions)
  easeOutExpoLike: [0.16, 1, 0.3, 1], // CSS: cubic-bezier(0.16, 1, 0.3, 1)

  // Hover Slider reveal & wipe curve
  sliderWipe: [0.22, 1, 0.36, 1], // CSS: cubic-bezier(0.22, 1, 0.36, 1)

  // Arrow button fill & spring transition
  buttonFill: [0.785, 0.135, 0.15, 0.86], // CSS: cubic-bezier(0.785, 0.135, 0.15, 0.86)

  // Standard smooth UI transition
  standardEase: 'easeOut',
};

export const ANIMATION_DURATIONS = {
  fast: 0.25,
  medium: 0.45,
  entrance: 0.9,
  slowZoom: 1.4,
  textFillColor: 0.35,
};
```

---

## 2. Animation Implementations

### Animation A: Scroll-Filled Statement Text (`TextFill`)
- **Trigger:** Viewport scroll position.
- **Algorithm:**
  - Track `container.getBoundingClientRect()`.
  - Calculate scroll progress ratio `o = (window.innerHeight * start - top) / (window.innerHeight * start - window.innerHeight * end + height)`.
  - Clamp ratio between `0` and `1`.
  - Total active characters: `Math.round(ratio * totalCharacters)`.
  - Characters before threshold render in `--color-ink` (`#101C32` or `#F7F6F2` in dark mode).
  - Characters beyond threshold render in `--color-line` (`#D2CCD6` or `#2E3A52` in dark mode).
  - `transition: color 0.35s ease`.

### Animation B: Hover Image Slider (`HoverSlider`)
- **Trigger:** Pointer hover or touch selection on vertical list items.
- **Layers:**
  - Container with `overflow: hidden`, `border-radius: 24px`, aspect ratio `4/5` (desktop) or `16/11` (mobile).
  - Stacked images with index-based layering.
  - Active image style:
    ```css
    clip-path: inset(0% 0% 0% 0%);
    transform: scale(1);
    transition: clip-path 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 1.4s cubic-bezier(0.22, 1, 0.36, 1);
    ```
  - Inactive image style:
    ```css
    clip-path: inset(100% 0% 0% 0%);
    transform: scale(1.12);
    transition: clip-path 0s linear 0.9s, transform 0s linear 0.9s;
    ```
  - Autoplay interval: 3.5s when cursor is not hovering or on mobile devices.

### Animation C: Cursor Photo Trail (`ImageTrail`)
- **Trigger:** Mouse movement over the CTA banner on desktop devices (`@media (pointer: fine)`).
- **Execution:**
  - Distance gate: Check distance squared `(dx*dx + dy*dy) >= 110*110`.
  - Random slight angle: `angle = (spawnCount * 37) % 17 - 8` (-8deg to +8deg).
  - DOM Lifecycle: Spawn lightweight `<img>` at cursor position `(x, y)` with dimensions `160px × 200px`, `border-radius: 16px`, `box-shadow: 0 18px 50px rgba(0,0,0,0.3)`.
  - Keyframes via Web Animations API (`element.animate()`):
    - `0%`: `transform: translate(-50%, -50%) scale(0.55) rotate(${angle - 6}deg)`, `opacity: 0`
    - `18%`: `transform: translate(-50%, -50%) scale(1) rotate(${angle}deg)`, `opacity: 1`
    - `70%`: `transform: translate(calc(-50% + ${driftX}px), -58%) scale(1) rotate(${angle}deg)`, `opacity: 1`
    - `100%`: `transform: translate(calc(-50% + ${driftX * 1.3}px), -64%) scale(0.92) rotate(${angle + 3}deg)`, `opacity: 0`
  - Total lifespan: 1.3 seconds. On finish, element is detached from DOM immediately (`m.remove()`), ensuring no memory leaks or DOM accumulation.
  - Reduced Motion / Touch Guard: Checks `window.matchMedia('(prefers-reduced-motion: reduce)')` and `window.matchMedia('(pointer: coarse)')`. If true, the trail is disabled cleanly.

### Animation D: Signature Arrow-Fill Buttons (`ButtonArrow`)
- **Visual Composition:**
  - Pill button container: `border-radius: 999px`, relative positioning, `overflow: hidden`.
  - Button text: Left-aligned label with high-contrast color.
  - Fill Layer: Round circle `36px × 36px` on the right in resting state.
  - On Hover:
    - Fill Layer expands to `inset: 0` with `border-radius: 999px`.
    - Arrow Row (`width: 40px`, contains two arrows spaced by `8px`) translates from `left: -24px` to `left: 0px`.
    - Easing: `cubic-bezier(0.785, 0.135, 0.15, 0.86)` with duration `0.45s`.

### Animation E: Smooth Virtual Scroll (`SmoothScroll`)
- **Integration:** Lenis Smooth Scroll.
- **Parameters:**
  - `lerp: 0.07`
  - `wheelMultiplier: 0.8`
  - `smoothTouch: false` (to preserve native fluid touch scrolling on iOS/Android).

### Animation F: Blur & Stagger Word Entrance
- **Used for:** Section titles, CTA headlines, hero text.
- **Initial:** `opacity: 0.001`, `filter: blur(8px)`, `transform: translateY(24px)`.
- **Animate:** `opacity: 1`, `filter: blur(0px)`, `transform: translateY(0px)`.
- **Transition:** `duration: 0.9s`, `ease: [0.16, 1, 0.3, 1]`, stagger: `0.04s` per word.

### Animation G: Pinned Storytelling Narrative
- **Trigger:** ScrollTrigger pin.
- **Behavior:**
  - Left column: sticky photo with transition between 5 transformation stages.
  - Right column: 5 stages (01 Understand, 02 Identify, 03 Develop, 04 Enable, 05 Transform) scroll past, activating corresponding stage cards with border highlight and active progress bar.

### Animation H: Theme Switcher Micro-Transition
- **Behavior:** Instant theme toggle with synchronized CSS transitions on background colors, typography colors, and border colors:
  ```css
  * {
    transition: background-color 0.35s ease, border-color 0.35s ease, color 0.35s ease;
  }
  ```

---

## 3. Verified Performance & Accessibility Considerations

1. **GPU Acceleration:** All transforms use `transform: translate3d()` and `will-change: transform`.
2. **Reduced Motion:** If `prefers-reduced-motion: reduce` is detected:
   - Text fill immediately displays fully filled.
   - Image trail is deactivated.
   - Hover wipe transforms degrade to direct cross-fades.
3. **Touch Fallbacks:** Touch devices rely on swipe/tap actions rather than hover states.

