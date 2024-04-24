import React from 'react'
import Hero from './Hero'
// import Plan from './plan'
import Testimonial from './Testimonial'
import Testimonials2 from './Testimonials2'
import Card from './Card'
import Faqs from './Faqs'
import Navbar from '../components/UI/Navbar'
import Footer from '../components/UI/Footer'

const Pricing = () => {
  return (
    <div className='overflow-x-hidden'>
      
        <Navbar />  
        <Hero />
        {/* <Plan /> */}
        <Testimonial />
        <Card />
        <Testimonials2 />
        <Faqs />
        <Footer />
    </div>

  )
}

export default Pricing