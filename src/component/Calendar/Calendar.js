import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
const { datesGenerator } = require('dates-generator');

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dates, setDates] = useState([]);
  const [calendar, setCalendar] = useState({
    month: selectedDate.getMonth(),
    year: selectedDate.getFullYear(),
    date: selectedDate.getDate(),
  });

  const sprite = 'public/images/sprite.svg';


  useEffect(() => {
    const body = {
      month: calendar.month,
      year: calendar.year
    };
    const { dates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(body);

    setDates([ ...dates ]);
    setCalendar({
      ...calendar,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    });
  }, [])

  const onClickNext = () => {
    const body = { month: calendar.nextMonth, year: calendar.nextYear };
    const { dates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(body);

    setDates([ ...dates ]);
    setCalendar({
      ...calendar,
      month: calendar.nextMonth,
      year: calendar.nextYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    });
  }

  const onClickPrevious = () => {
    const body = { month: calendar.previousMonth, year: calendar.previousYear };
    const { dates, nextMonth, nextYear, previousMonth, previousYear } = datesGenerator(body);

    setDates([ ...dates ]);
    setCalendar({
      ...calendar,
      month: calendar.previousMonth,
      year: calendar.previousYear,
      nextMonth,
      nextYear,
      previousMonth,
      previousYear
    });
  }


  const onSelectDate = (date) => {
    setSelectedDate(new Date(date.year, date.month, date.date));
  }


  return (
    <div className="calendar">
      <Container>  
        <div className="d-flex justify-content-between calendar-top">
          <Previous className="previous" onClick={onClickPrevious}>
            <svg xmlns="http://www.w3.org/2000/svg" width="13.891" height="9.427" viewBox="0 0 13.891 9.427">
              <g id="Group_87" data-name="Group 87" transform="translate(-668.5 -1538.476)">
                <line id="Line_6" data-name="Line 6" x2="12.547" transform="translate(668.5 1543.061)" fill="none" stroke="#fff" strokeWidth="1.5"/>
                <path id="Path_34" data-name="Path 34" d="M7083.216,1539.006l4.183,4.183-4.183,4.183" transform="translate(-6406.069)" fill="none" stroke="#fff" strokeWidth="1.5"/>
              </g>
            </svg>

          </Previous>
          <MonthText>
            {months[calendar.month]}
          </MonthText>
          <Next className="next" onClick={onClickNext}>
            <svg xmlns="http://www.w3.org/2000/svg" width="13.891" height="9.427" viewBox="0 0 13.891 9.427">
              <g id="Group_87" data-name="Group 87" transform="translate(-668.5 -1538.476)">
                <line id="Line_6" data-name="Line 6" x2="12.547" transform="translate(668.5 1543.061)" fill="none" stroke="#fff" strokeWidth="1.5"/>
                <path id="Path_34" data-name="Path 34" d="M7083.216,1539.006l4.183,4.183-4.183,4.183" transform="translate(-6406.069)" fill="none" stroke="#fff" strokeWidth="1.5"/>
              </g>
            </svg>
          </Next>
        </div>
        <CalendarTable>
              <table>
                <tbody>
                  {dates.length > 0 && dates.map((week) => (
                    <tr key={JSON.stringify(week[0])}>
                    {week.map(each => {
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);

                      const eachDate = new Date(
                        each.year,
                        each.month,
                        each.date
                      );
                      return(
                        <td key={JSON.stringify(each)} className={[eachDate.valueOf() === today.valueOf() ? 'today' : '' || each.month == calendar.month ? '' : 'disabled'].join()}>
                          <div onClick={() => onSelectDate(each)} className="align-items-center justify-center calendar-date-day">
                            <span className="calendar-day">{days [new Date(each.jsDate).getDay()]}</span>
                            <span className="calendar-date">{each.date}</span>
                          </div>
                        </td>
                      );
                    })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </CalendarTable>
      </Container>
      <div className="d-flex justify-content-center job-labels">
          <span>
            <svg className="icon" width="14" height="18"><use xlinkHref={`${sprite}#filling`} /></svg>Filling        
          </span>
          <span>
            <svg className="icon" width="14" height="18"><use xlinkHref={`${sprite}#booked`} /></svg>Booked       
          </span>
          <span>
            <svg className="icon" width="14" height="18"><use xlinkHref={`${sprite}#live`} /></svg>Live
          </span>
          <span>
            <svg className="icon" width="14" height="18"><use xlinkHref={`${sprite}#completed`} /></svg>Completed
          </span>
          <span>
            <svg className="icon" width="14" height="18"><use xlinkHref={`${sprite}#cancelled`} /></svg>Cancelled
          </span>
      </div>
    </div>
  );
}

export default Calendar;


const Container = styled.div`
  .calendar-top {
    margin: 0 auto;
    max-width: 80%;
    padding: 3.125rem;
  }
  .today .calendar-date-day {
    border: 2px solid #4C2275;
    position: relative;
    &:before {
      background: #4C2275;
      border-radius: 10px;
      color: var(--color-base);
      content: "Today";
      font-size: 10px;
      line-height: 14px;
      position: absolute;
      text-align: center;
      top: -8px;
      width: 42px;
    }
  }
  .disabled .calendar-date-day {
      background-color: #FBFBFB;
      .calendar-date {
        color: rgba(195,181,209,0.7);
      }
      .calendar-day {
        color: #C3B5D1;
      }
  }
  & + .job-labels {
    margin-top: 2rem;
    > span {
    font-size: 0.8125rem;
    font-weight: 500;
    margin-right: 1.75rem;
    svg {
      margin-right: 4px;
    }
  }
  }
`

const Previous = styled.div`
  background-color: var(--color-brand-light);
  border-radius: 50%;
  cursor: pointer;
  line-height: 35px;
  text-align: center;
  transform: rotate(-180deg);
  width: 35px;
`

const Next = styled.div`
  background-color: var(--color-brand-light);
  border-radius: 50%;
  cursor: pointer;
  line-height: 35px;
  text-align: center;
  width: 35px;
`

const MonthText = styled.div`
  background-color: var(--color-brand-light);
  border-radius: 16px;
  color: var(--color-base);
  line-height: 35px;
  text-align: center;
  width: 208px;
`

const CalendarTable = styled.div`
  table {
    width: 100%;
    tr td:last-child .calendar-date-day {
      margin-right: 0;
    }
  }

  .calendar-date-day {
    background-color: var(--color-secondary);
    border-radius: 13px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 68px;
    width: 68px;
    margin-bottom: 1.25rem;
    margin-right: 1.25rem;
    table {
      width: 100%;
    }
  }
  .calendar-date {
    font-size: 1.15rem;
    font-weight: 600;
  }
  .calendar-day {
    color: rgba(76,34,117,0.7);
    display: block;
    font-size: 0.875rem;
    line-height: 14px;
  }
`