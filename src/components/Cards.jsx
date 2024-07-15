import locations from '../data/logements.json'
import { Link } from 'react-router-dom'

function Cards() {
  return (
    <div className="cards-container">
      {locations.map((location) => (
        <Link to={`/logement/${location.id}`} key={location.id}>
          <article className="card">
            <img
              className="card__img"
              src={location.cover}
              alt={location.title}
            />
            <div className="card__cover"></div>
            <h2 className="card__title">{location.title}</h2>
          </article>
        </Link>
      ))}
    </div>
  )
}
export default Cards
