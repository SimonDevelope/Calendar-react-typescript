export function dateObj(newDate: Date) {
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const date = newDate.getDate();
  const day = newDate.getDay();
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  const second = newDate.getSeconds();

  return { year, month, date, day, hours, minutes, second };
}
