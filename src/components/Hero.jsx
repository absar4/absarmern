import { useEffect, useRef } from 'react'
import {
  wavingHand,
  htmlCss,
  bsxd,
  tailwindSassFigma,
  jsreact,
  earthAnimated,
} from '../assets'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import '../styles/Hero.css'

const Hero = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const contentHero = document.querySelector('.hero-container')
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    canvas.width = contentHero.offsetWidth
    canvas.height = contentHero.offsetHeight

    let stars = [], // Array that contains the stars
      FPS = 80, // Frames per second
      x = 50, // Number of stars
      mouse = {
        x: 0,
        y: 0,
      }

    for (let i = 0; i < x; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 1,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25,
      })
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.globalCompositeOperation = 'darker'

      for (let i = 0, x = stars.length; i < x; i++) {
        let s = stars[i]

        ctx.fillStyle = '#000'
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI)
        ctx.fill()
        ctx.fillStyle = 'black'
        ctx.stroke()
      }

      ctx.beginPath()
      for (let i = 0, x = stars.length; i < x; i++) {
        let starI = stars[i]
        ctx.moveTo(starI.x, starI.y)
        if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y)
        for (let j = 0, x = stars.length; j < x; j++) {
          let starII = stars[j]
          if (distance(starI, starII) < 150) {
            ctx.lineTo(starII.x, starII.y)
          }
        }
      }
      ctx.lineWidth = 0.066
      ctx.strokeStyle = '#232'
      ctx.stroke()
    }

    function distance(point1, point2) {
      let xs = 0
      let ys = 0

      xs = point2.x - point1.x
      xs = xs * xs

      ys = point2.y - point1.y
      ys = ys * ys

      return Math.sqrt(xs + ys)
    }

    function update() {
      for (let i = 0, x = stars.length; i < x; i++) {
        let s = stars[i]

        s.x += s.vx / FPS
        s.y += s.vy / FPS

        if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx
        if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy
      }
    }

    canvas.addEventListener('mousemove', function (e) {
      mouse.x = e.clientX
      mouse.y = e.clientY
    })

    function tick() {
      draw()
      update()
      requestAnimationFrame(tick)
    }

    tick()
  }, [])

  return (
    <>
      <section className='container hero-container'>
        <canvas id='canvas' ref={canvasRef}></canvas>
        <section className='content content-hero'>
          <div className='hero-part row justify-content-between flex-column-reverse flex-lg-row py-5'>
            <div className='hero-text text-center text-lg-start col-lg-6'>
              <h1>
                Front-End React Developer
                <img src={wavingHand} className='hand' alt='waving_hand' />
              </h1>
              <p className='fs-3 position-relative'>
                Hi, I'm Absar Ahmad. A passionate Front-end React Developer
                based in Pakistan, Chiniot.
                <img src={earthAnimated} className='globe-icon ms-2' alt='' />
              </p>
              <span className='social-platforms'>
                <a
                  aria-label='linkedin'
                  rel='noreferrer'
                  className='glassEffect'
                  href='#'>
                  <IconBrandLinkedin />
                </a>
                <a
                  aria-label='github'
                  rel='noreferrer'
                  className='glassEffect'
                  target='_blank'
                  href='https://github.com/absar4'>
                  <IconBrandGithub />
                </a>
              </span>
            </div>
            <div className='col-lg-6 d-flex justify-content-center justify-content-lg-end'>
              <div className='hero-img'></div>
            </div>
          </div>
          <div className='tech-skills glassEffect'>
            <div className='tech-brands'>
              <ul className='align-items-center gap-3 justify-content-center me-0 ms-0 p-4 row'>
                <div className='col-12 col-lg-1 text-center'>
                  <p className='fs-4'>Tech Skills</p>
                </div>
                <li className='col'>
                  <img src={htmlCss} alt='html_css_icon' />
                </li>
                <li className='col'>
                  <img src={jsreact} alt='js_react_icon' />
                </li>
                <li className='col'>
                  <img src={bsxd} alt='bootstrap_xd_icon' />
                </li>
                <li className='col'>
                  <img src={tailwindSassFigma} alt='tailwindSassFigma_icon' />
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Hero
