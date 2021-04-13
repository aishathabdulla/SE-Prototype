import React, { Component } from "react";
import Calendar from '../components/calendar'
import Questions from './Questions'
import Articles from './Articles'

class Home extends Component {
  render() {
    return (
      <div className="main">
        <div className="grid">
          <div id="calendar-pos">
            <Calendar />
          </div>
          <div id="articles-pos">
            <Articles latestArticles="true"/>
          </div>
          <div id="question-pos">
            <Questions latestQuestion="true"/>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Home;
