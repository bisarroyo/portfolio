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
      <div
        className={`experience-undefined ${isIntersectingOne && 'show'}`}
        ref={refOne}
      >
        <p>Next experience?</p>
        <p>Comming soon</p>
      </div>
      <div
        className={`experience-titan ${isIntersectingTwo && 'show'}`}
        ref={refTwo}
      >
        <p>Titan Digital</p>
        <p>Jun, 2022</p>
        <p>Web developer.</p>
      </div>
      <div
        className={`experience-start ${isIntersectingThree && 'show'}`}
        ref={refThree}
      >
        <p>Start in programing</p>
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
