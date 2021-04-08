import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap';
import './updatepolicy.css';

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
          <Form.Label><h2>Update Policy</h2></Form.Label>

              <hr class="solid" className="policyBorder"></hr>
              <div className="updatePolicyContent">

                <Form.Group controlId="formUpdatePolicy">
                <div className="textBox">
                  <Form.Control as="textarea" name="changedPolicy" defaultValue={this.state.policy} rows={3} />
                </div>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                
              </div>
              <hr class="solid" className="policyBorder"></hr>
        </Form>
      </div>
    );
  }
}

export default UpdatePolicy;
