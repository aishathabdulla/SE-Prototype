import React, { useState } from 'react';
import {render} from 'react-dom';
import Calendar from 'react-calendar';
import { Button } from 'react-bootstrap';
import 'react-calendar/dist/calendar.css';
import './calendar.css';

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());
  const onChange = () => {
    setDate(date);
  }
    return (
      <div>
        <Calendar onChange={onChange} value={date}/>
      </div>
    )
}

render(<ReactCalendar/>, document.querySelector("#root"));
