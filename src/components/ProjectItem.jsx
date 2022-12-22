import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ProjectItem = ({ projects }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <>
      {projects.map((i) => (
        <div
          className='project-container flex-column'
          key={i.id}
          ref={ref}
          style={{
            transform: isInView ? 'none' : 'translateY(50px)',
            opacity: isInView ? 1 : 0,
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
          }}
        >
          <div className='project-image'>
            <img src={i.image} alt='' />
          </div>
          <div className='project-card'>
            <div className='project-title'>
              <h6>{i.name}</h6>
            </div>
            <div className='project-content'>
              <p>{i.description}</p>
            </div>
            <div className='project-info-container flex-row'>
              <div className='project-tags flex-row'>
                <p>{i.tags}</p>
              </div>
              <div className='project-links flex-row'>
                <div className='project-link-page'>
                  <a href={i.link} target='_blank' rel='noreferrer'>
                    <AiOutlineLink />
                  </a>
                </div>
                <div className='project-link-github'>
                  <a href={i.gitUrl} target='_blank' rel='noreferrer'>
                    <AiFillGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ProjectItem
