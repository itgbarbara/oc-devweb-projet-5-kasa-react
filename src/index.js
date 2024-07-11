// Import des bibliothèques React
import React from 'react'
import ReactDOM from 'react-dom/client'
//import des styles
import './utils/styles/global.scss'
// Import des composants
import Router from './components/Router'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router />
    <Footer />
  </React.StrictMode>
)
