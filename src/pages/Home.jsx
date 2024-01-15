import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Services from '../components/Services'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Products />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
