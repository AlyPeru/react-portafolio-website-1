import React from 'react'
import Header from './Components/Header/Header';
import Portafolio from './Components/Portafolio/Portafolio';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Testimonial from './Components/Testimonials/Testimonial';
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portafolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App