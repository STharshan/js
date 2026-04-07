import React from 'react'
import MechanicalHeader from '../Common/ServiceHeader'
import MechanicalServiceInfo from '../Common/ServiceDetails'
import MechanicalSafety from '../components/Services/mechanical/MechanicalSafety'
import MechanicalCall from '../Common/CommonCall'
import MechanicalServices from '../Common/RelatedServices'
import { MechanicalRelated } from '../Data/RelatedServices'
import { MechanicalDetails} from "../Data/ServiceDetails"
const Mechanical = () => {
  return (
    <div>
      <MechanicalHeader 
      title="Mechanical Repairs"
      description="Professional mechanical repairs for all makes and models. Our experienced technicians diagnose and fix issues quickly and efficiently, getting you back on the road safely."
      price="Quote on inspection"
      duration="Varies by repair"
      imageSrc="/empty.svg"
      
      />
      <MechanicalServiceInfo 
       includedItems={MechanicalDetails.included} 
       whyChooseItems={MechanicalDetails.whyChoose}
      />
      <MechanicalSafety />
      <MechanicalServices  services={MechanicalRelated} />
      <MechanicalCall  title="Ready to Book Your Mechanical Repairs?"/>
    </div>
  )
}

export default Mechanical
