import React, { useState } from "react";
import { dateObj } from "./Date";
import Calendar from "react-calendar";

function MyApp() {
  const [value, onChange] = useState(getMountDate());

  function getMountDate(newDate: any, page = 0) {
    const doMonth = dateObj(
      new Date(newDate.year, newDate.month - 1 + page, 1)
    );
    const prevMonthLastDate = dateObj(
      new Date(doMonth.year, doMonth.month - 1, 0)
    );
    const startDate =
      prevMonthLastDate.day === 0
        ? prevMonthLastDate
        : prevMonthLastDate.day === 6
        ? doMonth
        : dateObj(
            new Date(doMonth.year, doMonth.month - 1, -prevMonthLastDate.day)
          );

    const monthDate = [];
    for (let i = 0; i < 42; i++) {
      monthDate.push(
        dateObj(
          new Date(startDate.year, startDate.month - 1, startDate.date + i)
        )
      );
    }
    const week1 = monthDate.slice(0, 7);
    const week2 = monthDate.slice(7, 14);
    const week3 = monthDate.slice(14, 21);
    const week4 = monthDate.slice(21, 28);
    const week5 = monthDate.slice(28, 35);
    const week6 = monthDate.slice(35);

    const week4LastDate = week4[week4.length - 1];
    const week5LastDate = week5[week5.length - 1];
    const lastDate = new Date(doMonth.year, doMonth.month, 0);
    const isLastWeek4 =
      week4LastDate.month !== doMonth.month ||
      !(week4LastDate.date < lastDate.getDate());
    const isLastWeek5 =
      week5LastDate.month !== doMonth.month ||
      !(week5LastDate.date < lastDate.getDate());
    const dateArr = [week1, week2, week3, week4];

    return {
      year: doMonth.year,
      month: doMonth.month,
      date: isLastWeek4
        ? dateArr
        : isLastWeek5
        ? [...dateArr, week5]
        : [...dateArr, week5, week6],
    };
  }

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default MyApp;
