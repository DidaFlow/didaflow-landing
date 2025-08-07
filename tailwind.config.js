/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      animation: {
        'float-1': 'float1 8s ease-in-out infinite',
        'float-2': 'float2 12s ease-in-out infinite',
        'float-3': 'float3 10s ease-in-out infinite',
        'float-4': 'float4 14s ease-in-out infinite',
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-20px) translateX(10px)' },
          '66%': { transform: 'translateY(10px) translateX(-5px)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-30px) translateX(-15px)' },
        },
        float3: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-15px) translateX(-10px)' },
          '50%': { transform: 'translateY(-5px) translateX(15px)' },
          '75%': { transform: 'translateY(-25px) translateX(5px)' },
        },
        float4: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '40%': { transform: 'translateY(-25px) translateX(-20px)' },
          '80%': { transform: 'translateY(-10px) translateX(10px)' },
        },
      },
    },
  },
  plugins: [],
}