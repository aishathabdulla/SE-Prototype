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
import UserPage from "./components/userpage";
import UpdatePolicy from "./components/updatepolicy";
import Login from "./components/login";
import './App.css';
import { Dropdown, DropdownButton } from 'react-bootstrap';

//run this command to install react router --> npm i react-router-dom --save
//run this command to install bootstrap --> npm install react-bootstrap bootstrap
//run this command to install react-calendar --> npm i react-calendar 

class App extends Component{

  render(){
    return (
      <HashRouter>
        <div>
          <header>
          <ul className="header">
            <li className="navlogo"><h1>FDM</h1></li>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/forumpage">Forum</NavLink></li>
            <li><NavLink to="/newspage">News</NavLink></li>
            <li><NavLink to="/calendarpage">Calendar</NavLink></li>
            <li><NavLink to="/updatepolicy">Update Policy</NavLink></li>
            <li className="dropdown"><DropdownButton id="dropdown-basic-button" variant="secondary" title="FDM USER">
              <Dropdown.Item><NavLink to="/userpage">Update Details</NavLink></Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item><NavLink to="/login">Login</NavLink></Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item><NavLink to="/">Logout</NavLink></Dropdown.Item>
              </DropdownButton>
            </li>
          </ul>
        </header>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/forumpage" component={ForumPage}/>
            <Route path="/newspage" component={NewsPage}/>
            <Route path="/calendarpage" component={CalendarPage}/>
            <Route path="/updatepolicy" component={UpdatePolicy}/>
            <Route path="/userpage" component={UserPage}/>
            <Route path="/login" component={Login}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
