import React, { Component } from 'react';

class Forum extends Component {
  render() {
    return (
      <div class="card text-center">
        <div class="card-body">
          <h5 class="card-title">Latest Answered Question</h5>
            <hr/>
            <div>
              <h6 class="card-subtitle mb-2">Q: How do I request a holiday?</h6>
              <p class="card-text text-muted"> Answer: Click on your calendar and select a date you would like to take a day off.</p>
              <a href="questions.js" class="card-link text-info">Ask a question</a>
              <a href="viewForum.js" class="card-link text-center text-info ">View Forum</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Forum;
