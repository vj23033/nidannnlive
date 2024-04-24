import React from 'react'
import Hero from './Hero'
import Navbar from '../components/UI/Navbar'
import Story from './Story'
import Footer from '../components/UI/Footer'
import Note from './Note'
import Features from './Features'
import Carousel from './Carousel'
import Team from './Team'
import QuestionBanner from './QuestionBanner'


const About = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Story />
        <Note />
        <Features />
        <Carousel />
        <Team />
        <QuestionBanner />
        <Footer />


    </div>
  )
}

export default About