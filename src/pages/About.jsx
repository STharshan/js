import React from 'react'
import AboutHeader from '../components/About/AboutHeader'
import OurStory from '../components/About/OurStory'
import ExpertTeam from '../components/About/ExpertTeam'
import WhyChooseUs from '../components/About/WhyChooseUs'
import VisitWorkshop from '../components/About/VisitWorkshop'
import CallToAction from '../components/About/CallToAction'

const About = () => {
  return (
    <div>
      <AboutHeader />
      <OurStory />
      {/* <ExpertTeam /> */}
      <WhyChooseUs />
      <VisitWorkshop />
      <CallToAction />
    </div>
  )
}

export default About