import React, { Component } from 'react';
import MessageList from './messagelist';
import SendMessage from './sendmessage';
//https://www.freecodecamp.org/news/how-to-build-a-react-js-chat-app-in-10-minutes-c9233794642b/

class DirectMessage extends Component {
  constructor() {
    super();
    this.state = {
      messages: [
        {senderId: "bobross", text: 'hello'},
        {senderId: "janedoe", text: 'hiya'}
      ]
    }
  }

  render() {
    return (
      <div className="dm">
        <h3>Direct Messages</h3>
        <MessageList messages={this.state.messages}/>
        <SendMessage/>
      </div>
    );
  }
}

export default DirectMessage;
