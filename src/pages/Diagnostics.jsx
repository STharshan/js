import React from 'react'
import DiagnosticsHeader from '../Common/ServiceHeader'
import DiagnosticsServiceInfo from '../components/Services/diagnostics/DiagnosticsServiceInfo'
import DiagnosticsSafety from '../components/Services/diagnostics/DiagnosticsSafety'
import DiagnosticsServices from '../components/Services/diagnostics/DiagnosticsServices'
import DiagnosticsCall from '../Common/CommonCall'

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
      <DiagnosticsServiceInfo />
      <DiagnosticsSafety />
      <DiagnosticsServices />
      <DiagnosticsCall  title="Ready to Book Your Vehicle Diagnostics?"/>
    </div>
  )
}

export default Diagnostics
