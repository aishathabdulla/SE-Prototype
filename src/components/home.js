import React, { Component } from "react";
import Article from './article';
import Feed from './feed';
import DirectMessage from './directmessage';
import Forum from './forum';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div>
       <div className = "container">
          <div className = "row">
            <div className = "col-lg-4">
              <div> <Calendar/></div>
              <br/>
              <div> <Forum/> </div>
            </div>

          
            <div className = "col-lg-7">
              <br/>
              <Feed/>
            </div>

            
          </div>
          <div className = "row">
            <div className = "col-lg-4"><DirectMessage/></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
