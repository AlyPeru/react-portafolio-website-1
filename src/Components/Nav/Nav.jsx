/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './nav.css';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {ImMakeGroup} from 'react-icons/im';
import {MdOutlineReviews} from 'react-icons/md';
import { useState } from 'react';




const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={()=>(setActiveNav('#'))} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>(setActiveNav('#about'))} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>(setActiveNav('#experience'))} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#portfolio" onClick={()=>(setActiveNav('#portfolio'))} className={activeNav === '#portfolio' ? 'active' : ''}><ImMakeGroup/></a>
      <a href="#testimonials" onClick={()=>(setActiveNav('#testimonials'))} className={activeNav === '#testimonials' ? 'active' : ''}><MdOutlineReviews/></a>
      <a href="#contact" onClick={()=>(setActiveNav('#contact'))} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>

      
    </nav>
  )
}

export default Nav