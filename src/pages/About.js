import Layout from '../components/Layout'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import banner2 from '../assets/images/banner-img-2.png'

function About() {
  return (
    <Layout>
      <Banner bannerImg={banner2} text="" type="about" />
      <Collapse
        title="Fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logement, et toutes les informations sont régulièrement vérifiées par nos équipes."
        page="about"
      />
      <Collapse
        title="Respect"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        page="about"
      />
      <Collapse
        title="Service"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        page="about"
      />
      <Collapse
        title="Sécurité"
        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        page="about"
      />
    </Layout>
  )
}

export default About
