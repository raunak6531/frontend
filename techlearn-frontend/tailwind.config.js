/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tech-blue': '#070054',
        'tech-grey': '#d9d9d9',
        'gray-800': '#1f2937',
        'gray-900': '#111827',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fadeInUp': 'fadeInUp 0.8s ease-out',
        'expandWidth': 'expandWidth 0.8s ease-out',
        'sparkleFloat': 'sparkleFloat 3s ease-in-out infinite',
        'confettiFall': 'confettiFall 4s ease-in-out infinite',
        'pulseGlow': 'pulseGlow 2s ease-in-out infinite',
        'hourglassRotate': 'hourglassRotate 1s ease-in-out',
        'bounce': 'bounce 0.6s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        expandWidth: {
          '0%': {
            width: '0'
          },
          '100%': {
            width: '40px'
          },
        },
        sparkleFloat: {
          '0%, 100%': {
            opacity: '0',
            transform: 'translateY(0px) scale(0.6)'
          },
          '25%': {
            opacity: '0.8',
            transform: 'translateY(-15px) scale(1)'
          },
          '50%': {
            opacity: '1',
            transform: 'translateY(-25px) scale(1.2)'
          },
          '75%': {
            opacity: '0.6',
            transform: 'translateY(-10px) scale(0.9)'
          },
        },
        confettiFall: {
          '0%': {
            transform: 'translateY(-20px) rotate(0deg)',
            opacity: '0'
          },
          '10%': {
            opacity: '1'
          },
          '20%': {
            transform: 'translateY(0px) rotate(45deg)',
            opacity: '1'
          },
          '80%': {
            transform: 'translateY(40px) rotate(180deg)',
            opacity: '0.8'
          },
          '100%': {
            transform: 'translateY(60px) rotate(270deg)',
            opacity: '0'
          },
        },
        pulseGlow: {
          '0%, 100%': {
            opacity: '0.6',
            transform: 'translate(-50%, -50%) scale(1)'
          },
          '50%': {
            opacity: '0.9',
            transform: 'translate(-50%, -50%) scale(1.1)'
          },
        },
        hourglassRotate: {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(180deg)'
          },
        },
        bounce: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)'
          },
          '40%': {
            transform: 'translateY(-10px)'
          },
          '60%': {
            transform: 'translateY(-5px)'
          },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        'glass': '8px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      textShadow: {
        'sm': '0 1px 2px var(--tw-shadow-color)',
        'DEFAULT': '0 2px 4px var(--tw-shadow-color)',
        'lg': '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [],
} 