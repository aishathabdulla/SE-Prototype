import React, { Component } from 'react';
import Article from './components/article';
import Feed from './components/feed';
import DirectMessage from './components/directmessage';
import Navbar from './components/navbar';
import Forum from './components/forum';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class App extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <div className = "container">
        <Navbar/>
          <div className = "row">
            <div className = "col-sm-4">
              <div id="Calendar"> <Calendar/> </div>
              <div id="Forum"> <Forum/></div>
            </div>
            <div className = "col-sm-8" id="News">
              <Feed/>
            </div>
          </div>
          <div className = "row">
            <div className = "col-sm-8"></div>
            <div className = "col-sm-4">
              <DirectMessage/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
