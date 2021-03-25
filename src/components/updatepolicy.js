import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';

class UpdatePolicy extends Component {
  constructor() {
    super();
    this.state = {policy: 'previous policy text...'};
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("changed");
    this.setState({policy: event.target.changedPolicy.value});
    alert("Policy Updated");
    this.props.history.push({
     pathname: '/'});
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formUpdatePolicy">
              <Form.Label>Update Policy</Form.Label>
              <Form.Control as="textarea" name="changedPolicy" defaultValue={this.state.policy} rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
      </div>
    );
  }
}

export default UpdatePolicy;
