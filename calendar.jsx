import { render } from '@testing-library/react';
import React, { useState } from 'react';
import Calendar from 'react-calendar';

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());
    const onChange = () => {
        setDate(date);
    }
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={date}
      />
    </div>
  );
}
render(<ReactCalendar />, document.querySelector("#root"))

