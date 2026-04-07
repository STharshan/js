import React from 'react'
import SuspensionHeader from '../Common/ServiceHeader'
import SuspensionServiceInfo from '../Common/ServiceDetails'
import SuspensionSafety from '../components/Services/suspension/SupsensionSafety'
import SuspensionServices from '../Common/RelatedServices'
import SuspensionCall from '../Common/CommonCall'
import {SuspensionDetails} from "../Data/ServiceDetails"
import { SuspensionRelated } from '../Data/RelatedServices'
const Suspension = () => {
  return (
    <div>
      <SuspensionHeader 
      title="Suspension Services"
      description="Professional suspension repairs and replacements for improved ride comfort, handling, and safety. From shock absorbers to complete suspension overhauls."
      price="From £120"
      duration="2-4 hours"
      imageSrc="/empty.svg"
      
      />
      <SuspensionServiceInfo 
       includedItems={SuspensionDetails.included} 
       whyChooseItems={SuspensionDetails.whyChoose}
      />
      <SuspensionSafety />
      <SuspensionServices  services={SuspensionRelated} />
      <SuspensionCall  title="Ready to Book Your Suspension Services?"/>
    </div>
  )
}

export default Suspension
