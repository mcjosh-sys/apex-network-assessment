/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        muted: 'hsl(var(--muted))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        border: 'hsl(var(--border))',
        green: 'hsl(var(--green))',
        'light-green': 'hsl(var(--light-green))',
        yellow: 'hsl(var(--yellow))',
        'light-yellow': 'hsl(var(--light-yellow))',
        red: 'hsl(var(--red))',
        'light-red': 'hsl(var(--light-red))',
        purple: 'hsl(var(--purple))',
        'light-purple': 'hsl(var(--light-purple))',
        orange: 'hsl(var(--orange))',
        'light-orange': 'hsl(var(--light-orange))'
      },
      fontFamily: {
        general: ['general-sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
