import React from 'react';
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';


function Footer() {
  return (
    <footer>
      <a href="!#" className="footer__logo">AlyPeru</a>
      <ul className="permalinks">
        <li><a href="!#">Principal</a></li>
          <li><a href="#about">Sobre mi</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#portfolio">Portafolio</a></li>
          <li><a href="#testimonials">Testimonios</a></li>
          <li><a href="#contact">Contacto</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small> &copy; ING ALIDA CAMPOS CHAUCA. Todos los derechos  reservados.</small>
      </div>

    </footer>
  )
}

export default Footer