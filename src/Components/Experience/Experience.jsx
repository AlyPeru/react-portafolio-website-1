import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Mis Habilidades</h5>
      <h2>Mi Experiencia</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Developer</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experiencia Alta</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experiencia Alta</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experiencia Alta</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>React</h4>
              <small className='text-light'>Experiencia Alta </small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Redux</h4>
              <small className='text-light'>Experiencia Alta </small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>React Native</h4>
              <small className='text-light'>Basica</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Type Script</h4>
              <small className='text-light'>Basica</small>
              </div>
            </article>
          </div>
        </div>
        {/* END FRONEND */}
        <div className='experience__backend'>
          <h3>Backend Developer</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Node JS</h4>
              <small className='text-light'>Experiencia Alta</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Express</h4>
              <small className='text-light'>Experiencia Alta</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Sequelize</h4>
              <small className='text-light'>Experiencia Alta</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Mysql</h4>
              <small className='text-light'>Experiencia Alta</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Postgress</h4>
              <small className='text-light'>Intermedia</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Intermedia</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Prisma</h4>
              <small className='text-light'>Basica</small>
              </div>
            </article>
            
          </div>
        </div>
      </div>

    </section>

  )
}

export default Experience