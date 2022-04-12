import React from "react";
import "./testimonial.css";

import Valen from "../../assets/Valen_Quiroga.jpeg";
import Danny from "../../assets/DanyCeretty.jpeg";
import Lu from "../../assets/Lu_Englender.jpeg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    avatar: Danny,
    name: "Danilo Ceretty",
    review:
  " We have known each other with Ali since our first steps in programming, an incredible woman and colleague, we worked together on several projects with scrum methodology as a full stack. their dedication and commitment is impeccable.",
      // " Con Ali nos conocemos desde nuestros primeros pasos en la programación, una mujer y compañera increíble, trabajamos juntos en varios proyectos con metodología scrum como full stack. su dedicación y compromiso es impecable.",
  },
  {
    avatar: Valen,
    name: "Valentina Quirga",
    review:
    "Working with Ali is very easy, she is a good colleague, organized, with great ideas and above all an excellent person. It was really a pleasure to team up with her 🤍",
      // " Trabajar con Ali es muy fácil, es buena compañera, organizada, con grandes ideas y sobre todo excelente persona. Realmente fue un placer formar equipo con ella 🤍",
  },
  {
    avatar: Lu,
    name: "Lucia ",
    review: "Working with Ali has been a very enjoyable experience, she is a great teammate. It has great capacities for educability, resilience and proactivity.",
      // " Trabajar con Ali ha sido una experiencia muy amena, es una gran compañera de equipo. Cuenta con grandes capacidades de educabilidad, resiliencia y proactividad.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Bootcamp mate’s reviews</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
