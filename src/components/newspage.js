import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import Feed from './feed';
import './newspage.css';

class NewsPage extends Component {
  render() {
    return (
      <div>
        <h2>News Page</h2>
        <div className="content">
          <hr class="solid"></hr>
          <Feed/>
          <Button className="createArticleBtn" type="submit">Create article</Button>
          <hr class="solid"></hr>
        </div>
      </div>
    );
  }
}

export default NewsPage;
