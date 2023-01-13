import React from 'react'

const MonthYear = (props) => {
  return (
    <>
      <div style={{ margin: '10px' }}>
        <p style={{ color: 'white', fontSize: '28px', margin: '0' }}>{props.month} {props.year}</p>
      </div>
    </>
  )
}

export default MonthYear
