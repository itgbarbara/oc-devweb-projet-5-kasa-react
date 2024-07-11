import { NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo-header.svg'
import '../utils/styles/global.scss'

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="logo Kasa" className="header__logo" />
      <nav className="header__navbar">
        <ul>
          <NavLink to="/">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="About">
            <li>A Propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header
