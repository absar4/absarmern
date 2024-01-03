import { IconMail, IconMapSearch } from '@tabler/icons-react'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <>
      <section id='contact' className='contact'>
        <div className='container'>
          <div className='contact__content'>
            <div className='contact__title'>
              <p>contact</p>
              <h3>Don't be shy! Hit me up! 👇</h3>
            </div>
            <div className='contact__icons'>
              <div className='contact__icon-box'>
                <span>
                  <IconMapSearch width={30} height={30} />
                </span>
                <div className='contact__info'>
                  <h3>Location</h3>
                  <p>Pakistan, Chiniot</p>
                </div>
              </div>

              <div className='contact__icon-box'>
                <span>
                  <IconMail width={30} height={30} />
                </span>
                <div className='contact__info'>
                  <h3>Mail</h3>
                  <a href='mailto:absarahmad776@gmail.com'>
                    absarahmad776@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
