import AboutImg from '../assets/img/about-img.webp'
import RoundedText from '../assets/img/text2.svg'
import WorkingEmoji from '../assets/img/working-emoji.png'
import '../styles/AboutMe.css'

const AboutMe = () => {
  return (
    <>
      <section className='about' id='about'>
        <div className='container'>
          <div className='about-content'>
            <div className='img-side'>
              <img src={WorkingEmoji} alt='emoji' className='work-emoji' />
              <img src={AboutImg} alt='mee' className='img-side__main-img' />
              <span>
                <img src={RoundedText} alt='text' />
              </span>
            </div>
            <div className='text-side'>
              <h3>About me</h3>
              <h4>
                A dedicated Front-end Developer <br /> based in Pakistan,
                Chiniot ✅
              </h4>
              <p>
                In my role as a Senior Front-End React Developer, I wield a
                formidable set of skills encompassing HTML, CSS, JavaScript,
                ES6, Bootstrap 5, React JS, Tailwind, and SCSS. My proficiency
                extends to creating and managing responsive websites, ensuring a
                seamless user experience. I specialize in fashioning dynamic,
                compelling interfaces by composing clean and optimized code,
                leveraging state-of-the-art development tools and techniques.
                Additionally, I thrive as a collaborative team player, actively
                engaging with cross-functional teams to deliver exceptional web
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutMe
