import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import banner2 from '../assets/images/banner-img-2.png'

function About() {
  return (
    <Layout>
      <Banner bannerImg={banner2} text="" type="about" />
      <Collapse label="Fiabilité" page="about">
        <p className="content">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logement, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      </Collapse>
      <Collapse label="Respect" page="about">
        <p className="content">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </Collapse>
      <Collapse label="Service" page="about">
        <p className="content">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </Collapse>
      <Collapse label="Sécurité" page="about">
        <p className="content">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </p>
      </Collapse>
    </Layout>
  )
}

export default About
