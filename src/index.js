// Import des bibliothèques React
import React from 'react'
import ReactDOM from 'react-dom/client'
//import des styles
import './utils/styles/global.scss'
// Import des composants
import Router from './components/Router'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
