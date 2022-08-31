// containers
import Contact from '../containers/Contact'
import Footer from '../containers/Footer'
import HomeAbout from '../containers/HomeAbout'
import HomeExperience from '../containers/HomeExperience'
import HomeHero from '../containers/HomeHero'
import HomeProjects from '../containers/HomeProjects'
import HomeSkills from '../containers/HomeSkills'

const Home = () => {
  return (
    <div className='flex-column'>
      <HomeHero />
      <HomeAbout />
      <HomeProjects />
      <HomeExperience />
      <HomeSkills />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
