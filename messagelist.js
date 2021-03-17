import React, { Component } from 'react';

class MessageList extends Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.messages.map(message => {
          return (
            <li className="list-group-item" key={message.id}>
              <div>
                {message.senderId}
              </div>
              <div>
                {message.text}
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default MessageList;
