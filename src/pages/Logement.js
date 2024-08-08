import { useParams, Navigate } from 'react-router-dom'
import Collapse from '../components/Collapse'
import Layout from '../components/Layout'
import Slideshow from '../components/Slideshow'
import Rating from '../components/Rating'
import locations from '../data/logements.json'

// Simuler un appel à l'API avec useEffect

function Logement() {
  // Récupération de l'id qui se trouve dans l'url
  const { id } = useParams()

  // Méthode pour trouver l'index de l'élément dont l'id est dans l'url de la fiche logement
  const index = locations.findIndex((location) => location.id === id)

  return (
    <Layout>
      {!locations[index] ? ( // Si location.index n'existe pas...
        <Navigate to="/error" replace={true} /> // Alors on est redirigé vers la page d'erreur 404
      ) : (
        // Sinon la fiche du logement s'affiche
        <div className="fiche-logement">
          <Slideshow imgSet={locations[index].pictures} />
          <div className="infos-logement">
            <div className="infos">
              <div>
                <h2 className="infos__title">{locations[index].title}</h2>
                <span className="infos__location">
                  {locations[index].location}
                </span>
              </div>
              <ul className="infos__tags">
                {locations[index].tags.map((tag, index) => (
                  <li key={`${tag}-${index}`}>{tag}</li>
                ))}
              </ul>
            </div>
            <div className="infos-host">
              <div className="host">
                <span className="host__name">{locations[index].host.name}</span>
                <img
                  className="host__picture"
                  src={locations[index].host.picture}
                  alt=""
                />
              </div>
              <Rating rating={locations[index].rating} />
            </div>
          </div>
          <div className="description">
            <Collapse label="Description" page="logement">
              <p className="content">{locations[index].description}</p>
            </Collapse>
            <Collapse label="Equipement" page="logement">
              <ul className="content">
                {locations[index].equipments.map((equipement, index) => (
                  <li key={`${equipement}-${index}`}>{equipement}</li>
                ))}
              </ul>
            </Collapse>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Logement
