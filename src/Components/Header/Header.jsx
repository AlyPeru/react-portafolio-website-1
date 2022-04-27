import React from 'react';
import './header.css';
import CTA from '../Header/CTA'
import  Me from '../../assets/mee.png';
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header id='home'>
      <div className='container header__container'>
        <h4>Hola Yo soy</h4>
        <h1>Alida Campos Chauca</h1>
        <h3 className='text-light'> Fullstack Developer (React Redux JavaScript) </h3>
        <h3 className='text-light'> Ingeniera en Informática </h3>
        <CTA/>
        <HeaderSocial/>
        <div className='me'>
          <img src={Me} alt='ME'/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header