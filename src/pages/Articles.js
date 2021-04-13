import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import axios from 'axios';

class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          "title": "Reached 1 million people",
          "description": "long ass description"
        },
        {
          "title": "Reached 140 million people",
          "description": "long ass description"
        },
        {
          "title": "Reached 13 million people",
          "description": "long ass description"
        },
        {
          "title": "Reached 110 million people",
          "description": "long ass description"
        }
      ],
      title: ""
    }
    if (this.props.latestArticles) {
      this.state.data = this.state.data.slice(-3);
      this.state.title = <h2>Latest News Articles</h2>
    }
  }

  componentDidMount() {
    if (window.location.href.includes("8080")) {
      const response = new Promise(async (resolve, reject) => {
        resolve(await axios.get("http://localhost:8080/api/getArticles"));
      })
  
      response.then(res => {
        if (this.props.latestArticles) {
          this.setState({
            data: res.data.slice(-3),
            title: <h2>Latest News Articles</h2>
          });
        } else {
          this.setState({
            data: res.data
          });
        }
      })
    }
  }

  render() {
    return (
      <div className={this.props.latestArticles ? "hmain" : "main"}>
        <h2 className={this.props.latestArticles ? "hidden" : "shown"}>News Article Page</h2>
        <div className="card" id={this.props.latestArticles ? "" : "p-4"}>
          {this.state.title}
          {this.state.data.map((a, index) => {
            return (<div className="article" key={index}>
              <h3>{a.title}</h3>
              <p>{a.description}</p>
            </div>)
          })}
        </div>
        <div id="submitButton" className={this.props.latestArticles ? "hidden" : "shown"}>
          <NavLink className="buttonStyling" exact to="/create-article">Create Article</NavLink>
        </div>
      </div>
    );
  }
}

export default Articles;