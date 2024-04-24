import React from 'react'
import Hero from './Hero'
import Navbar from '../components/UI/Navbar'
import Footer from '../components/UI/Footer'
import Hospitals from './Hospitals'
import Priority from './Priority'
import Appointments from './Appointments'

const hospital = () => {
  return (
    <>
      <Navbar />
       <Hero />
       <Hospitals />
       <Priority />
       <Appointments />
    <Footer />
    </>
  )
}

export default hospital