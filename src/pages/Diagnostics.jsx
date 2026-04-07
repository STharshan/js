import React from 'react'
import DiagnosticsHeader from '../Common/ServiceHeader'
import DiagnosticsServiceInfo from '../Common/ServiceDetails'
import DiagnosticsSafety from '../components/Services/diagnostics/DiagnosticsSafety'
import DiagnosticsServices from '../Common/RelatedServices'
import DiagnosticsCall from '../Common/CommonCall'
import { DiagnosticsRelated } from '../Data/RelatedServices'
import {DiagnosticsDetails} from "../Data/ServiceDetails"
const Diagnostics = () => {
  return (
    <div>
      <DiagnosticsHeader 
      title="Vehicle Diagnostics"
      description="State-of-the-art diagnostic services to identify and resolve complex vehicle issues. Our advanced equipment and expert technicians get to the root of the problem quickly."
      price="From £45"
      duration="30-60 minutes"
      imageSrc="/empty.svg"
      
      />
      <DiagnosticsServiceInfo 
      includedItems={DiagnosticsDetails.included} 
      whyChooseItems={DiagnosticsDetails.whyChoose}
      
      />
      <DiagnosticsSafety />
      <DiagnosticsServices  services={DiagnosticsRelated} />
      <DiagnosticsCall  title="Ready to Book Your Vehicle Diagnostics?"/>
    </div>
  )
}

export default Diagnostics
