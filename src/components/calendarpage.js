import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendarpage.css';

class CalendarPage extends Component {
  render() {
    return (
      <div>
        <h2>Calendar Page</h2>
        <hr class="solid"></hr>
        <div className="calendarDiv">
          <Calendar/>
          <Button type="submit">Accept holiday</Button>
          <Button type="submit">Reject holiday</Button>
        </div>
        
        <hr class="solid"></hr>
      </div>
    );
  }
}

export default CalendarPage;
