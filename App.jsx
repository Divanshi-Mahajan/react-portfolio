import React from 'react'
import {Header} from './components/header/header'
import{Nav} from './components/nav/nav'
import {About} from './components/about/about'
import {Experience} from './components/experience/experience'

import {Extraco} from './components/extraco/extraco'

import {Portfolio} from './components/portfolio/portfolio'
import {Certifications} from './components/certifications/certifications'
import {Contact} from './components/contact/contact'
import {Footer} from './components/footer/footer'

const App = () => {
  return (
   <>
   <Header/>
   <Nav/>
   <About/>
   <Experience/>
   <Extraco/>
   <Portfolio/>
   <Certifications/>
   <Contact/>
   <Footer/>
   


   </>
  )
}

export default App