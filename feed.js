import React, { Component } from 'react';
import Article from './article';
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
      <div className="feed">
        <h3>News Feed</h3>
           {articles}
      </div>
    );
  }
}

export default Feed;
