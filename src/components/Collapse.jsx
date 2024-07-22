import { useState } from 'react'
import open from '../assets/images/collapse-arrow.svg'

function Collapse({ title, content, page }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`collapse collapse--${page}`}>
      <div className={`collapse__title collapse__title--${page}`}>
        <h3>{title}</h3>
        <button onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}>
          {isOpen ? 'Fermer' : <img src={open} alt="open" />}
        </button>
      </div>
      {isOpen && (
        <p className={`collapse__content collapse__content--${page}`}>
          {content}
        </p>
      )}
    </div>
  )
}

export default Collapse
