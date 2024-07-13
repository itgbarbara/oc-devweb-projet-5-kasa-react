import Collapse from '../components/Collapse'
import Layout from '../components/Layout'
import Slideshow from '../components/Slideshow'
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
        <Slideshow imgSet={locations[index].pictures} />
        <div className="infos-container">
          <div className="infos">
            <div>
              <h2 className="infos__title">{locations[index].title}</h2>
              <span className="infos__location">
                {locations[index].location}
              </span>
            </div>
            <ul className="infos__tags">
              {locations[index].tags.map((tag) => (
                <li>{tag}</li>
              ))}
            </ul>
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
            <div className="rating">Ranking : {locations[index].rating}</div>
          </div>
        </div>
        <div className="description">
          <Collapse
            title="Description"
            content={locations[index].description}
            page="logement"
          />
          <Collapse
            title="Equipement"
            content={locations[index].equipments.map((equipement) => (
              <li>{equipement}</li>
            ))}
            page="logement"
          />
        </div>
      </div>
    </Layout>
  )
}

export default Logement
