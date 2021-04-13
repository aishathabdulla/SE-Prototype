import React, { Component } from "react";
import axios from 'axios';

class AskQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          "label": "First Name",
          "id": "firstname",
          "placeHolder": "First Name...",
          "type": "text"
        },
        {
          "label": "Last Name",
          "id": "lastname",
          "placeHolder": "Last Name...",
          "type": "text"
        },
        {
          "label": "Email",
          "id": "email",
          "placeHolder": "user@email.com...",
          "type": "email"
        },
        {
          "label": "Address",
          "id": "address",
          "placeHolder": "Address..",
          "type": "text"
        },
        {
          "label": "City",
          "id": "city",
          "placeHolder": "City...",
          "type": "text"
        },
        {
          "label": "Postcode",
          "id": "postcode",
          "placeHolder": "AB1 123",
          "type": "text"
        },
        {
          "label": "Date of Birth",
          "id": "dob",
          "placeHolder": "",
          "type": "date"
        }
      ]
    }
  }

  _handleOnClick() {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const postcode = document.getElementById("postcode").value;
    const dob = document.getElementById("dob").value;

    const password = localStorage.getItem("password");
    const username = localStorage.getItem("username");
    const userType = localStorage.getItem("userType");

    localStorage.setItem("email", email);
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("surname", lastname);
    localStorage.setItem("DoB", dob);
    localStorage.setItem("city", city);
    localStorage.setItem("address", address);
    localStorage.setItem("postcode", postcode);

    axios.post("http://localhost:8080/api/update-details", {
      password: password,
      username: username,
      userType: userType,
      firstname: firstname,
      surname: lastname,
      email: email,
      address: address,
      city: city,
      postcode: postcode,
      dob: dob
    }).then((response) => {
      window.location.href = "http://localhost:8080/update-details"
    })
  }

  userDetails() {
    const firstname = localStorage.getItem("firstname");
    const surname = localStorage.getItem("surname");
    const DoB = localStorage.getItem("DoB");
    const email = localStorage.getItem("email");
    const address = localStorage.getItem("address");
    const postcode = localStorage.getItem("postcode");

    return (
      <div className="left">
        <p>First Name: {firstname}</p>
        <p>Surname: {surname}</p>
        <p>DoB: {DoB}</p>
        <p>Email: {email}</p>
        <p>Address: {address}</p>
        <p>Postcode: {postcode}</p>
      </div>
    )
  }

  render() {
    return (
      <div id="askQuestion" className="main">
        <h2>Personal Details</h2>
        <div className="card">
          <div className="card">
            {this.userDetails()}
          </div>
          <div className="PDgrid">
            {this.state.data.map((input, index) => {
              return (
                <div className={input.id}>
                  <label for={input.id}>{input.label}</label>
                  <input placeholder={input.placeHolder} id={input.id} className="articleTitle" type={input.type}></input>
                </div>
              )
            })}
          </div>
          <div id="submitButton">
            <a className="buttonStyling" onClick={this._handleOnClick.bind(this)} href="#">Update Details</a>
          </div>
        </div>
      </div>
    );
  }
}

export default AskQuestion;