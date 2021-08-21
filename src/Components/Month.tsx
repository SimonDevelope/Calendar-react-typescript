import React from 'react';
import '../Styles/month.scss';

function month() {
  const NAME_OF_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  console.log(NAME_OF_DAYS[0], NAME_OF_DAYS[1]);
  return (
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
      <div className="calendar-number-part"></div>
    </div>
  );
}

export default month;
