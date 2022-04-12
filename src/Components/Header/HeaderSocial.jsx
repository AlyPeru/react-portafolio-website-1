import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub}from 'react-icons/fa';
// import {FiDribbble}from 'react-icons/fi';

function HeaderSocial() {
  return (
    <div className='header__socials'>
        <a href="http://www.linkedin.com/in/alida-campos-chauca-full-stack-development" target='_blank' rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/AlyPeru?tab=repositories " target='_blank' rel='noreferrer' ><FaGithub/></a>
    </div>
  )
}

export default HeaderSocial