import { useState } from 'react'
import collapseArrow from '../assets/images/collapse-arrow.svg'

function Collapse({ label, page, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`collapse collapse--${page}`}>
      <div className={`collapse__label collapse__label--${page}`}>
        <h3>{label}</h3>
        <button
          className="label__btn"
          onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
        >
          {isOpen ? (
            <img
              className="label__btn label__btn--rotate"
              src={collapseArrow}
              alt="open"
            />
          ) : (
            <img className="label__btn" src={collapseArrow} alt="open" />
          )}
        </button>
      </div>
      {isOpen ? (
        <div className="collapse__dropdown collapse__dropdown--open">
          {children}
        </div>
      ) : (
        <div className="collapse__dropdown collapse__dropdown--close">
          {children}
        </div>
      )}
    </div>
  )
}

export default Collapse
