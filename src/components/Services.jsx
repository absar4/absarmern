import {
  IconTemplate,
  IconListCheck,
  IconCpu,
  IconBrandReact,
  IconApi,
  IconDeviceDesktopAnalytics,
} from '@tabler/icons-react'

import '../styles/Servcies.css'
const Services = () => {
  return (
    <section id='services' className='services'>
      <div className='container'>
        <h2 className='services-heading'>Services</h2>
        <div className='row justify-content-evenly align-items-center gap-5 gap-lg-0 mb-5'>
          <div className='col-lg-3'>
            <div className='card px-2'>
              <div className='card-body'>
                <IconTemplate
                  size={50}
                  color='#2041bf'
                  className='text-center mb-3 w-100'
                />

                <h4> User Interface (UI) Development:</h4>
                <p>
                  Designing and implementing the visual elements of a website or
                  application.
                </p>
                <p>
                  Creating responsive and user-friendly layouts for different
                  devices and screen sizes.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='card px-2'>
              <div className='card-body'>
                <IconDeviceDesktopAnalytics
                  size={50}
                  color='#2041bf'
                  className='text-center mb-3 w-100'
                />
                <h4>Web Development:</h4>
                <p>
                  Writing code using HTML, CSS, and JavaScript to build
                  interactive and dynamic web pages.
                </p>
                <p>
                  Implementing web design mockups into functional and accessible
                  user interfaces.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='card px-2'>
              <div className='card-body'>
                <IconListCheck
                  size={50}
                  color='#2041bf'
                  className='text-center mb-3 w-100'
                />
                <h4>Cross-Browser Compatibility:</h4>
                <p>
                  Ensuring that websites and applications work consistently
                  across various web browsers (such as Chrome, Firefox, Safari,
                  and Edge) to provide a uniform experience for all users.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-evenly align-items-center gap-5 gap-lg-0'>
          <div className='col-lg-3'>
            <div className='card px-2'>
              <div className='card-body'>
                <IconCpu
                  size={50}
                  color='#2041bf'
                  className='text-center mb-3 w-100'
                />
                <h4>Performance Optimization:</h4>
                <p>
                  Optimizing the performance of websites by improving page load
                  times and reducing unnecessary resource consumption.
                </p>
                <p>
                  Implementing techniques like code splitting, lazy loading, and
                  optimizing images for faster rendering.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='card px-2'>
              <div className='card-body'>
                <IconBrandReact
                  size={50}
                  color='#2041bf'
                  className='text-center mb-3 w-100'
                />
                <h4> Front-End Frameworks:</h4>
                <p>
                  Utilizing front-end frameworks like React, Angular, or Vue.js
                  to streamline the development process and build scalable,
                  maintainable applications.
                </p>
                <p>
                  Integrating and customizing components provided by these
                  frameworks to enhance functionality.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='card px-2'>
              <div className='card-body'>
                <IconApi
                  size={50}
                  color='#2041bf'
                  className='text-center mb-3 w-100'
                />
                <h4>Collaboration with Back-End Developers:</h4>

                <p>
                  Consuming APIs (Application Programming Interfaces) to fetch
                  and display data dynamically on the user interface.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
