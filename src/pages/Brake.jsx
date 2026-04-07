import React from 'react'
import BrakeHeader from  '../Common/ServiceHeader'
import BrakeServiceInfo from '../components/Services/brake/BrakeServiceInfo'
import BrakeSafety from '../components/Services/brake/BrakeSafety'
import BrakeServices from '../Common/RelatedServices'
import BrakeCall from '../Common/CommonCall'
import { BrakeRelated } from '../Data/RelatedServices'
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
      <BrakeServices  services={BrakeRelated} />
      <BrakeCall  title="Ready to Book Your Brake Services?"/>
    </div>
  )
}

export default Brake
