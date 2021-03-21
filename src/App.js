import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./components/home";
import ForumPage from "./components/forumpage";
import NewsPage from "./components/newspage";
import CalendarPage from "./components/calendarpage";

class App extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <HashRouter>
        <div>
          <h1>FDM</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/forumpage">Forum</NavLink></li>
            <li><NavLink to="/newspage">News</NavLink></li>
            <li><NavLink to="/calendarpage">Calendar</NavLink></li>
            {/*<li><NavLink to="/updatepolicypage">Update Policy</NavLink></li>*/}
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/forumpage" component={ForumPage}/>
            <Route path="/newspage" component={NewsPage}/>
            <Route path="/calendarpage" component={CalendarPage}/>
            {/*<Route path="/updatepolicypage" component={Update Policy}/>*/}
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
