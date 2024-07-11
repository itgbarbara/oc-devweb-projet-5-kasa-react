import Header from '../components/Header'
import '../utils/styles/global.scss'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div>
      <div className="layout">
        <Header />
        <main className="layout__page">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
