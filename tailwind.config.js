import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [daisyui],
  daisyui: {
    themes: ['light', 'dark'], // Only these two themes
    darkTheme: 'dark',         // Explicit dark theme name
  },
}