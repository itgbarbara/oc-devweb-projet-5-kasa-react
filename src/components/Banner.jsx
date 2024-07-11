function Banner({ bannerImg, text }) {
  return (
    <div className="banner">
      <img className="banner__img" src={bannerImg} alt="" />
      <h1 className="banner__text">
        <span>{text}</span>
      </h1>
    </div>
  )
}

export default Banner
