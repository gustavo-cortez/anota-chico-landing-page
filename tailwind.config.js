/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agro: {
          dark: '#081C15',
          forest: '#1B4332',
          primary: '#2D6A4F',
          medium: '#40916C',
          light: '#52B788',
          mint: '#74C69D',
          pale: '#B7E4C7',
          soft: '#D8F3DC',
        },
        wheat: {
          light: '#FEFAE0',
          DEFAULT: '#DDA15E',
          dark: '#BC6C25',
          accent: '#C68B42',
        },
        surface: {
          offwhite: '#F8F9FA',
          muted: '#E9ECEF',
          card: '#FFFFFF',
          border: '#DEE2E6',
        },
        whatsapp: {
          light: '#25D366',
          DEFAULT: '#128C7E',
          dark: '#075E54',
          chatBg: '#EFEAE2',
          outgoing: '#D9FDD3',
          incoming: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'agro-card': '0 10px 30px -5px rgba(27, 67, 50, 0.08), 0 4px 6px -2px rgba(27, 67, 50, 0.04)',
        'agro-elevated': '0 20px 40px -10px rgba(27, 67, 50, 0.15)',
        'cta-glow': '0 8px 25px -4px rgba(221, 161, 94, 0.5)',
      }
    },
  },
  plugins: [],
}
