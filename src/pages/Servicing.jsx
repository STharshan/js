import React from 'react'
import ServiceHeader from '../components/Services/servicing/ServiceHeader'
import ServiceServiceInfo from '../components/Services/servicing/ServiceServiceInfo'
import ServiceSafety from '../components/Services/servicing/ServiceSafety'
import ServiceServices from '../components/Services/servicing/ServiceServices'
import ServiceCall from '../components/Services/servicing/ServiceCall'

const Servicing = () => {
  return (
    <div>
      <ServiceHeader />
      <ServiceServiceInfo />
      <ServiceSafety />
      <ServiceServices />
      <ServiceCall />
    </div>
  )
}

export default Servicing
