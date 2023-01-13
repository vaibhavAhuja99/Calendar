import React from 'react'
import "../style-css/Date.css"

const Days = () => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '37px' }}>
        <p style={{ color: 'white' }}>Su</p>
        <p style={{ color: 'white' }}>Mo</p>
        <p style={{ color: 'white' }}>Tu</p>
        <p style={{ color: 'white' }}>We</p>
        <p style={{ color: 'white' }}>Th</p>
        <p style={{ color: 'white' }}>Fr</p>
        <p style={{ color: 'white' }}>Sa</p>
      </div>
    </div>
  )
}

export default Days
