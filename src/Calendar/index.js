import React from 'react'
import {
    endOfMonth,
    startOfMonth,
    format
} from "date-fns";
import MonthYear from './MonthYear';
import Days from './Days';
import Date from './Date';

const Calendar = ({ value }) => {
    const startDate = startOfMonth(value).getDate()
    const lastDate = endOfMonth(value).getDate()
    const month = format(value, "LLLL")
    const year = format(value, "yyyy")
    const startDay = startOfMonth(value).getDay()

    const DateArr = []
    for (let i = startDate; i <= lastDate; i++) {
        DateArr.push(i)
    }

    const BlankArr = []
    for (let i = 0; i < startDay; i++) {
        BlankArr.push(" ")
    }

    const TotalDate = [...BlankArr, ...DateArr]

    return (
        <div style={{ marginTop: '100px', marginLeft: '35%', width: '400px', height: 'auto', background: ' #003333' }}>
            <MonthYear month={month} year={year} />
            <Days />
            <Date TotalDate={TotalDate} dateValue={format(value, 'dd')} />
        </div>
    )
}

export default Calendar