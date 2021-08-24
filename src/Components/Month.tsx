import React from 'react';
import '../Styles/month.scss';

function month() {
  const NAME_OF_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  console.log(NAME_OF_DAYS);
  const day = new Date();
  // console.log(day);
  // const year = day.getFullYear();
  // console.log(year);
  // const month = day.getMonth(); // 원래 달보다 한 달 뒤로 나온다
  // console.log(month);
  // const isDay = day.getDate();
  // console.log(isDay);
  // const dayOfWeek = day.getDay(); // 0 ~ 6 (0: 일), (6: 토)
  // console.log(dayOfWeek);

  const thisMonthFirstDay = new Date(day.getFullYear(), day.getMonth(), 1); // 이번 달의 첫 날

  const thisMonthLastDay = new Date(day.getFullYear(), day.getMonth() + 1, 0); // 이번 달의 마지막 날

  const lastMonthFirstDay = new Date(day.getFullYear(), day.getMonth() - 1, 1); // 지난 달의 첫 날

  const lastMonthLastDay = new Date(day.getFullYear(), day.getMonth(), 0); // 지난 달의 마지막 날

  const nextMonthFirstDay = new Date(day.getFullYear(), day.getMonth(), 1); // 다음 달의 첫 날

  const nextMonthLastDay = new Date(day.getFullYear(), day.getMonth() + 2, 0); // 다음 달의 마지막 날

  console.log(lastMonthFirstDay, nextMonthFirstDay, nextMonthLastDay);

  const thisYear = day.getFullYear();
  const thisMonth = day.getMonth() + 1;
  // 여기까지 전체의 년월일 이 나오고 시간은 00시00분으로 맞춰진 상태가 나온다.

  // 이전날짜
  const prevLastDate = new Date(day.getFullYear(), day.getMonth() - 1, 0).getDate();
  const prevLastDay = new Date(day.getFullYear(), day.getMonth() - 1, 0).getDay();

  const thisLastDate = new Date(day.getFullYear(), day.getMonth(), 0).getDate();
  const thisLastDay = new Date(day.getFullYear(), day.getMonth(), 0).getDay();

  console.log(prevLastDate);
  console.log(prevLastDay);
  console.log(thisLastDate);
  console.log(thisLastDay);
  console.log(thisMonthLastDay.getDate());

  const dates = [];
  if (thisMonthFirstDay.getDay() !== 0) {
    for (let i = 0; i < thisMonthFirstDay.getDay(); i++) {
      dates.unshift(lastMonthLastDay.getDate() - i);
    }
  }

  for (let i = 1; i < thisMonthLastDay.getDate(); i++) {
    dates.push(i);
  }

  for (let i = 1; i <= 13 - thisMonthLastDay.getDay(); i++) {
    dates.push(i);
  }

  console.log(thisMonthFirstDay.setMonth(day.getMonth() - 1));

  const prevNumberChecking = day.setMonth(day.getMonth() - 1);
  console.log(prevNumberChecking);
  const onPrevMonth: React.MouseEventHandler<HTMLButtonElement> = () => {
    thisMonthLastDay.setMonth(day.getMonth() - 1);
  };
  const onNextMonth: React.MouseEventHandler<HTMLButtonElement> = () => {
    day.setMonth(day.getMonth() + 1);
    console.log(day.getMonth() + 1);
  };
  return (
    <>
      <div className="total-view-port">
        <div className="inner-total-view-port">
          <div className="calendar-header-section">
            <div>현재 시간</div>
            <div className="calender-this-year-time">
              <div className="calender-this-year-attr">{`${thisYear}년`}</div>
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
              {NAME_OF_DAYS.map((content: string, index) => {
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
