import locations from '../data/logements.json'
import { Link } from 'react-router-dom'

function Cards() {
  return (
    <div className="cards-container">
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
            <div className="card__filter"></div>
            <h2 className="card__title">{location.title}</h2>
          </article>
        </Link>
      ))}
    </div>
  )
}
export default Cards
