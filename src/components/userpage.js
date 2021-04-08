import React, { Component } from "react";
import { Col, Row, Form, Button } from 'react-bootstrap';
import './userpage.css';

class UserPage extends Component {
  state = {
    firstname: '',
    surname: '',
    dateOfBirth: '',
    email: '',
    address: '',
    postcode: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(
      {firstname: event.target.firstnameInput.value,
        surname: event.target.surnameInput.value,
        dateOfBirth: event.target.dobInput.value,
        email: event.target.emailInput.value,
        address: event.target.addressInput.value,
        postcode: event.target.postcodeInput.value,
      });
  }

  render() {
    return (
      <div className="bigFormDiv">
        <h2>Personal Details</h2>
        <hr class="solid"></hr>
        <div className="bigSubDiv">

          {/* Why don't we have the things we last typed and submitted be present in the text boxes when we come back to this page  */}

          

          <div className="newDetails">
            <Form onSubmit={this.handleSubmit}>
              <Form.Row>
                  <Form.Group as={Col} controlId="updateFirstName">
                    <Form.Label> First name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                      defaultValue={this.state.firstname}
                      name ="firstnameInput"
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="updateLastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Last name"
                      defaultValue={this.state.surname}
                      name ="surnameInput"
                    />
                  </Form.Group>
              </Form.Row>

              <Form.Group controlId="updateEmail">
                <Form.Label> Email </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="user@email.com"
                  name="emailInput"
                  required
                />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="updateAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Address"
                    name="addressInput"
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="updateCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    name="cityInput"
                    required
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="updatePostcode">
                  <Form.Label>Postcode</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="AB1 123"
                    name="postcodeInput"
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="updateDOB">
                  <Form.Label> Date of Birth</Form.Label>
                  <Form.Control
                    required
                    type="date"
                    placeholder="DD/MM/YYYY"
                    name="dobInput"
                  />
                </Form.Group>
              </Form.Row>

              <Button type="Confirm">Confirm</Button>
            

              <div className="currentDetails">
                <div className="firstName">First Name: {this.state.firstname}<p></p> </div>
                <div className="surname">Surname: {this.state.surname}<p></p></div>
                <div className="dob">Date Of Birth: {this.state.dateOfBirth}<p></p></div>
                <div className="personalEmail">Personal Email: {this.state.email}<p></p></div>
                <div className="address">Address: {this.state.address}<p></p></div>
                <div className="postcode">Postcode: {this.state.postcode}<p></p></div>
              </div>
              <br />

              <Button type="submit">Submit</Button>

              </Form>
          
          </div>

          
        </div>

        <hr class="solid"></hr>
      </div>
    );
  }
}

export default UserPage;
