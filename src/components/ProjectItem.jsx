import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'

const ProjectItem = ({ projects }) => {
  return (
    <>
      {projects.map((project, i) => (
        <div
          className='project-container flex-column'
          key={project.id}
        >
          <div className='project-image'>
            <img src={project.image} alt='' />
          </div>
          <div className='project-card'>
            <div className='project-title'>
              <h6>{project.name}</h6>
            </div>
            <div className='project-content'>
              <p>{project.description}</p>
            </div>
            <div className='project-info-container flex-row'>
              <div className='project-tags flex-row'>
                <p>{project.tags}</p>
              </div>
              <div className='project-links flex-row'>
                <div className='project-link-page'>
                  <a href={project.link} target='_blank' rel='noreferrer'>
                    <AiOutlineLink />
                  </a>
                </div>
                <div className='project-link-github'>
                  <a href={project.gitUrl} target='_blank' rel='noreferrer'>
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
