import { useState } from 'react'

function Collapse({ title, content, page }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`collapse collapse--${page}`}>
      <div className={`collapse__title collapse__title--${page}`}>
        <h3>{title}</h3>
        <button onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}>
          {isOpen ? 'Fermer' : 'Ouvrir'}
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
