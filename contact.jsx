import React from 'react'
import './contact.css'
import{MdOutlineEmail } from 'react-icons/md'
import{BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cs6dt2x', 'template_iblie3f', form.current, '4QHqsoZ1HGuFtPWhG')
    e.target.reset()
};

  return (
  <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className='container contact_container'>
      <div className='contact_opotions'>
        <article className='contact_option'>
          <MdOutlineEmail classname='contact_option-icon'/>
          <p>
          Email
          </p>
          <p>divanshimahajan@gmail.com</p>
          <a href='mailto:divanshimahajan@gmail.com'>Send a message</a>
        </article>

        <article className='contact_option'>
          <BsWhatsapp/>
          
          <p>
          Whatsapp
          </p>
          <p>6239583309</p>
          <a href='https://api.whatsapp.com/send?phone+916239583309'>Send a message</a>
          </article>
          </div>
      {/*end of contact options */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder='Your Full Name' required/>
        <input type="email" name="email" placeholder="Your Email" required/>
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type="submit" className='btn btn-primary'>Send Message</button>

      </form>
    </div>
  </section>
  )
}
export default Contact
