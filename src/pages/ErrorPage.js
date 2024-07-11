import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import Error from '../assets/images/404.svg'

function ErrorPage() {
  return (
    <Layout>
      <div className="errorpage">
        <img src={Error} alt="Error 404" className="errorpage__img" />
        <p className="errorpage__content">
          Oups! La page que vous demandez n'existe pas
        </p>
        <Link to="/" className="errorpage__link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </Layout>
  )
}

export default ErrorPage
