import { NavLink, Link } from 'react-router-dom'
import Logo from '../assets/images/logo-header.svg'

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="logo Kasa" className="header__logo" />
      </Link>
      <nav className="header__navbar">
        <ul className="navlinks">
          <NavLink
            to="/"
            className={(navlink) =>
              navlink.isActive
                ? 'navlinks__link navlinks__link--active'
                : 'navlinks__link'
            }
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(navlink) =>
              navlink.isActive
                ? 'navlinks__link navlinks__link--active'
                : 'navlinks__link'
            }
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header
