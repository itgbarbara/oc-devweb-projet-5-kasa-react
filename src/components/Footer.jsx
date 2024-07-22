import Logo from '../assets/images/logo-footer.svg'

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={Logo} alt="logo Kasa" />
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
