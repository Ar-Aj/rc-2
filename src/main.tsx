import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './styles/index.css'

// Dismiss CSS-only brick loader once app is mounted and ready
const dismissLoader = () => {
  const intro = document.getElementById('rc-intro')
  if (intro && !intro.classList.contains('is-done')) {
    setTimeout(() => {
      intro.classList.add('is-done')
      setTimeout(() => {
        intro.remove()
      }, 1200)
    }, 1400)
  }
}

const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
  dismissLoader()
}
