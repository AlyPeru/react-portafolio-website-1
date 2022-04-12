import React from "react";
import "./portafolio.css";
import JSeekers from "../../assets/JSeekers_1.jpg";
import PortfolioPI from "../../assets/portfolioPI.jpg";
import Movies from "../../assets/portfolio2_Movies.jpg";

// DO NOT USE THE IMAGES IN PTODUCTION
const data = [
  {
    id: 1,
    image: JSeekers,
    title: "Proyectos Grupal Seeker's Optimized to make you grow",
    github: " https://github.com/AlyPeru/SeekerPRO",
    demos: "https://pf-seekerpro.herokuapp.com/",
  },
  {
    id: 2,
    image: PortfolioPI,
    title: "Proyecto de Pokemon (Postgress, Express, React, Redux Nodejs)",
    github: "https://github.com/AlyPeru/Proyecto-Idividual",
    demos: "https://www.youtube.com/watch?v=TbchJbl6E38&t=7s",
  },
  {
    id: 3,
    image: Movies,
    title: "App de Movies",
    github: "https://github.com/AlyPeru/my-app-movies",
    demos: "https://inspiring-fudge-c4b15b.netlify.app/",
  },
];

const Portafolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demos }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__items-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demos} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portafolio;
