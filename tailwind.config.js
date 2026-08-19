/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#08090c',
        panel: '#101218',
        line: '#23262e',
        paper: '#efe8d8',
        mist: '#9aa0a8',
        accent: '#7ec8ff',
        gold: '#c4a574',
        whats: '#25d366',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 80px rgba(126, 200, 255, 0.12)',
        card: '0 30px 80px rgba(0,0,0,0.45)',
      },
      maxWidth: {
        page: '1180px',
      },
    },
  },
  plugins: [],
}
