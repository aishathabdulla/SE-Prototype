import React, { Component } from "react";
import axios from 'axios';

class AskQuestion extends Component {
  constructor(props) {
    super(props);
  }

  _handleOnClick() {
    const question = document.getElementsByClassName("textAreaForm")[0].value
    axios.post("http://localhost:8080/api/addQuestion", {
      q: question
    }).then((response) => {
      window.location.href = "http://localhost:8080/forum";
    })
  }

  render() {
    return (
      <div id="askQuestion" className="main">
        <h2>Ask Question</h2>
        <div className="card">
          <textarea placeholder="Enter your question..." className="textAreaForm" rows="4" cols="50"></textarea>
          <div id="submitButton">
            <a className="buttonStyling" onClick={this._handleOnClick.bind(this)} href="#">Ask</a>
          </div>
        </div>
      </div>
    );
  }
}

export default AskQuestion;