import React, { Component } from "react";
import Calendar from '../components/calendar'
import axios from 'axios';

class Calendar_P extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          "date": "22 april 2021",
          "status": "pending",
          "name": "jane"
        }
      ]
    }
  }

  componentDidMount() {
    if (window.location.href.includes("8080")) {
      const username = localStorage.getItem("firstname").toLowerCase();
      const userType = localStorage.getItem("userType");
      if (userType == "standard") {
        const response = new Promise(async (resolve, reject) => {
          resolve(await axios.get(`http://localhost:8080/api/getUserRequestedHoliday?user=${username}`));
        })
    
        response.then(res => {
          this.setState({data: res.data});
        })
      } else {
        const response = new Promise(async (resolve, reject) => {
          resolve(await axios.get(`http://localhost:8080/api/getAllRequestedHolidays`));
        })
    
        response.then(res => {
          this.setState({data: res.data});
        })
      }
    }
  }

  _handleOnClick() {
    const date = document.getElementsByClassName("react-calendar__tile--rangeBothEnds")[0].textContent;
    const month = document.getElementsByClassName("react-calendar__navigation__label__labelText react-calendar__navigation__label__labelText--from")[0].textContent;
    const fullDate = `${date} ${month}`;
    const username = localStorage.getItem("firstname").toLowerCase();
    axios.post("http://localhost:8080/api/requestHoliday", {
      user: username,
      date: fullDate
    }).then((response) => {
      window.location.href = "http://localhost:8080/requestHoliday"
    })
  }

  titleHandler() {
    const userType = localStorage.getItem("userType")
    if (userType == "standard") {
      return (<h3>Holidays Requested</h3>)
    } else {
      return (<h3>Employee Requested Holidays</h3>)
    }
  }

  _handleAccept(holiday) {
    axios.post("http://localhost:8080/api/handleHoliday", {
      date: holiday.date,
      status: "accepted",
      name: holiday.name
    }).then((response) => {
      window.location.href = "http://localhost:8080/requestHoliday"
    })
  }

  _handleReject(holiday) {
    axios.post("http://localhost:8080/api/handleHoliday", {
      date: holiday.date,
      status: "rejected",
      name: holiday.name
    }).then((response) => {
      window.location.href = "http://localhost:8080/requestHoliday"
    })
  }

  render() {
    const userType = localStorage.getItem("userType");
    return (
      <div id="askQuestion" className={this.props.latestArticles ? "hmain" : "main"}>
        <div className={this.props.latestArticles ? "hcard" : "card relative"} id={this.props.latestArticles ? "" : "p-4"}>
          <Calendar />
          <div className="holidayContainer">
            <h3>Holidays Requested</h3>
            <div className={userType == "standard" ? "holidayGrid" : "holidayGrid bigger"}>
              {this.state.data.map((holiday, index) => {
                if (userType == "standard") {
                  return (
                    <div key={index}>
                      <p>{holiday.date}</p>
                      <p>status: <span className={holiday.status}>{holiday.status}</span></p>
                    </div>
                  )
                } else {
                  if (holiday.status == "pending") {
                    return (
                      <div key={index}>
                        <p>{holiday.date}</p>
                        <p>User: {holiday.name}</p>
                        <button className="customButton bAccept" onClick={this._handleAccept.bind(this, holiday)}>Accept</button>
                        <button className="customButton bReject" onClick={this._handleReject.bind(this, holiday)}>Reject</button>
                      </div>
                    )
                  }
                }
              })}
            </div>
          </div>
          <div id="submitButton">
            <a className="buttonStyling" onClick={this._handleOnClick.bind(this)} href="#">Request Day Off</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar_P;