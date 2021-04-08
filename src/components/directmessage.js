import React, { Component, Fragment} from 'react';
import { render } from "react-dom";
import MessageList from './messagelist';
import SendMessage from './sendmessage';
import './directmessage.css';
//https://www.freecodecamp.org/news/how-to-build-a-react-js-chat-app-in-10-minutes-c9233794642b/
//https://stackoverflow.com/questions/54991227/how-to-create-vertical-tab-using-reactjs-and-css

class DirectMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: -1,
      messages: [
        {id:"1", senderId: "bobross", text: 'hello'},
        {id:"2", senderId: "janedoe", text: 'hiya'},
        {id:"3", senderId: "johnsmith", text: 'hey'}
      ]
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChatOpen = this.handleChatOpen.bind(this);
    this.handleChatClose = this.handleChatClose.bind(this);
  }

  handleClick(currentTab) {
    this.setState({ currentTab });
  }

  handleChatOpen() {
    document.getElementById("dm").style.display = "block";
    document.getElementById("chatOpen").style.display = "none";
  }

  handleChatClose() {
    document.getElementById("dm").style.display = "none";
    document.getElementById("chatOpen").style.display = "block";
  }

//<MessageList messages={this.state.messages}/>
//<SendMessage/>
  render() {
    return (
      <React.Fragment>
        <button id="chatOpen" onClick={this.handleChatOpen}>Direct Messages</button>
        <div id="dm">
          <button id="chatClose" onClick={this.handleChatClose}>Direct Messages</button>
          <div className="tab">
            {this.state.messages.map((button, i) => (
              <button key={button.senderId} className="tablinks" onClick={() => this.handleClick(i)}>{button.senderId}</button>
            ))}
          </div>
          <div className="tabcontent">
            <div>
              {this.state.currentTab !== -1 &&
                <React.Fragment>
                  <h5 className="messages">{this.state.messages[this.state.currentTab].senderId}</h5>
                  <p className="messages">{this.state.messages[this.state.currentTab].text}</p>
                  <div className="sendMessage">
                    <SendMessage />
                  </div>
                </React.Fragment>
              }
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DirectMessage;
