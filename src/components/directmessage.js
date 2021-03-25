import React, { Component, Fragment} from 'react';
import { render } from "react-dom";
import MessageList from './messagelist';
import SendMessage from './sendmessage';
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
  }

  handleClick(currentTab) {
    this.setState({ currentTab });
  }

//<MessageList messages={this.state.messages}/>
//<SendMessage/>
  render() {
    return (
      <div className="dm">
        <h3>Direct Messages</h3>
        <div className="tab">
          {this.state.messages.map((button, i) => (
            <button key={button.senderId} className="tablinks" onClick={() => this.handleClick(i)}>{button.senderId}</button>
            )
          )
          }
        </div>
        <div className="tabcontent">
          {this.state.currentTab !== -1 &&
            <React.Fragment>
              <h5>{this.state.messages[this.state.currentTab].senderId}</h5>
              <p>{this.state.messages[this.state.currentTab].text}</p>
              <SendMessage/>
            </React.Fragment>
          }
        </div>
      </div>
    );
  }
}

export default DirectMessage;
