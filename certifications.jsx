import React from 'react'
import './certifications.css'

export const Certifications = () => {
  return (
    <section id='certifications'>
      <h2>Certifications</h2>
      <div className='container certifications_container'>
        <article className='certification'></article>
        <h3 className='brand'>Coding Ninjas</h3>
        <small className='certificate'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
           exercitationem dolore. Earum aspernatur ducimus at esse natus dol
           ores labore ex aliquam voluptatum minima, unde dolor saepe quibusdam dolorem maiores quo?
        </small>
        <article className='certification'></article>
        <h3 className='brand'>Red Hat</h3>
        <small className='certificate'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
           exercitationem dolore. Earum aspernatur ducimus at esse natus dol
           ores labore ex aliquam voluptatum minima, unde dolor saepe quibusdam dolorem maiores quo?
        </small>
      </div>
      </section>
  )
}
export default Certifications
