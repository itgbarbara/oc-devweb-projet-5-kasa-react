function Collapse({ title, content, page }) {
  return (
    <div className={`collapse collapse--${page}`}>
      <div className={`collapse__title collapse__title--${page}`}>
        <h3>{title}</h3>
      </div>
      <p className={`collapse__content collapse__content--${page}`}>
        {content}
      </p>
    </div>
  )
}

export default Collapse

// isOpen ? setIsOpen(false) + changer l'image de la flèche et cacher le contenu : setOpen(true) + changer l'image de la flèche et afficher le contenu
// onClick sur la flèche avec setIsOpen(true) ou setIsOpen(false)
