import Logo from '../assets/images/logo-footer.svg'

function Footer() {
  return (
    <footer className="footer">
      <img src={Logo} alt="logo Kasa" className="footer__logo" />
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  )
}

export default Footer
