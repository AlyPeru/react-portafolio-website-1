import React from 'react'
import './about.css';
import Me from '../../assets/nosotros.jpeg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';


const About = () => {
  return (
    <section id='about'>
      <h5>Ponte en contacto</h5>
      <h2>Sobre mí</h2>

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
              <small>1+Año</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clientes</h5>
              <small>1+ Busqueda en Todo el mundo</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Coursos</h5>
              <small>3+ Master y 1 BootCamp</small>
            </article>
          </div>

          <p>
          Soy FullStack Devoloper,recién egresada de BootCamp Henrry donde nos enseñan tecnologías de vanguardía Progress, Express, React, Redux, Node, JavaScrip, Html, Css, Grid entre otes  y luego de toda una vida como docente universitaria, di un giro de 180 grados para dedicarme a lo que más me apasiona FrontEnd y BackEnd para el desarrollo de SPA o aplicaciones Moviles.  Soy activa y dispuesta a dar lo mejor de mí. Bendecida siempre!!!!
          {/* I am a responsible person, mother of two beautiful children, self-taught, with time to learn and grow, I am a recent graduate of BootCamp Henrry Developer FullStack PERN (Progress Express React Node JS) and after a lifetime as a university teacher, I turned to what I am most passionate Programming I am active and ready to give my best. Blessed always!!!! */}
          </p>
          <a href="#contact" className='btn btn-primary lets'>Hablemos</a>
        </div>

      </div>
    </section>
  )
}

export default About