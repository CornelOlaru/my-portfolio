
import AboutPage from '../components/AboutPage'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="About" text="I am a Junior Front-End Developer"/>
      <AboutPage/>
      <Footer/>
    </div>
  )
}

export default About
