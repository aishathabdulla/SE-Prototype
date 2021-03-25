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
import Login from "./components/login";
import './App.css';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
//run this command to install react router --> npm i react-router-dom --save

class App extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <HashRouter>
        <div>
          <header>
          {/* <h1>FDM</h1> */}
          <ul>
            <li className="navlogo"><h1>FDM</h1></li>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/forumpage">Forum</NavLink></li>
            <li><NavLink to="/newspage">News</NavLink></li>
            <li><NavLink to="/calendarpage">Calendar</NavLink></li>
            <li><NavLink to="/updatepolicypage">Update Policy</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li className="dropdown"><DropdownButton id="dropdown-basic-button" variant="secondary" title="Jane Doe">
                <Dropdown.Item href="#/action-1">Update Details</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="logout.js">Logout</Dropdown.Item>
              </DropdownButton>
            </li>
              <img src="pic.png" alt="swimmer" height="50" width="45"style={{}}></img>
           
            {/*<li><NavLink to="/updatepolicypage">Update Policy</NavLink></li>*/}
          </ul>
          </header>
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
