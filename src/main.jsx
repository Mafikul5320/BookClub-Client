import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Routers/router.jsx'
import AuthProvider from './Context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <RouterProvider router={router}>

      </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
