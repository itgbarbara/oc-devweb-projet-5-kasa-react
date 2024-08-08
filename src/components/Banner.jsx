function Banner({ bannerImg, text, type }) {
  return (
    <div className={`banner banner--${type}`}>
      <img className="banner__img" src={bannerImg} alt="" />
      <div className="banner__overlay">
        <h1 className="banner__title">{text}</h1>
      </div>
    </div>
  )
}

export default Banner
