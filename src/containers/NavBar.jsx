import { AiFillLinkedin } from 'react-icons/ai'
import resume from '../assets/pdf/resume.pdf'

const NavBar = () => {
  return (
    <div className='nav-container flex-row'>
      <a className='nav-logo flex-column' href='https://www.linkedin.com/in/bismarkab/' target='_blank' rel='noreferrer' aria-label='Link for personal LinkedIn profile'>
        <AiFillLinkedin />
      </a>
      <a href={resume} target='_blank' rel='noopener noreferrer' download='resume.pdf' className='nav-resume'>
        <p>Resume</p>
      </a>
    </div>
  )
}

export default NavBar
