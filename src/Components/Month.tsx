import React from 'react';
import '../Styles/month.scss';

function month() {
  const NAME_OF_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  console.log(NAME_OF_DAYS);
  const day = new Date();
  console.log(day);
  const year = day.getFullYear();
  console.log(year);
  const month = day.getMonth(); // 원래 달보다 한 달 뒤로 나온다
  console.log(month);
  const isDay = day.getDate();
  console.log(isDay);
  const dayOfWeek = day.getDay(); // 0 ~ 6 (0: 일), (6: 토)
  console.log(dayOfWeek);
  const thisMonthFirstDay = new Date(year, month, 1); // 이번 달의 첫 날
  console.log(thisMonthFirstDay);
  const thisMonthLastDay = new Date(year, month + 1, 0); // 이번 달의 마지막 날
  console.log(thisMonthLastDay);
  const lastMonthFirstDay = new Date(year, month - 1, 1); // 지난 달의 첫 날
  console.log(lastMonthFirstDay);
  const lastMonthLastDay = new Date(year, month, 0); // 지난 달의 마지막 날
  console.log(lastMonthLastDay);
  const nextMonthFirstDay = new Date(year, month + 1, 1); // 다음 달의 첫 날
  console.log(nextMonthFirstDay);
  const nextMonthLastDay = new Date(year, month + 2, 0); // 다음 달의 마지막 날
  console.log(nextMonthLastDay);
  // 여기까지 전체의 년월일 이 나오고 시간은 00시00분으로 맞춰진 상태가 나온다.

  // 이전날짜
  const prevLastDate = new Date(year, month - 1, 0).getDate();
  const prevLastDay = new Date(year, month - 1, 0).getDay();

  const thisLastDate = new Date(year, month, 0).getDate();
  const thisLastDay = new Date(year, month, 0).getDay();

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
  console.log(dates);
  return (
    <>
      <div className="total-view-port">
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
    </>
  );
}

export default month;
