import React, { Component } from "react";
import Article from './article';
import Feed from './feed';
import DirectMessage from './directmessage';
import Navbar from './navbar';
import Forum from './forum';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class Home extends Component {
  render() {
    return (
      <div>
       <div className = "container">
          <div className = "row">
            <div className = "col-sm-4">
              <div> <Calendar/></div>
              <br/>
              <div> <Forum/> </div>
            </div>
            <div className = "col-sm-8">
              <Feed/>
            </div>
          </div>
          <div className = "row">
            <div className = "col-sm-8"></div>
            <div className = "col-sm-4"><DirectMessage/></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
