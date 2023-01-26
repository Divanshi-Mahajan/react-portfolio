import React from 'react'
import './header.css'
import CTA from '../CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials'


export const Header = () => {
  return (
    <header>
     <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Divanshi Mahajan</h1>
      <h5 className="text-light"> B.E CSE Student</h5>
      <CTA/>
      <HeaderSocials/>
      <div className="me">
      <img src={ME}alt=""></img>
      </div>

      <a href="#contact" className='scroll_down'>Scroll Down</a>
       </div>
    </header>
  )
}
export default Header
