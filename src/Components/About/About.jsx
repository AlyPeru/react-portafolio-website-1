import React from 'react'
import './about.css';
import Me from '../../assets/nosotros.jpeg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';


const About = () => {
  return (
    <section >
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Me} alt='nosotros' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+Year Word</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Client</h5>
              <small>1+Searching Wordwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Course</h5>
              <small>3+ Master and BootCamp</small>
            </article>
          </div>

          <p>
          I am a responsible person, mother of two beautiful children, self-taught, with time to learn and grow, I am a recent graduate of BootCamp Henrry Developer FullStack PERN (Progress Express React Node JS) and after a lifetime as a university teacher, I turned to what I am most passionate Programming I am active and ready to give my best. Blessed always!!!!
          </p>
          <a href="#contact" className='btn btn-primary lets'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About