import React from 'react'
import MotHeader from '../Common/ServiceHeader'
import MotServiceInfo from '../components/Services/mot/MOTServiceInfo'
import MotSafety from '../components/Services/mot/MotSafety'
import MotServices from '../components/Services/mot/MotServices'
import MOTCall from '../Common/CommonCall'


const MOT = () => {
  return (
    <div>
      <MotHeader 
      title="MOT Testing"
      description="Comprehensive MOT testing with detailed reports and expert advice. We test all aspects of your vehicle's safety, roadworthiness, and environmental impact."
      price="From £40"
      duration="40min - 1hour"
      imageSrc="/empty.svg"
      
      />
      <MotServiceInfo />
      <MotSafety />
      <MotServices />
      <MOTCall title="Ready to Book Your MOT Testing?" />
    </div>
  )
}

export default MOT