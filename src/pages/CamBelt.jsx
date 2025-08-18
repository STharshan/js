import React from 'react'
import ComHeader from '../components/Services/cambelt/ComHeader'
import ComServiceInfo from '../components/Services/cambelt/ComServiceInfo'
import ComSafety from '../components/Services/cambelt/ComSafety'
import ComServices from '../components/Services/cambelt/ComServices'
import ComCall from '../components/Services/cambelt/ComCall'

const CamBelt = () => {
  return (
    <div>
      <ComHeader />
      <ComServiceInfo />
      <ComSafety />
      <ComServices />
      <ComCall />
    </div>
  )
}

export default CamBelt
