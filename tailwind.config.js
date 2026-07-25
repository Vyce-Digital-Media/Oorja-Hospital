/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#060F1E", // Deep Dark Tech Medical Background (exact VitalCare navy)
          soft: "#0B192C",    // Card glassmorphism dark navy
        },
        teal: {
          DEFAULT: "#00D2FF", // Electric Medical Cyan (the neon glowing accent in VitalCare!)
          light: "#0A2342",   // Dark cyan tint box
        },
        rose: {
          DEFAULT: "#F43F5E", // Vibrant maternal & fetal care pink
          light: "#1F122B",   // Dark rose tint box
        },
        gold: {
          DEFAULT: "#0066FF", // Electric Royal Blue (VitalCare button & border glow!)
        },
        cream: {
          DEFAULT: "#081426", // Secondary Dark Medical Navy background
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
        ink: {
          60: "#94A3B8",      // Slate 400: Clean legible text for dark mode
        },
        border: {
          DEFAULT: "#1E3A5F", // Dark medical blue border
        },
      },
      fontFamily: {
        serif: ['"Inter"', '"Roboto"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', '"Roboto"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(11, 31, 42, 0.08)',
        'premium-hover': '0 20px 40px -15px rgba(11, 31, 42, 0.14)',
        'card': '0 4px 20px rgba(11, 31, 42, 0.05)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '20px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
