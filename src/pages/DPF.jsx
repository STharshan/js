import React from 'react'
import DPFHeader from '../Common/ServiceHeader'
import DPFServiceInfo from '../Common/ServiceDetails'
import DPFSafety from '../components/Services/dpf/DPFSafety'
import DPFServices from '../Common/RelatedServices'
import DPFCall from '../Common/CommonCall'
import { DPFRelated } from '../Data/RelatedServices'
import  {DpfDetails} from "../Data/ServiceDetails"
const DPF = () => {
  return (
    <div>
      <DPFHeader 
      title="DPF Cleaning"
      description="Professional DPF cleaning and regeneration services for diesel vehicles. Restore your vehicle's performance and clear warning lights with our expert DPF services."
      price="From £150"
      duration="2-4 hours"
      imageSrc="/empty.svg"
      
      />
      <DPFServiceInfo 
       includedItems={DpfDetails.included} 
       whyChooseItems={DpfDetails.whyChoose}
      />
      <DPFSafety />
      <DPFServices  services={DPFRelated} />
      <DPFCall  title="Ready to Book Your DPF Cleaning?"/>
    </div>
  )
}

export default DPF
