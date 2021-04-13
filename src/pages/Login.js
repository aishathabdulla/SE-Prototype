import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  _handleOnClick() {
    const email = document.getElementsByClassName("email")[0].value
    const password = document.getElementsByClassName("password")[0].value
    axios.post("http://localhost:8080/api/login", {
      email: email,
      password: password
    }).then((response) => {
      console.log(response)
      if (response.data.username != undefined) {
        const data = response.data
        localStorage.setItem("username", data.username);
        localStorage.setItem("password", data.password);
        localStorage.setItem("userType", data.userType);
        localStorage.setItem("email", data.email);
        localStorage.setItem("firstname", data.firstname);
        localStorage.setItem("surname", data.surname);
        localStorage.setItem("DoB", data.dob);
        localStorage.setItem("city", data.city);
        localStorage.setItem("address", data.address);
        localStorage.setItem("postcode", data.postcode);
      }
      window.location.href = "http://localhost:8080/"
    })
  }

  render() {
    return (
      <div id='askQuestion' className="main">
        <h2 className="loginCard">Login</h2>
        <div className="card">
          <h2>FDM Employee Portal</h2>
          <input placeholder="Enter your email.." className="articleTitle email" type="email"></input>
          <input placeholder="Enter your password" className="articleTitle password" type="password"></input>
          <div id="submitButton">
            <a className="buttonStyling" onClick={this._handleOnClick.bind(this)} href="#">login</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;