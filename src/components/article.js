import React, { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <div className="article">
        <h5>{this.props.value.title}</h5>
        <p>{this.props.value.content}</p>
      </div>
    );
  }
}

export default Article;
