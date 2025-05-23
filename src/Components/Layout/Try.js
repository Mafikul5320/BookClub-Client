// // src/components/ThemeToggle.jsx
// import { useEffect, useState } from 'react'
// import { Sun, Moon } from 'lucide-react' // Simple alternative to heroicons

// export function Try() {
//   const [darkMode, setDarkMode] = useState(false)

//   useEffect(() => {
//     // Check localStorage or system preference
//     const savedMode = localStorage.getItem('theme') === 'dark'
//     const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
//     setDarkMode(savedMode || (!('theme' in localStorage) && systemDark))
//   }, [])

//   useEffect(() => {
//     // Apply the theme
//     document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
//     localStorage.setItem('theme', darkMode ? 'dark' : 'light')
//   }, [darkMode])

//   return (
//     <button
//       onClick={() => setDarkMode(!darkMode)}
//       className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
//       aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
//     >
//       {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//     </button>
//   )
// }