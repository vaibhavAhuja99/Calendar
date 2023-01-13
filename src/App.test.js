import { render } from '@testing-library/react';
import Calendar from './Calendar';
import { format } from 'date-fns';


test('renders learn react link', () => {

  function getRandomDate() {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    return new Date(timestamp);
  }


  const daysArr = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  const selectedData = getRandomDate()
  
  const getMonthYear = format(selectedData, "LLLL yyyy")
  const getDay = selectedData.getDay()
  const getDate = format(selectedData, 'd')

  const { getByTestId } = render(<Calendar value={selectedData} />);
  const monthYear = getByTestId('month-year')
  const date = getByTestId('DateValue')
  const weekDay = getByTestId('week')
  expect(monthYear.textContent).toBe(getMonthYear)
  expect(date.textContent).toBe(getDate)
  expect(weekDay.textContent).toContain(daysArr[getDay])
});
