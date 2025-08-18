import React from 'react'
import DPFHeader from '../components/Services/dpf/DPFHeader'
import DPFServiceInfo from '../components/Services/dpf/DPFServiceInfo'
import DPFSafety from '../components/Services/dpf/DPFSafety'
import DPFServices from '../components/Services/dpf/DPFServices'
import DPFCall from '../components/Services/dpf/DPFCall'

const DPF = () => {
  return (
    <div>
      <DPFHeader />
      <DPFServiceInfo />
      <DPFSafety />
      <DPFServices />
      <DPFCall />
    </div>
  )
}

export default DPF
