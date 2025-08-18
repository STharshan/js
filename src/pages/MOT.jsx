import React from 'react'
import MotHeader from '../components/Services/mot/MotHeader'
import MotServiceInfo from '../components/Services/mot/MOTServiceInfo'
import MotSafety from '../components/Services/mot/MotSafety'
import MotServices from '../components/Services/mot/MotServices'
import MOTCall from '../components/Services/mot/MotCall'


const MOT = () => {
  return (
    <div>
      <MotHeader />
      <MotServiceInfo />
      <MotSafety />
      <MotServices />
      <MOTCall />
    </div>
  )
}

export default MOT