import React, { Component } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class calendar extends Component {
  render() {
    return (
      <div className="calCon">
        <Calendar/>
      </div>
    );
  }
}

export default calendar;