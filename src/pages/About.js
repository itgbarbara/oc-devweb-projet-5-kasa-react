import Layout from '../components/Layout'
import Banner from '../components/Banner'
import banner2 from '../assets/images/banner-img-2.png'

function About() {
  return (
    <Layout>
      <Banner bannerImg={banner2} text="" type="about" />
    </Layout>
  )
}

export default About
