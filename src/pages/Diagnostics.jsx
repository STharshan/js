import React from 'react'
import DiagnosticsHeader from '../components/Services/diagnostics/DiagnosticsHeader'
import DiagnosticsServiceInfo from '../components/Services/diagnostics/DiagnosticsServiceInfo'
import DiagnosticsSafety from '../components/Services/diagnostics/DiagnosticsSafety'
import DiagnosticsServices from '../components/Services/diagnostics/DiagnosticsServices'
import DiagnosticsCall from '../components/Services/diagnostics/DiagnosticsCall'

const Diagnostics = () => {
  return (
    <div>
      <DiagnosticsHeader />
      <DiagnosticsServiceInfo />
      <DiagnosticsSafety />
      <DiagnosticsServices />
      <DiagnosticsCall />
    </div>
  )
}

export default Diagnostics
