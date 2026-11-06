/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'tablet': '810px',
      'lg': '1024px',
      'laptop': '1200px',
      'xl': '1440px',
      '2xl': '1600px',
    },
    extend: {
      colors: {
        brand: {
          // Exact Wayfare Master Color Palette
          sand: '#F5EFE4',          // Page background
          surface: '#FCF9F3',       // Card background / Nav pill
          shell: '#ECE3D3',         // Subtle surfaces
          line: '#E0D6C4',          // Borders and division lines
          ink: '#211D16',           // Headings and high-contrast text
          body: '#4E493F',          // Editorial paragraphs
          muted: '#857E70',         // Eyebrows, metadata, numbers
          night: '#211D16',         // Dark surfaces
          nightDeep: '#1A1712',     // Darkest panels, Sea Panel, CTA background
          sun: '#FFC94A',           // Primary accent, Primary button background
          sunLight: '#FFD978',      // Primary button hover fill
          sunDeep: '#231C0A',       // Text on sun button
          
          // Dark Mode Variants (exact Wayfare dark tokens)
          darkSand: '#14120E',      // Dark page background
          darkSurface: '#1C1913',   // Dark card background
          darkShell: '#27231A',     // Dark subtle surfaces
          darkLine: '#2F2A20',      // Dark borders
          darkInk: '#F3ECDF',       // Dark headings
          darkBody: '#C4BDAF',      // Dark paragraphs
          darkMuted: '#8F887A',     // Dark metadata
          darkNightDeep: '#0E0C09', // Darkest background
        }
      },
      fontFamily: {
        display: ['"Clash Grotesk"', '"Clash Grotesk Variable"', 'sans-serif'],
        sans: ['"General Sans"', '"General Sans Variable"', '"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.035em',
        tight: '-0.02em',
        normal: '0',
        wide: '0.04em',
        wider: '0.08em',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(0.95)' },
        }
      }
    },
  },
  plugins: [],
}
