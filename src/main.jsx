import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ThemeProvider } from './context/ThemeContext'

AOS.init()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
)
