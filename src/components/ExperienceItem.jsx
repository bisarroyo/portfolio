import useIntersection from '../hooks/useObserve'

const ExperienceItem = () => {
  const [isIntersectingOne, refOne] = useIntersection({
    threshold: 0.7
  })
  const [isIntersectingTwo, refTwo] = useIntersection({
    threshold: 0.7
  })
  const [isIntersectingThree, refThree] = useIntersection({
    threshold: 0.7
  })
  return (
    <div className='experience-container'>
      <div className={`experience-undefined ${isIntersectingOne && 'show'}`} ref={refOne}>
        <h6>Next experience?</h6>
        <p>Comming soon</p>
      </div>
      <div className={`experience-titan ${isIntersectingTwo && 'show'}`} ref={refTwo}>
        <h6>Titan Digital</h6>
        <p>Jun, 2022</p>
        <p>Web developer</p>
      </div>
      <div className={`experience-start ${isIntersectingThree && 'show'}`} ref={refThree}>
        <h6>Start in programing</h6>
        <p>Dec, 2020</p>
      </div>
      <div className='diagram flex-column'>
        <div className='small' />
        <div className='big' />
        <div className='small' />
        <div className='small' />
        <div className='small' />
        <div className='big' />
        <div className='small' />
        <div className='small' />
        <div className='small' />
        <div className='big' />
        <div className='small' />
      </div>
    </div>
  )
}

export default ExperienceItem
