import React, { Component } from "react";
import axios from 'axios';

class UpdatePolicy extends Component {
  constructor(props) {
    super(props);
  }

  _handleOnClick() {
    const policy = document.getElementsByClassName("textAreaForm")[0].value
    axios.post("http://localhost:8080/api/updatePolicy", {
      policy: policy
    }).then((response) => {
      window.location.href = "http://localhost:8080/"
    })
  }

  render() {
    return (
      <div id="policy" className="main">
        <h2>UpdatePolicy</h2>
        <div className="card">
          <textarea className="textAreaForm" rows="4" cols="50"></textarea>
          <div id="submitButton">
            <a className="buttonStyling" onClick={this._handleOnClick.bind(this)} href="#">Update</a>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdatePolicy;