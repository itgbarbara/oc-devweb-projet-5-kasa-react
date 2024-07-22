function Banner({ bannerImg, text, type }) {
  return (
    <div className={`banner banner--${type}`}>
      <img className="banner__img" src={bannerImg} alt="" />
      <h1 className="banner__filter">
        <span>{text}</span>
      </h1>
    </div>
  )
}

export default Banner
