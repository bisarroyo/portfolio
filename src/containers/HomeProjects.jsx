import ProjectItem from '../components/ProjectItem'
import projects from '../services/projects'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const HomeProjects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div
      className='projects'
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(50px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
      }}
    >
      <h2>Projects</h2>
      <div className='flex-fluid'>
        <ProjectItem projects={projects} />
      </div>
    </div>
  )
}

export default HomeProjects
