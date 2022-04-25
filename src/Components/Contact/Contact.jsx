import React, {useRef} from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef(); //esto mantien los estilos en el formulario

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Gmail', 'template_uvc7scc', form.current, 'yuqx8KAghIcGnkw9n')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Ponte en contacto</h5>
      <h2>Contáctame</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
            <FaWhatsapp className="contact_option_icon" />
            <h4>WhatsApp</h4>
            <h5>+51920686378</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+51920686378"
              target="_blank" 
              rel="noreferrer"
            >
              Enviar Mensaje
            </a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className="contact_option_icon" />
            <h4>Email</h4>
            <h5>alidacch@gmail.com</h5>
            <a href="mailto:alidacch@gmail.com">Enviar Mensaje</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact_option_icon" />
            <h4>Messenger</h4>
            <h5>Facebook</h5>
            <a href="https://m.me/alida.c.chauca" target="_blank" rel="noreferrer">
              Enviar Mensaje
            </a>
          </article>
          
        </div>
        {/* END OF CONTACT OTION */}
        <form ref={form} onSubmit={sendEmail}>  
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            required
          />
          <input type="email"
           name="email" 
           placeholder="Email"
           required />
          <textarea
            name="message"
            rows="7"
            placeholder="Mensaje"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
