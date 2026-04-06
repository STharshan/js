import React from 'react'
import MechanicalHeader from '../Common/ServiceHeader'
import MechanicalServiceInfo from '../components/Services/mechanical/MechanicalServiceInfo'
import MechanicalSafety from '../components/Services/mechanical/MechanicalSafety'
import MechanicalCall from '../components/Services/mechanical/MechanicalCall'
import MechanicalServices from '../components/Services/mechanical/MechanicalServices'

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
      <MechanicalServiceInfo />
      <MechanicalSafety />
      <MechanicalServices />
      <MechanicalCall />
    </div>
  )
}

export default Mechanical
