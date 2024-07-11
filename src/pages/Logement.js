import Carousel from '../components/Carousel'
import Layout from '../components/Layout'
import locations from '../data/logements.json'
import { useParams } from 'react-router-dom'

function Logement() {
  // On récupère l'id de l'url
  const { id } = useParams()

  // Méthode pour trouver l'index de l'élément dont l'id est dans l'url de la fiche logmement
  const index = locations.findIndex((location) => location.id === id)

  return (
    <Layout>
      <div className="fiche-container">
        <Carousel imgSet={locations[index].pictures[0]} />
        <div className="infos-container">
          <div className="infos">
            <h2 className="infos__title">{locations[index].title}</h2>
            <span className="infos__location">{locations[index].location}</span>
            <div className="infos__tags">
              <ul>
                <li>{locations[index].tags[0]}</li>
                <li>{locations[index].tags[1]}</li>
                <li>{locations[index].tags[2]}</li>
              </ul>
            </div>
          </div>
          <div className="infos-2">
            <div className="host">
              <span className="host__name">{locations[index].host.name}</span>
              <img
                className="host__picture"
                src={locations[index].host.picture}
                alt=""
              />
            </div>
            <div className="ranking">Rating : {locations[index].rating}</div>
          </div>
        </div>
        <div className="description">
          <h3 className="description__item">Description</h3>
          <h3 className="description__item">Equipement</h3>
        </div>
      </div>
    </Layout>
  )
}

export default Logement
