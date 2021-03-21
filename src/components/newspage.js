import React, { Component } from "react";
import Feed from './feed';

class NewsPage extends Component {
  render() {
    return (
      <div>
        <h2>News Page</h2>
        <Feed/>
      </div>
    );
  }
}

export default NewsPage;
