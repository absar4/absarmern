import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react'
import { useState } from 'react'
const Productbox = ({
  title,
  img,
  description,
  techno1,
  techno2,
  code,
  demo,
  scrollY,
  cName,
  icon,
  date,
}) => {
  const [scroll, setScroll] = useState(false)
  return (
    <>
      <div className={`pro pro__1 ${cName}`}>
        <div className='pro__img mb-5 mb-lg-0'>
          <img
            src={img}
            alt='website'
            style={{
              transform: scroll ? `translateY(${scrollY})` : 'translateY(0%)',
              transition: 'transform 10s ease-in-out',
              cursor: 'pointer',
            }}
            onMouseEnter={() => setScroll(true)}
            onMouseLeave={() => setScroll(false)}
          />
        </div>
        <div className='pro__text'>
          <h3>
            {title} <span className='date-class'>{date}</span> {icon}
          </h3>
          <p>{description}</p>
          <div className='stack'>
            <p>{techno1}</p>
            <p>{techno2}</p>
          </div>
          <div className='links'>
            <a target='_blank' href={code} rel='noreferrer'>
              Code <IconBrandGithub />
            </a>
            <a target='_blank' href={demo} rel='noreferrer'>
              Live Demo
              <IconExternalLink />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Productbox
