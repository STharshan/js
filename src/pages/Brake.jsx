import React from 'react'
import BrakeHeader from '../components/Services/brake/BrakeHeader'
import BrakeServiceInfo from '../components/Services/brake/BrakeServiceInfo'
import BrakeSafety from '../components/Services/brake/BrakeSafety'
import BrakeServices from '../components/Services/brake/BrakeServices'
import BrakeCall from '../components/Services/brake/BrakeCall'

const Brake = () => {
  return (
    <div>
      <BrakeHeader />
      <BrakeServiceInfo />
      <BrakeSafety />
      <BrakeServices />
      <BrakeCall />
    </div>
  )
}

export default Brake
