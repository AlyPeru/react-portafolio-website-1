import React from 'react';
import CV from '../../assets/CV2.pdf';

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Descarga mi CV  </a>
        <a href='#contact' className='btn btn-primary'> Hablemos</a>
        
    </div>
  )
}

export default CTA 