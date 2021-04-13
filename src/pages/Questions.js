import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import axios from 'axios';

class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        answered_Q: [
          {
            "question": "How are you",
            "answer": "good"
          },
          {
            "question": "How are you1",
            "answer": "good1"
          }
        ],
        Q: [{"question": "how are you"},{"question": "how are you"}]
      },
      title: ""
    }
    if (this.props.latestQuestion) {
      this.state.data.answered_Q = [this.state.data.answered_Q.pop()];
      this.state.title = <h2>latest Asked Questions</h2>
    }
  }

  componentDidMount() {
    if (window.location.href.includes("8080")) {
      const response = new Promise(async (resolve, reject) => {
        resolve(await axios.get("http://localhost:8080/api/getQuestions"));
      })
  
      response.then(res => {
        this.setState({
          data: res.data
        })
        if (this.props.latestQuestion) {
          console.log(res.data)
          this.state.data.answered_Q = [res.data.answered_Q.pop()]
          this.setState({
            title: <h2>latest Asked Questions</h2>
          });
        }
      })
    }
  }

  _answerQuestion(index) {
    document.getElementsByClassName("answerContainer")[index].classList.toggle("showAns");
    document.getElementsByClassName("hideThisOnClick")[index].classList.toggle("hideAnsQ");
  }

  _submitQuestion(q, index) {
    const answer = document.getElementsByClassName("answerBox")[index].value;
    axios.post("http://localhost:8080/api/questionAnswered", {
      question: q.question,
      answer: answer
    }).then((response) => {
      this.setState({
        data: response.data
      })
    })
  }

  _unansweredQuestions() {
    if (this.state.data.Q.length <= 0) {
      return (<p>Currently No Unanswered Questions</p>)
    } else {
      let concat = [];
      this.state.data.Q.map((q, index) => {
        concat.push(<div className="questionBox" key={index}><p>Q: {q.question}</p><button className="customButton answerQ hideThisOnClick" onClick={this._answerQuestion.bind(this, index)}>Answer Question</button><div className="answerContainer"><input className="answerBox" type="text"></input><button className="customButton answerQ moveRight" onClick={this._submitQuestion.bind(this, q, index)}>Submit</button></div></div>)
        if (index != this.state.data.Q.length-1) {
          concat.push(<hr></hr>)
        }
      });
      return concat;
    }
  }

  render() {
    return (
      <div className={this.props.latestQuestion ? "hmain" : "main"}>
        <h2 className={this.props.latestQuestion ? "hidden" : "shown"}>Unanswered Questions</h2>
        <div className={this.props.latestQuestion ? "hidden" : "shown"}>
          <div className="card">
            {this._unansweredQuestions()}
          </div>
        </div>
        <h2 className={this.props.latestQuestion ? "hidden" : "shown"}>Answered Questions</h2>
        <div id="questions" className="card">
          {this.state.title}
          {this.state.data.answered_Q.map((q, index) => {
            if (index > 0) {
              return (<div key={index}>
                <hr></hr>
                <p>Q: {q.question}</p>
                <p id="answer">Answer: {q.answer}</p>
              </div>)
            } else {
              return (<div key={index}>
                <p>Q: {q.question}</p>
                <p id="answer">Answer: {q.answer}</p>
              </div>)
            }
          })}
        </div>
        <div id="submitButton" className={this.props.latestQuestion ? "hidden" : "shown"}>
          <NavLink className="buttonStyling" exact to="/ask-question">Ask Question</NavLink>
        </div>
      </div>
    );
  }
}

export default Questions;