import React from 'react'
import ServiceHeader from '../Common/ServiceHeader'
import ServiceServiceInfo from '../components/Services/servicing/ServiceServiceInfo'
import ServiceSafety from '../components/Services/servicing/ServiceSafety'
import ServiceServices from '../components/Services/servicing/ServiceServices'
import ServiceCall from '../components/Services/servicing/ServiceCall'

const Servicing = () => {
  return (
    <div>
      <ServiceHeader 
      title="Vehicle Servicing"
      description="Keep your vehicle running at its best with our comprehensive servicing packages. From basic maintenance to major services, we cover all your vehicle's needs."
      price="From £100"
      duration="1-3 hours"
      imageSrc="/empty.svg"
      
      />
      <ServiceServiceInfo />
      <ServiceSafety />
      <ServiceServices />
      <ServiceCall />
    </div>
  )
}

export default Servicing
