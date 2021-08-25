import React, { useEffect, useState } from 'react';
import '../Styles/month.scss';

function month() {
  const NAME_OF_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const day = new Date();

  const year = day.getFullYear();
  const thisMonth = day.getMonth() + 1;
  const month = day.getMonth() + 1;

  const [dates, setDates] = useState<number[]>([]);
  const [months, setMonths] = useState<number>(month);

  const settingMonths = (year: number, months: number) => {
    const thisMonthFirstDay = new Date(year, months - 1, 1);

    const lastMonthLastDay = new Date(year, months, 0);

    const thisMonthLastDay = new Date(year, months, 0);

    console.log(thisMonthFirstDay);
    console.log(lastMonthLastDay);
    console.log(thisMonthLastDay);
    const date = [];
    if (thisMonthFirstDay.getDay() !== 0) {
      for (let i = 0; i < thisMonthFirstDay.getDay(); i++) {
        date.unshift(lastMonthLastDay.getDate() - i);
      }
    }

    for (let i = 1; i <= thisMonthLastDay.getDate(); i++) {
      date.push(i);
    }

    for (let i = 1; i <= 13 - thisMonthLastDay.getDay(); i++) {
      date.push(i);
    }
    setDates([...date]);
  };

  useEffect(() => {
    settingMonths(year, months);
    return () => {
      settingMonths(year, months);
    };
  }, [year, month]);

  console.log(months);
  const onPrevMonth: React.MouseEventHandler<HTMLButtonElement> = () => {
    setMonths(months - 1);
    settingMonths(year, months);
  };
  const onNextMonth: React.MouseEventHandler<HTMLButtonElement> = () => {
    setMonths(months + 1);
    settingMonths(year, months);
  };

  return (
    <>
      <div className="total-view-port">
        <div className="inner-total-view-port">
          <div className="calendar-header-section">
            <div>현재 시간</div>
            <div className="calender-this-year-time">
              <div className="calender-this-year-attr">{`${year}년`}</div>
              &nbsp;
              <div className="calender-this-month-attr">{`${thisMonth}월`}</div>
            </div>
            <div className="calendar-month-control-wrapper">
              <button className="calendar-month-control-button-attr" onClick={onPrevMonth}>{`<`}</button>
              <div className="calender-month-area">
                <div className="calendar-month-control-time-attr">8월</div>
              </div>
              <button className="calendar-month-control-button-attr" onClick={onNextMonth}>{`>`}</button>
            </div>
          </div>
          <div className="partition-with-calender-header"></div>
          <div className="calendar-contents-wrapper">
            <div className="calendar-date-part">
              {NAME_OF_DAYS.map((content, index) => {
                return (
                  <div className="calendar-inner-attr" key={index}>
                    {content}
                  </div>
                );
              })}
            </div>
            <div className="calendar-number-part">
              {dates.map((datesList, index) => {
                return (
                  <div key={index} className="calender-number-inner-attr">
                    {datesList}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default month;
