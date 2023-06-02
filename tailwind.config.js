/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'background-radialD': 'radial-gradient(circle, #0f2940, #112f49, #123453, #143a5c, #164066)',
          'background-radialL': 'radial-gradient(circle, #c4ced6, #d4dae1, #e3e6eb, #f2f2f5, #ffffff)',
      },
      textColor:{
        primaryL: '#000',
        secondaryL: '#6C757D',
        importanteL: '#FFC107',
        textL: '#333333',
        primaryD: 'rgb(14 165 233)',
        secondaryD: '#7394BF',
        importanteD: '#FFC107',
        textD: '#D0DFF2',
      },
      backgroundColor:{
        backgroundD: '#0F2940',
        backgroundL: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
