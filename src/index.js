// Import des bibliothèques React
import React from 'react'
import ReactDOM from 'react-dom/client'
// Import des composants
import Router from './components/Router'
//import des styles
import './utils/styles/global.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
