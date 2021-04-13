import React, { Component } from "react";
import axios from 'axios';

class AskQuestion extends Component {
  constructor(props) {
    super(props);
  }

  _handleOnClick() {
    const title = document.getElementsByClassName("articleTitle")[0].value
    const description = document.getElementsByClassName("textAreaForm")[0].value
    axios.post("http://localhost:8080/api/addArticle", {
      title: title,
      description: description
    }).then((response) => {
      window.location.href = "http://localhost:8080/news"
    })
  }

  render() {
    return (
      <div id="askQuestion" className="main">
        <h2>Create Article</h2>
        <div className="card">
          <input placeholder="Article Title..." className="articleTitle" type="text"></input>
          <textarea placeholder="Article Description..." className="textAreaForm" rows="4" cols="50"></textarea>
          <div id="submitButton">
            <a className="buttonStyling" onClick={this._handleOnClick.bind(this)} href="#">Create Article</a>
          </div>
        </div>
      </div>
    );
  }
}

export default AskQuestion;