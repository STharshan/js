import React from 'react'
import DPFHeader from '../Common/ServiceHeader'
import DPFServiceInfo from '../components/Services/dpf/DPFServiceInfo'
import DPFSafety from '../components/Services/dpf/DPFSafety'
import DPFServices from '../components/Services/dpf/DPFServices'
import DPFCall from '../components/Services/dpf/DPFCall'

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
      <DPFServiceInfo />
      <DPFSafety />
      <DPFServices />
      <DPFCall />
    </div>
  )
}

export default DPF
