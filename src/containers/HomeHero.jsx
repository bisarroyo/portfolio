import bismark from '../assets/img/bismark.jpg'
import { IoIosArrowDown } from 'react-icons/io'

const HomeHero = () => {
  return (
    <div className='flex-column home-row1'>
      <p>Hi! I'm </p>
      <h1>Bismark Arroyo</h1>
      <h2>Front-end developer</h2>
      <div className='home-image'>
        <img src={bismark} alt='Bismark Arroyo photo' />
      </div>
      <div className='flex-column arow-container'>
        <div className='arrow'><IoIosArrowDown /></div>
      </div>
    </div>
  )
}

export default HomeHero
