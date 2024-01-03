import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='footerc'>
            <h3>
              Copyright © {new Date().getFullYear()}. All rights are reserved
            </h3>
            <div className='footerc__socials'>
              <a aria-label='linkedin' rel='noreferrer' href='#'>
                <IconBrandLinkedin width={30} height={30} />
              </a>
              <a
                aria-label='github'
                target='_blank'
                rel='noreferrer'
                href='https://github.com/absar4'>
                <IconBrandGithub width={30} height={30} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
