import React, { Component } from "react";
import axios from 'axios';

class Policy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    }
  }

  componentDidMount() {
    if (window.location.href.includes("8080")) {
      const response = new Promise(async (resolve, reject) => {
        resolve(await axios.get("http://localhost:8080/api/getPolicy"));
      })
  
      response.then(res => {
        this.setState({
          data: res.data
        })        
      })
    }
  }

  render() {
    return (
      <div className="Container">
        <div className={this.state.data == "" ? "invisBlock" : "invisBlockExtra"}></div>
        <div className={this.state.data == "" ? "policyBanner hidden" : "policyBanner"}>
          <p>{this.state.data}</p>
        </div>
      </div>
    );
  }
}

export default Policy;