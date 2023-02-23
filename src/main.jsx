import React from 'react'
import ReactDOM from 'react-dom/client'
import { CookiesProvider } from "react-cookie";
import App from './App'
import './index.css'
import './all.min.css'
import './animate.css'
import './animations.css'
import './App.css'
import './bootstrap.min.css'
import './custom-spacing.css'
import './magnific-popup.css'
import './menus.css'
import './owl.carousel.css'
import './responsive.css'
import './style.css'
import './swiper.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <CookiesProvider>
      <App />
      </CookiesProvider>
  
  </React.StrictMode>
)
