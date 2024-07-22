import Header from '../components/Header'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <div className="body-container">
      <Header />
      <main className="body-container__main">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
