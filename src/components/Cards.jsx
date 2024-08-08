import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Cards() {
  const [locations, setLocations] = useState([])

  // Simulation appel API
  useEffect(() => {
    fetch('/data/logements.json').then((response) =>
      response
        .json()
        .then((locations) => {
          setLocations(locations)
        })
        .catch((err) => {
          console.log('Error: ', err)
        })
    )
  }, [])

  return (
    <div className="cards-grid">
      {locations.map((location) => (
        <Link
          className="card-link"
          to={`/logement/${location.id}`}
          key={location.id}
        >
          <article className="card">
            <img
              className="card__img"
              src={location.cover}
              alt={location.title}
            />
            <div className="card__overlay"></div>
            <h2 className="card__title">{location.title}</h2>
          </article>
        </Link>
      ))}
    </div>
  )
}
export default Cards
