import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FiAward} from 'react-icons/fi'

export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt="About Image"/>
          </div>
          </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FiAward className='about_icon'/>
              <p>Student</p>
              <small>B.E CSE</small>
              
              </article>

              <article className='about_card'>
              <FiAward className='about_icon'/>
              <p>Secondary School</p>
              <small>Ryan International School,Ludhiana</small>
              
              </article>

              <article className='about_card'>
              <FiAward className='about_icon'/>
              <p>Senior Secondary School</p>
              <small>S.M Arya Public School,New Delhi</small>
              
              </article>

            
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora tempore reiciendis deserunt sed quaerat quas amet deleniti cumque, harum, eius cum quod doloribus repudiandae vel est similique maxime modi enim!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    
      
      </section>

  )
}
export default About