/** Tailwind is built into the site at build time (no CDN).
 *  It scans these files for class names, so any class used in them works. */

// Kolor akcentu strony (przyciski, ikony, linki). Tło zostaje białe.
// Zmień ACCENT na jedną z nazw poniżej i przebuduj stronę.
//   'sage'     — szałwiowa zieleń: drewno, góry, spokój (domyślnie)
//   'burgundy' — ciemna wiśnia: ciepło, klasyka, "stary szyld"
//   'fjord'    — głęboki morski błękit: chłodny, nowoczesny kontrast do drewna
const ACCENT = 'sage';

const palettes = {
  sage: {
    50: '#f5f7f0', 100: '#e7ecdc', 200: '#cfd9bb', 300: '#afbf8f', 400: '#97ab6e',
    500: '#6b7d47', 600: '#57673a', 700: '#45512f', 800: '#394329', 900: '#2f3723',
  },
  burgundy: {
    50: '#fbf4f5', 100: '#f5e4e7', 200: '#ebc8cf', 300: '#dca0ad', 400: '#cf7a8e',
    500: '#a8465e', 600: '#8e3650', 700: '#762b43', 800: '#63263b', 900: '#552335',
  },
  fjord: {
    50: '#f0f7f8', 100: '#d9ecef', 200: '#b6d9df', 300: '#84bdc7', 400: '#62a8b5',
    500: '#3a7f8c', 600: '#2f6875', 700: '#295560', 800: '#264750', 900: '#233c44',
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,json}'],
  theme: { extend: { colors: { accent: palettes[ACCENT] } } },
  plugins: [],
};
