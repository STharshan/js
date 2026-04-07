import React from 'react'
import ComHeader from '../Common/ServiceHeader'
import ComServiceInfo from '../components/Services/cambelt/ComServiceInfo'
import ComSafety from '../components/Services/cambelt/ComSafety'
import ComServices from '../Common/RelatedServices'
import ComCall from '../Common/CommonCall'
import { CambeltRelated } from '../Data/RelatedServices'
const CamBelt = () => {
  return (
    <div>
      <ComHeader 
      title="Cam Belt Replacement"
      description="Professional timing belt replacement to prevent catastrophic engine damage. Don't risk expensive engine repairs – replace your timing belt at recommended intervals."
      price="From £280"
      duration="3-5 hours"
      imageSrc="/empty.svg"
      
      />
      <ComServiceInfo />
      <ComSafety />
      <ComServices  services={CambeltRelated} />
      <ComCall title="Ready to Book Your Cam Belt Replacement?"/>
    </div>
  )
}

export default CamBelt
