import Header from '../components/Header'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className="layout">
      <div className="layout__container">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
