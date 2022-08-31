const SkillItem = ({ logo, title, skills }) => {
  return (
    <div className='skill-container flex-column'>
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
