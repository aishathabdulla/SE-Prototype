import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Home from "../pages/Home";
import Questions from "../pages/Questions";
import News from "../pages/Articles";
import Calendar from "../pages/Calendar";
import UpdatePolicy from "../pages/UpdatePolicy";
import AskQuestion from "../pages/AskQuestion";
import UpdateDetails from "../pages/UpdateDetails";
import CreateArticle from "../pages/CreateArticle";
import Login from "../pages/Login";
import avatar from "../images/avatar.png";
import DirectMessage from "./directMessage";
import Policy from "../components/Policy";

class Router_c extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          "src": "/",
          "name": "Home",
          "component": <Home />
        },
        {
          "src": "/forum",
          "name": "Forum",
          "component": <Questions />
        },
        {
          "src": "/news",
          "name": "News",
          "component": <News />
        },
        {
          "src": "/calendar",
          "name": "Calendar",
          "component": <Calendar />
        }
      ]
    }
  }

  _handleDropDown() {
    document.getElementById("myDropdown").classList.toggle("showDropDown");
  }

  _handleLogOut() {
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("userType");
    localStorage.removeItem("firstname");
    localStorage.removeItem("surname");
    localStorage.removeItem("city");
    localStorage.removeItem("DoB");
    localStorage.removeItem("email");
    localStorage.removeItem("address");
    localStorage.removeItem("postcode");
    window.location.href = "http://localhost:8080/";
  }

  login() {
    const userType = localStorage.getItem("userType");
    const username = localStorage.getItem("username");

    if (userType == undefined) {
      return (<li>
        <NavLink activeClassName="active" className="right" exact to="/login">login</NavLink>
      </li>)
    } else {
      return (
        <li>
          <a href="#" className="right" onClick={this._handleDropDown.bind(this)}>
            <img className="avatar" src={avatar}></img>
            {username}
            <svg className="dropdownicon" version="1.1" x="0px" y="0px"
              width="10px" height="10px" viewBox="0 0 255 255">
                <polygon points="0,63.75 127.5,191.25 255,63.75"/>
            </svg>
          </a>
          <div id="myDropdown" className="dropdown-content">
            <NavLink exact to="/update-details">Update Details</NavLink>
            <a href="#" onClick={this._handleLogOut.bind(this)}>Logout</a>
          </div>
        </li>
      )
    }
  }

  render() {
    const activeDms = localStorage.getItem("activeDms");
    if (activeDms == undefined) {
      localStorage.setItem("activeDms", "zoe-jane");
    }
    const userType = localStorage.getItem("userType");
    const username = localStorage.getItem("username");

    if (!(userType == "standard" || userType == undefined)) {
      this.state.data.push({
        "src": "/policy-update",
        "name": "Update Policy",
        "component": <UpdatePolicy />
      })
    }

    if (username == undefined) {
      return (
        <Router>
          <nav id="nav">
            <ul>
              <li>
                <NavLink className="logo" exact to="/">FDM</NavLink>
              </li>
            </ul>
          </nav>
          <div className="centre">
            <Switch>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </div>
        </Router>
      )
    } else {
      return (
        <Router>
          <nav id="nav">
            <ul>
              <li>
                <NavLink className="logo" exact to="/">FDM</NavLink>
              </li>
              {this.state.data.map((nav, index) => {
                return (
                  <li key={index}>
                    <NavLink activeClassName="active" exact to={nav.src}>{nav.name}</NavLink>
                  </li>
                )
              })}
              {this.login()}
            </ul>
          </nav>
          <Policy />
          <div className="centre">
            <Switch>
              {this.state.data.map((nav, index) => {
                return (
                  <Route key={index} exact path={nav.src}>
                    {nav.component}
                  </Route>
                )
              })}
              <Route exact path="/ask-question">
                <AskQuestion />
              </Route>
              <Route exact path="/update-details">
                <UpdateDetails />
              </Route>
              <Route exact path="/create-article">
                <CreateArticle />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
            </Switch>
          </div>
          <DirectMessage />
        </Router>
      );
    }
  }
}

export default Router_c;
