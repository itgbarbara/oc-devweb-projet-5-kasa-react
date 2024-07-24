import { useState } from 'react'
import nextArrow from '../assets/images/arrow_forward.svg'
import prevArrow from '../assets/images/arrow_back.svg'

function Slideshow({ imgSet }) {
  const nbImg = imgSet.length
  const [indexImg, setIndexImg] = useState(0)

  return (
    <div className="slideshow">
      <img
        className={`slideshow__img slideshow__img--${indexImg}`}
        src={imgSet[indexImg]}
        alt=""
      />
      {nbImg > 1 && (
        <div className="slideshow__nav">
          <button
            className="slideshow__btn slideshow__btn--prev"
            onClick={() =>
              indexImg === 0
                ? setIndexImg(nbImg - 1)
                : setIndexImg(indexImg - 1)
            }
          >
            <img src={prevArrow} alt="previous" />
          </button>
          <button
            className="slideshow__btn slideshow__btn--next"
            onClick={() =>
              indexImg === nbImg - 1
                ? setIndexImg(0)
                : setIndexImg(indexImg + 1)
            }
          >
            <img src={nextArrow} alt="next" />
          </button>
          <span className="slideshow__count">
            {indexImg + 1}/{nbImg}
          </span>
        </div>
      )}
    </div>
  )
}

export default Slideshow
