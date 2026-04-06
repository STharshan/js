import React from 'react'
import BrakeHeader from  '../Common/ServiceHeader'
import BrakeServiceInfo from '../components/Services/brake/BrakeServiceInfo'
import BrakeSafety from '../components/Services/brake/BrakeSafety'
import BrakeServices from '../components/Services/brake/BrakeServices'
import BrakeCall from '../components/Services/brake/BrakeCall'

const Brake = () => {
  return (
    <div>
      <BrakeHeader 
      title="Brake Services"
      description="Professional brake services including pad replacement, disc machining, and complete brake system overhauls. Your safety is our priority - don't compromise on brakes."
      price="From £80"
      duration="1-2 hours"
      imageSrc="/empty.svg"
      
      />
      <BrakeServiceInfo />
      <BrakeSafety />
      <BrakeServices />
      <BrakeCall />
    </div>
  )
}

export default Brake
