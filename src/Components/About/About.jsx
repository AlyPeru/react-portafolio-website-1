import React from 'react'
import './about.css';
import Me from '../../assets/nosotros.jpeg';
import D1 from '../../assets/DiplomaHerry.jpg';
import D2 from '../../assets/FondoNegro.jpeg';
import { FaAward } from 'react-icons/fa';
// import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';


const About = () => {
  return (
    <section id='about'>
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
              
              <h5>Educ Universitaria</h5>
              <img src={D2}  alt="Ingeniero en Informática"/>
              
            </article>
          
            <article className='about__card'>
              
              <h5>BootCamp</h5>
              <img src={D1}  alt="Fullstack Deeloper "/>

            </article>
          </div>

          <p>
          Soy <strong>FullStack Devoloper</strong>,recién egresada de BootCamp Henry donde nos enseñan tecnologías de vanguardía <strong> Progress, Express, React, Redux, Node, JavaScript, Html, Css, Grid </strong> entre otras y luego de toda una vida como docente universitaria, di un giro de 180 grados para dedicarme a lo que más me apasiona <strong> FrontEnd y BackEnd</strong> para el desarrollo de SPA o aplicaciones Moviles. Soy activa y dispuesta a dar lo mejor de mí. Bendecida siempre!!!!

          {/* I am a responsible person, mother of two beautiful children, self-taught, with time to learn and grow, I am a recent graduate of BootCamp Henrry Developer FullStack PERN (Progress Express React Node JS) and after a lifetime as a university teacher, I turned to what I am most passionate Programming I am active and ready to give my best. Blessed always!!!! */}
          </p>
          <a href="#contact" className='btn btn-primary lets'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About