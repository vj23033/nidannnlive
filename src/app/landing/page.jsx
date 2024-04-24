import React from 'react'
import Hero from './Hero'
import Features from './Features'
import Navbar from '../components/UI/Navbar'
import WhyUs from './WhyUs'
import AdditionalFeatures from './AdditionalFeatures'
import UserRole from './UserRole'
import Testimonials from './Testimonials'
import BestServices from './BestServices'
import Footer from '../components/UI/Footer'
import Banner from './Banner'
import SetupBanner from './SetupBanner'

const Landing = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
      <WhyUs />
      <Features />
      <AdditionalFeatures />
      <UserRole />
      <Testimonials />
      <Banner />
      <BestServices />
      <SetupBanner />
      <Footer />
    </div>
  )
}

export default Landing