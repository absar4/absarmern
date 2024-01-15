import {
  rentCar,
  adminTemplate,
  ahencyFigma,
  iGym,
  iStudy,
} from '../assets/img'
import Productbox from './Productbox'
import '../styles/Products.css'

const Products = () => {
  return (
    <section id='work' className='project'>
      <div className='container'>
        <div className='project-content'>
          <p>portfolio</p>
          <h3>Each project is a unique piece of development 🧩</h3>
          <div className='projects-grid'>
            <Productbox
              title='Car Dealer'
              img={rentCar}
              date='(February 2023)'
              description='A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.'
              techno1='React'
              techno2='CSS'
              code='#'
              demo='#'
              scrollY='-77%'
              icon='🚗'
            />
            <Productbox
              title='Admin Template'
              img={adminTemplate}
              date='(Dec 2022)'
              description='It provides a user-friendly interface for tasks like user management, content moderation, and system configuration, streamlining administrative processes.'
              techno1='Core Javascript'
              techno2='CSS'
              code='#'
              demo='#'
              scrollY='0%'
              icon='👨‍💼'
            />
            <Productbox
              title='Coporation Web'
              img={ahencyFigma}
              date='(Mar 2023)'
              description='It offers a user-friendly interface for corporate clients to navigate through services, gain insights, and engage with the agency efficiently.'
              techno1='Core Javascript'
              techno2='CSS'
              code='#'
              demo='#'
              scrollY='-81%'
              icon='👨‍💼'
            />
            <Productbox
              title='iGym'
              img={iGym}
              date='(Apr 2023)'
              description='A gym website is an online hub designed for fitness enthusiasts, providing a user-friendly platform to explore gym facilities, access class schedules, and engage with fitness programs.'
              techno1='Bootstrap5'
              techno2='SCSS'
              code='#'
              demo='#'
              scrollY='-81%'
              icon='👨‍💼'
            />
            <Productbox
              title='iStudy'
              img={iStudy}
              date='(Apr 2023)'
              description='"iStudy website serves as a digital space for academic pursuits, offering a user-friendly platform for students to access resources, course materials, and collaborative tools.'
              techno1='Bootstrap5 + Swiper'
              techno2='SCSS'
              code='#'
              demo='#'
              scrollY='-87.5%'
              icon='👨‍💼'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
