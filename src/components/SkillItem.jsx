import { useInView } from 'framer-motion'
import { useRef } from 'react'

const SkillItem = ({ logo, title, skills }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <div
      className='skill-container flex-column'
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(50px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s'
      }}
    >
      <div className='skill-header flex-column'>
        <div className='header-icon'>
          {logo}
        </div>
        <div className='header-title'>
          <p>{title}</p>
        </div>
      </div>
      <div className='skill-icons flex-row'>
        {skills.map((s) => (
          <div className='icon flex-column' key={s.id}>
            <img src={s.icon} alt={s.name} />
            <p>{s.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillItem
