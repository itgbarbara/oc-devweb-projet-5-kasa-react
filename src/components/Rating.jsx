import activeStar from '../assets/images/star-active.svg'
import inactiveStar from '../assets/images/star-inactive.svg'

function Rating({ rating }) {
  const range = [1, 2, 3, 4, 5]

  return (
    <div className="rating">
      {range.map((range, index) =>
        range > rating ? (
          <img
            src={inactiveStar}
            className="rating__star rating__star--active"
            alt=""
            key={index}
          />
        ) : (
          <img
            src={activeStar}
            className="rating__star rating__star--inactive"
            alt=""
            key={index}
          />
        )
      )}
    </div>
  )
}

export default Rating
