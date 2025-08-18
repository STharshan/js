import React from 'react'
import SupsensionHeader from '../components/Services/suspension/SupsensionHeader'
import SupsensionServiceInfo from '../components/Services/suspension/SupsensionServiceInfo'
import SupsensionSafety from '../components/Services/suspension/SupsensionSafety'
import SupsensionServices from '../components/Services/suspension/SupsensionServices'
import SupsensionCall from '../components/Services/suspension/SupsensionCall'

const Suspension = () => {
  return (
    <div>
      <SupsensionHeader />
      <SupsensionServiceInfo />
      <SupsensionSafety />
      <SupsensionServices />
      <SupsensionCall />
    </div>
  )
}

export default Suspension
