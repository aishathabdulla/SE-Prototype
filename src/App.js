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
import Logo from "./images/test.png"
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Logo2 from "./images/profilepic.png"

class App extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <Navbar className="nav" bg="light" expand="md">
            <Navbar.Brand href="#/"><img class="Logo"src={Logo} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#/">Home</Nav.Link>
                <Nav.Link href="#forumpage">Forum</Nav.Link>
                <Nav.Link href="#newspage">News</Nav.Link>
                <Nav.Link href="#calendarpage">Calendar</Nav.Link>
                <Nav.Link href="#updatepolicy">Update Policy</Nav.Link>
              </Nav>
              <div className="icon">
                <img src={Logo2} />
                <NavDropdown className="mr-sm- justify-content-end" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#userpage">Update Details</NavDropdown.Item>
                  <NavDropdown.Item href="#login">Login</NavDropdown.Item>
                  <NavDropdown.Item href="#/">Logout</NavDropdown.Item>
                </NavDropdown>
              </div>
            </Navbar.Collapse>
          </Navbar>

          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/forumpage" component={ForumPage} />
            <Route path="/newspage" component={NewsPage} />
            <Route path="/calendarpage" component={CalendarPage} />
            <Route path="/updatepolicy" component={UpdatePolicy} />
            <Route path="/userpage" component={UserPage} />
            <Route path="/login" component={Login} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
