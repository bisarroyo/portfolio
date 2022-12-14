import { useInView } from 'framer-motion'
import { useRef } from 'react'

const HomeAbout = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div
      className='flex-column home-row2'
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(50px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
      }}
    >
      <h2>About me!</h2>
      <p>I'm a selft taugth person that love technologie and how the things happen for learn and work doing interesting things.</p>
      <p>I like to learn everyday from people, books and online information to improve my skills and knowledge.</p>
      <p>My goal is to cooperate creating fantastic tools that help people and entrepreneurs to reach success.</p>
    </div>
  )
}

export default HomeAbout
