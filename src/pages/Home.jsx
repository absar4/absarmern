import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Products />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
