import SkillItem from '../components/SkillItem'
import skills from '../services/skills'
import { FaCode, FaProjectDiagram, FaTools } from 'react-icons/fa'

const HomeSkills = () => {
  return (
    <div className='skills'>
      <h2>Skills</h2>
      <div className='flex-fluid'>
        <SkillItem
          title='Languages'
          logo={<FaCode />}
          skills={skills.filter((s) => s.type === 0)}
        />
        <SkillItem
          title='Libraries & frameworks'
          logo={<FaProjectDiagram />}
          skills={skills.filter((s) => s.type === 1)}
        />
        <SkillItem
          title='Tools and platforms'
          logo={<FaTools />}
          skills={skills.filter((s) => s.type === 2)}
        />
      </div>
    </div>
  )
}

export default HomeSkills
