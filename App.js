import React, { Component } from 'react';
import Article from './components/article';
import Feed from './components/feed';
import DirectMessage from './components/directmessage';
//import ReactCalendar from './components/calendar';
import Navbar from './components/navbar'

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
              <div> insert Calendar component</div>
              <div> insert Forum component</div>
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

export default App;
