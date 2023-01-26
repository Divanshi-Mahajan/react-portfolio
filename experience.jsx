import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill  } from 'react-icons/bs'

export const Experience = () => {
  return (
    <section id='experience'>
      
      <h3>What Skills I Have</h3>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <p>
          <h4>Technical</h4>
          </p>
          
          <div className='experience_content'>
            <article className='experience_details'>
              <p>
              <BsFillPatchCheckFill className="experience_details-icon "/>
              C++
              </p>

            </article>
            <article className='experience_details'>
              <p>
              <BsFillPatchCheckFill className="experience_details-icon "/>
              Java
              </p>

            </article>
            <article className='experience_details'>
              <p>
              <BsFillPatchCheckFill className="experience_details-icon "/>
              HTML
              </p>

            </article>
            <article className='experience_details'>
              <p>
              <BsFillPatchCheckFill className="experience_details-icon"/>
              CSS
              </p>

            </article>
            <article className='experience_details'>
              <p>
              <BsFillPatchCheckFill className="experience_details-icon "/>
              Javascript
              </p>

            </article>
            <article className='experience_details'>
              <p>
              <BsFillPatchCheckFill className="experience_details-icon "/>
              React
              </p>

            </article>
            <article className='experience_details'>
              <p>
              <BsFillPatchCheckFill className="experience_details-icon "/>
              SQL
              </p>

            </article>
            <article className='experience_details'>
              <p>
              <BsFillPatchCheckFill className="experience_details-icon "/>
              Bootstrap
              </p>

            </article>
            <article className='experience_details'>
              <p>
              <BsFillPatchCheckFill className="experience_details-icon "/>
              MsPresentation & Word
              </p>

            </article>
             </div>
             </div>

        <div className='experience_backend'>
        <p>
          <h4>Non-Technical</h4>
          </p>
          
          <div className='experience_content'>
            <article className='experience_details'>
              <p>
              <BsFillPatchCheckFill className="experience_details-icon "/>
              Public Speaking
              </p>

            </article>
            <article className='experience_details'>
              <p>
              <BsFillPatchCheckFill className="experience_details-icon "/>
              Debater
              </p>

            </article>
            <article className='experience_details'>
              <p>
              <BsFillPatchCheckFill className="experience_details-icon "/>
              problem solving
              </p>

            </article>
            <article className='experience_details'>
              <p>
              <BsFillPatchCheckFill className="experience_details-icon "/>
              strong communication
              </p>

            </article>
            <article className='experience_details'>
              <p>
              <BsFillPatchCheckFill className="experience_details-icon "/>
              leafership
              </p>

            </article>
            <article className='experience_details'>
              <p>
              <BsFillPatchCheckFill className="experience_details-icon "/>
              teamwork
              </p>

            </article>
            </div>

        </div>
        </div>
        </section>
  )
}
export default Experience