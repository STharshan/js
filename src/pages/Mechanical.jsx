import React from 'react'
import MechanicalHeader from '../components/Services/mechanical/MechanicalHeader'
import MechanicalServiceInfo from '../components/Services/mechanical/MechanicalServiceInfo'
import MechanicalSafety from '../components/Services/mechanical/MechanicalSafety'
import MechanicalCall from '../components/Services/mechanical/MechanicalCall'

const Mechanical = () => {
  return (
    <div>
      <MechanicalHeader />
      <MechanicalServiceInfo />
      <MechanicalSafety />
      <MechanicalSafety />
      <MechanicalCall />
    </div>
  )
}

export default Mechanical
