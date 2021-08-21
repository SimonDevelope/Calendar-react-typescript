// const date = new Date();
// console.log(date.getFullYear()); // 2021
// console.log(date.getMonth()); // 7
// console.log(date.getMonth() + 1); // 8 바로 위 7번째 줄을 보면 7월달이 나오는데 왜일까?
// console.log(date.getDate()); // 21
// console.log(date.getDay()); // 6 요일 => 0(일요일) ~ 6(토요일)
// console.log(date.getHours()); // 15
// console.log(date.getMinutes()); // 17
// console.log(date.getMilliseconds()); // 809

// const year = date.getFullYear();
// const month = date.getMonth();
// //이번 달 구하기
// const setDate = new Date(year, month, 1); // sat Aug 21 2021 00: 00: 00 GMY+0900 (한국 표준시)
// console.log(setDate);
// const firstDay = setDate.getDay(); // 6 이번달의 첫째 요일 구하기
// console.log(firstDay);
// const firstDayName = setDate.getDate(); // 21 이번달의 첫번째 날 구하기
// console.log(firstDayName);

// //저번 달 구하기
// const lastMonth = new Date(year, month, 0); // 이렇게 지난 달의 마지막 날을 알 수 있다.
// const lastMonthLastDay = lastMonth.getDate(); // 31
// console.log(lastMonthLastDay);
// console.log(lastMonth);

// //이번 달 구하기
// const thisMonthLastDay = new Date(year, month + 1, 0).getDate(); // 31
// console.log(thisMonthLastDay);

import React from 'react';

function days() {
  return <div></div>;
}

export default days;
