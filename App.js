import React, { Component } from 'react';
import Article from './components/article';
import Feed from './components/feed';
import DirectMessage from './components/directmessage';
import Navbar from './components/navbar';
import Forum from './components/forum';
import Calendar from 'react-calendar'; 

//npm i react-calendar  
// ^^ run that in your terminal and then --> npm start
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
        <br/>
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

export default App;
