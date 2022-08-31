import ProjectItem from '../components/ProjectItem'
import projects from '../services/projects'

const HomeProjects = () => {
  return (
    <div className='projects'>
      <h2>Projects</h2>
      <div className='flex-fluid'>
        <ProjectItem projects={projects} />
      </div>
    </div>
  )
}

export default HomeProjects
