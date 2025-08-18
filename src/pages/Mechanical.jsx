import React from 'react'
import MechanicalHeader from '../components/Services/mechanical/MechanicalHeader'
import MechanicalServiceInfo from '../components/Services/mechanical/MechanicalServiceInfo'
import MechanicalSafety from '../components/Services/mechanical/MechanicalSafety'
import MechanicalCall from '../components/Services/mechanical/MechanicalCall'
import MechanicalServices from '../components/Services/mechanical/MechanicalServices'

const Mechanical = () => {
  return (
    <div>
      <MechanicalHeader />
      <MechanicalServiceInfo />
      <MechanicalSafety />
      <MechanicalServices />
      <MechanicalCall />
    </div>
  )
}

export default Mechanical
