import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../Styles/month.scss';

function month() {
  const NAME_OF_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const day = new Date();

  const year = day.getFullYear();
  const month = day.getMonth() + 1;
  const thisDay = day.getDate();
  // const hour = day.getHours();
  // const minute = day.getMinutes();
  // const second = day.getSeconds();

  const pointToday: any = useRef();
  const [dates, setDates] = useState<number[]>([]);
  const [years, setYears] = useState<number>(year);
  const [months, setMonths] = useState<number>(month);
  const [today, setToday] = useState<number>(0);
  const [dateTime, setDateTime] = useState({
    hours: day.getHours(),
    minutes: day.getMinutes(),
    seconds: day.getSeconds(),
  });

  // 지난 날짜 및 다음 달 날짜 회색으로 표현하기
  const thisLast = new Date(years, months, 0).getDate();

  useEffect(() => {
    const timer = setInterval(() => {
      const day = new Date();
      setDateTime({
        hours: day.getHours(),
        minutes: day.getMinutes(),
        seconds: day.getSeconds(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const settingMonths = (years: number, months: number) => {
    const thisMonthFirstDay = new Date(years, months - 1, 1);

    const lastMonthLastDay = new Date(years, months - 1, 0);

    const thisMonthLastDay = new Date(years, months, 0);

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

    for (let i = 1; i <= 6 - thisMonthLastDay.getDay(); i++) {
      date.push(i);
    }
    setDates([...date]);
  };

  useEffect(() => {
    settingMonths(years, months);
    return () => {
      settingMonths(years, months);
    };
  }, [years, months]);

  const onPrevMonth: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    setMonths(months - 1);
    setYears(years);
    settingMonths(year, months);
  }, [months, year]);

  const onNextMonth: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    setMonths(months + 1);
    setYears(years);
    settingMonths(year, months);
  }, [months, year]);

  const findToday = dates.indexOf(today);
  console.log(findToday);
  console.log(today);

  const checkToday: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    const Today = new Date().getDate();
    const checkMonth = new Date().getMonth() + 1;
    setMonths(checkMonth);
    setToday(Today);
  }, []);

  return (
    <>
      <div className="total-view-port">
        <div className="inner-total-view-port">
          <div className="calendar-header-section">
            <div className="calendar-now-time">
              {`현재 시간:${years}년 ${months}월 ${thisDay}일 
              ${dateTime.hours < 10 ? `0${dateTime.hours}` : `${dateTime.hours}`}
              ${dateTime.minutes < 10 ? `0${dateTime.minutes}` : `${dateTime.minutes}`}
              ${dateTime.seconds < 10 ? `0${dateTime.seconds}` : `${dateTime.seconds}`}
            `}
            </div>
            <div className="calender-this-year-time">
              <div className="calender-this-year-attr">{`${years}년`}</div>
              &nbsp;
              <div className="calender-this-month-attr">{`${months}월`}</div>
            </div>
            <div className="calendar-month-control-wrapper">
              <button className="calendar-month-control-button-attr" onClick={onPrevMonth}>{`<`}</button>
              <div className="calender-month-area">
                <div className="calendar-month-control-time-attr">{`${months}월`}</div>
              </div>
              <button className="calendar-month-control-button-attr" onClick={onNextMonth}>{`>`}</button>
              <button onClick={checkToday} className="calendar-going-today">
                Today
              </button>
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
              {dates.map((calenderList, index) => {
                if (findToday === index && month === months && findToday) {
                  return (
                    <div className="calender-point-date" key={index}>
                      {calenderList}
                    </div>
                  );
                } else {
                  const firstDateIndex = dates.indexOf(1);
                  const lastDateIndex = dates.lastIndexOf(thisLast);
                  const condition = index >= firstDateIndex && index < lastDateIndex + 1 ? 'this' : 'others';
                  return (
                    <div className={condition} key={index} ref={pointToday}>
                      {calenderList}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default month;
