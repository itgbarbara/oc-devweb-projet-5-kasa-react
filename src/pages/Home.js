import Layout from '../components/Layout'
import Cards from '../components/Cards'
import Banner from '../components/Banner'
import banner1 from '../assets/images/banner-img-1.png'

function Home() {
  const text = 'Chez vous, partout et ailleurs'

  return (
    <Layout>
      <Banner bannerImg={banner1} text={text} type="home" />
      <Cards />
    </Layout>
  )
}

export default Home
