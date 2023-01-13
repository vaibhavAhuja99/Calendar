import React from 'react'
import "../style-css/Date.css"

const Date = ({ TotalDate, dateValue }) => {

  let rows = [];
  let cells = [];
  TotalDate.forEach((row, i) => {
    if (i % 7 === 0) {
      rows.push(cells);
      cells = [];
    }

    if (+dateValue === row) {
      cells.push(<td key={i} data-testid="DateValue" className='tddate'>{row}</td>)
    } else {
      cells.push(<td key={i} data-testid="vale" className='tddateBox'>{row}</td>)
    }

    if (i === TotalDate.length - 1) {
      rows.push(cells);
      cells = [];
    }
  });

  let daysInMonth = rows.map((d, i) => (
    <tr key={i}>{d}</tr>
  ));


  return (
    <div>
      <table style={{ marginLeft: '0', color: 'white' }}>
        <tbody>
          {daysInMonth}
        </tbody>
      </table>
    </div>
  )
}

export default Date
