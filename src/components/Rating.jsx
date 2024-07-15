import activeStar from '../assets/images/star-active.svg'
import inactiveStar from '../assets/images/start-inactive.svg'

function Rating({ rating }) {
  const range = [1, 2, 3, 4, 5]

  return (
    <div className="rating">
      {range.map((range, index) =>
        range > rating ? (
          <img
            src={inactiveStar}
            className="rating__active"
            alt=""
            key={index}
          />
        ) : (
          <img
            src={activeStar}
            className="rating__inactive"
            alt=""
            key={index}
          />
        )
      )}
    </div>
  )
}

export default Rating
