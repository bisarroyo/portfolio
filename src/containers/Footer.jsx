import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container flex-column'>
      <div className='footer-icons'>
        <a href='https://www.linkedin.com/in/bismarkab/' target='_blank' rel='noreferrer' aria-label='Link for personal LinkedIn profile'>
          <AiFillLinkedin />
        </a>
        <a href='https://github.com/bisarroyo' target='_blank' rel='noreferrer' aria-label='Link for personal Github profile'>
          <AiFillGithub />
        </a>
      </div>
      <div className='footer-contain'>
        <p className='text-p'>Website desing by <strong>Bismark Arroyo</strong></p>
      </div>
    </div>
  )
}

export default Footer
