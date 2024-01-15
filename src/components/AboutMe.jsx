import { useEffect, useRef } from 'react'
import { softwareEngineer } from '../assets'
import '../styles/AboutMe.css'

const AboutMe = () => {
  const dotRef = useRef(null)
  useEffect(() => {
    const dot = dotRef.current
    const mouseFollowerSection = document.querySelector('.about-section')
    let delay = 0.2

    const handleMouseMove = (e) => {
      const mouseX =
        e.clientX - mouseFollowerSection.getBoundingClientRect().left
      const mouseY =
        e.clientY - mouseFollowerSection.getBoundingClientRect().top
      setTimeout(() => {
        dot.style.left = mouseX + 'px'
        dot.style.top = mouseY + 'px'
      }, delay * 1000)
    }

    mouseFollowerSection.addEventListener('mousemove', handleMouseMove)

    return () => {
      mouseFollowerSection.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <section id='about' className='about-section position-relative'>
        <div id='dot' ref={dotRef}></div>

        <div className='card-portfolio'>
          <div className='row align-items-center gap-5 gap-lg-0 justify-content-center'>
            <div className='col-lg-6'>
              <img
                src={softwareEngineer}
                alt='software-enginner'
                className='img-fluid'
              />
            </div>
            <div className='col-lg-6'>
              <h2 className='fw-bold'>
                A dedicated Front-end Developer based in Pakistan, Chiniot ✅
              </h2>
              <p className='fs-4'>
                As a Senior Front-End React Developer, I excel in HTML, CSS,
                JavaScript, ES6, Bootstrap 5, React JS, Tailwind, and SCSS. My
                expertise lies in crafting responsive websites with dynamic
                interfaces, using clean and optimized code. I'm adept at
                collaborating with cross-functional teams to deliver exceptional
                web applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutMe
