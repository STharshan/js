import React from 'react'
import MotHeader from '../Common/ServiceHeader'
import MotServiceInfo from '../Common/ServiceDetails'
import MotSafety from '../components/Services/mot/MotSafety'
import MotServices from '../Common/RelatedServices'
import MOTCall from '../Common/CommonCall'
import { MotRelated } from '../Data/RelatedServices';
import { MotDetails} from '../Data/ServiceDetails'
const MOT = () => {
  return (
    <div>
      <MotHeader 
      title="MOT Testing"
      description="Comprehensive MOT testing with detailed reports and expert advice. We test all aspects of your vehicle's safety, roadworthiness, and environmental impact."
      price="From £40"
      duration="40min - 1hour"
      imageSrc="/empty.svg"
      
      />
      <MotServiceInfo 
       includedItems={MotDetails.included} 
       whyChooseItems={MotDetails.whyChoose}
      />
      <MotSafety />
      <MotServices  services={MotRelated} />
      <MOTCall title="Ready to Book Your MOT Testing?" />
    </div>
  )
}

export default MOT