import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary = cinza escuro (estrutura, headers, fundos)
        primary: {
          DEFAULT: '#2d3436',
          light: '#444b4d',
          dark: '#1a1d1e',
          50: '#f0f1f1',
          100: '#d9dbdc',
          200: '#b3b7b8',
          300: '#8d9395',
          400: '#676f71',
          500: '#2d3436',
          600: '#252b2d',
          700: '#1d2224',
          800: '#15191a',
          900: '#0d1011',
        },
        // Secondary = laranja Sunord (botões, CTAs, destaques)
        secondary: {
          DEFAULT: '#e8782a',
          light: '#f0944e',
          dark: '#c55e18',
          50: '#fef3eb',
          100: '#fde7d7',
          500: '#e8782a',
          600: '#c55e18',
        },
        // Accent = laranja (WhatsApp e CTAs)
        accent: {
          DEFAULT: '#e8782a',
          light: '#f0944e',
          dark: '#c55e18',
        },
        // Teal = laranja suave para gradientes
        teal: {
          DEFAULT: '#f0944e',
          light: '#f5b07a',
          dark: '#e8782a',
        },
        // Cyan = tom dourado/ambar para variedade
        cyan: {
          DEFAULT: '#d4a053',
          light: '#e0b876',
          dark: '#c08a3a',
        },
        mint: {
          DEFAULT: '#fde7d7',
          light: '#fef3eb',
          dark: '#fbcfaf',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #2d3436 0%, #444b4d 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #e8782a 0%, #f0944e 100%)',
        'gradient-hero': 'linear-gradient(135deg, #2d3436 0%, #1a1d1e 50%, #0d1011 100%)',
        'gradient-cta': 'linear-gradient(135deg, #e8782a 0%, #c55e18 100%)',
        'gradient-card': 'linear-gradient(180deg, #f0f1f1 0%, #ffffff 100%)',
        'gradient-teal': 'linear-gradient(135deg, #e8782a 0%, #f0944e 100%)',
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
