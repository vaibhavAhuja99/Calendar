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
      cells.push(<td className='tddate'>{row}</td>)
    } else {
      cells.push(<td className='tddateBox'>{row}</td>)
    }

    if (i === TotalDate.length - 1) {
      rows.push(cells);
      cells = [];
    }
  });

  let daysinmonth = rows.map((d, i) => {
    return <tr>{d}</tr>;
  });


  return (
    <div>
      <table style={{ marginLeft: '0', color: 'white' }}>
        <tbody>
          {daysinmonth}
        </tbody>
      </table>
    </div>
  )
}

export default Date
