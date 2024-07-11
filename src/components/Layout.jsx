import Header from '../components/Header'
import '../utils/styles/global.scss'

function Layout({ children }) {
  return (
    <div className="main-container">
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
