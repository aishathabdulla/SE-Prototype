import React, { Component } from "react";
import axios from 'axios';
import avatar from "../images/avatar.png";

class DirectMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          "message": "hi",
          "author": "zoe",
          "datetime": "2009-01-05 22:14:39"
        },
        {
          "message": "hi",
          "author": "jane",
          "datetime": "2009-01-05 22:15:39"
        }
      ],
      friendList: ["jane"]
    }
  }

  componentDidMount() {
    if (window.location.href.includes("8080")) {
      const currentDMS = localStorage.getItem("activeDms");
      const response = new Promise(async (resolve, reject) => {
        resolve(await axios.get(`http://localhost:8080/api/getChat?currentDMS=${currentDMS}`));
      })
      this.setState({
        friendList: [`${currentDMS.split("-")[1]}`]
      })

      const username = localStorage.getItem("firstname");
      if (currentDMS.split("-")[0] != username.toLowerCase()) {
        this.setState({
          friendList: [`${currentDMS.split("-")[0]}`]
        })
        localStorage.setItem("activeDms", (`${username}-${currentDMS.split("-")[0]}`).toLowerCase());
      }

      
  
      response.then(res => {
        console.log(res.data);
        this.setState({
          data: res.data
        })
      })
    }
  }

  _handleDMS() {
    document.getElementsByClassName("chat")[0].classList.toggle("showContentAfter");
    document.getElementById("dms").classList.toggle("contentGoUp");
    document.getElementById("moveButton").classList.toggle("goUp");
    document.getElementsByClassName("friendsList")[0].classList.remove("display");
    document.getElementsByClassName("buttonsvg")[0].classList.remove("rotate");
  }

  openFriendList() {
    document.getElementsByClassName("friendsList")[0].classList.toggle("display");
    document.getElementsByClassName("buttonsvg")[0].classList.toggle("rotate");
  }

  displayFriendList() {
    return (
      <div className="friendGrid">
        {this.state.friendList.map((friend, index) => {
          const currentFriend = localStorage.getItem("activeDms").split("-")[1];
          <div key={index} className={currentFriend == friend ? "activeFriend" : ""}>
            <img className="friendListAvatar" src={avatar}></img>
            <p>{friend}</p>
          </div>
        })}
      </div>
    )
  }

  _handleFriendListSwap(friendName) {
    const username = localStorage.getItem("firstname")
    localStorage.setItem("activeDms", `${username}-${friendName}`);
  }

  sendMessage() {
    const message = document.getElementsByClassName("messageContent")[0].value;
    const time = new Date();
    const timedate = `${time.getHours()}:${time.getMinutes()}`;
    const author = localStorage.getItem("firstname");
    const sender = localStorage.getItem("activeDms").split("-")[1]
    axios.post("http://localhost:8080/api/sendMessage", {
      messageTO: sender,
      author: author,
      timedate: timedate,
      message: message
    }).then((response) => {
      console.log("=", response)
      this.setState({
        data: response.data
      })
    })
    document.getElementsByClassName("messageContent")[0].value = "";
  }

  render() {
    return (
      <div className="DMS">
        <button id="moveButton" onClick={this._handleDMS.bind(this)} className="directMessage">Direct Messages</button>
        <div id="dms" className="dms-content">
          <div className="openFriendList">
            <button className="friendButton" onClick={this.openFriendList.bind(this)}><svg className="buttonsvg dropdownicon" version="1.1" x="0px" y="0px"
              width="10px" height="10px" viewBox="0 0 255 255">
                <polygon points="0,63.75 127.5,191.25 255,63.75"/>
            </svg></button>
            <p></p>
          </div>
          <div className="friendsList">
            <div className="friendGrid">
              {this.state.friendList.map((friend, index) => {
                const currentFriend = localStorage.getItem("activeDms").split("-")[1];
                return (<div onClick={this._handleFriendListSwap.bind(this, friend)} key={index} className={currentFriend == friend ? "activeFriend" : ""}>
                  <img className="friendListAvatar" src={avatar}></img>
                  <p>{friend}</p>
                </div>)
              })}
            </div>
          </div>
          <div className="chat">
            <div className="messageList">
              {this.state.data.map((message, index) => {
                const username = localStorage.getItem("firstname");
                return(
                  <div key={index} className={username.toLowerCase() == message.author ? "message MyMessage" : "message"}>
                    <p>{message.message}</p>
                  </div>
                )
              })}
            </div>
            <div className="sendMessage">
              <input className="messageContent" type="text"></input>
              <button onClick={this.sendMessage.bind(this)}>Send</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DirectMessage;