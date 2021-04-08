import React, { Component } from 'react';
import Article from './article';
import './feed.js'
//http://lutchobandeira.com/how-to-build-a-news-feed-in-reactjs-part-1/

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {title: "Article 1", content: 'This is my first post!'},
        {title: "Article 2", content: 'This is my second post!'}
      ]
    }
  }
  render() {
    const articles = this.state.articles.map((article, index) =>
      <Article key={index} value={article} />
    );
    return (
      <span className="card">
        <h3>News Feed</h3>
        {/* <hr class="solid"></hr> */}
        {articles}
      </span>
    );
  }
}

export default Feed;
