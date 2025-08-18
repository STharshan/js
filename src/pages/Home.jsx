import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import ExpertServices from '../components/Home/ExpertServices'
import WhyChooseJSAutomotive from '../components/Home/WhyChooseJSAutomotive'
import Testimonials from '../components/Home/Testimonials'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ExpertServices />
      <WhyChooseJSAutomotive />
      <Testimonials />
    </div>
  )
}

export default Home