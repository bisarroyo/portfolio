import { motion } from 'framer-motion'
import bismark from '../assets/img/bismark.jpg'
import { IoIosArrowDown } from 'react-icons/io'

const HomeHero = () => {
  return (
    <div className='flex-column home-row1'>
      <p>Hi! I'm </p>
      <h1>Bismark Arroyo</h1>
      <h2>Front-end developer</h2>
      <motion.div
        className='home-image'
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={bismark} alt='Bismark Arroyo photo' />
      </motion.div>
      <div className='flex-column arow-container'>
        <div className='arrow'><IoIosArrowDown /></div>
      </div>
    </div>
  )
}

export default HomeHero
