import React, { Component } from 'react';

class SendMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({message: event.target.value});
  }

  handleSubmit(event) {
    alert('A message was sent: ' + this.state.message);
    event.preventDefault();
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div class="form-group">
          <input
            onChange={this.handleChange}
            value={this.state.message}
            placeholder="message.."
            type="text"
            className="form-control" 
            required 
          />
          <input type="submit" value="Send" />
        </div>
      </form>
    )
  }
}

export default SendMessage;
