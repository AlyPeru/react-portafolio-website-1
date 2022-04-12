import React from 'react';
import './header.css';
import CTA from '../Header/CTA'
import  Me from '../../assets/mee.png';
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Alida Campos CHauca</h1>
        <h5 className='text-light'> Fullstack Developer </h5>
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