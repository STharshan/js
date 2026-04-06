import React from 'react'
import SuspensionHeader from '../components/Services/suspension/SupsensionHeader'
import SuspensionServiceInfo from '../components/Services/suspension/SupsensionServiceInfo'
import SuspensionSafety from '../components/Services/suspension/SupsensionSafety'
import SuspensionServices from '../components/Services/suspension/SupsensionServices'
import SuspensionCall from '../components/Services/suspension/SupsensionCall'


const Suspension = () => {
  return (
    <div>
      <SuspensionHeader />
      <SuspensionServiceInfo />
      <SuspensionSafety />
      <SuspensionServices />
      <SuspensionCall />
    </div>
  )
}

export default Suspension
