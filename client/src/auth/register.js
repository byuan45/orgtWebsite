import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group onChange={this.handleChange} controlId="firstName" >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group onChange={this.handleChange} controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control />
                    </Form.Group>
                    <Form.Group onChange={this.handleChange} controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group onChange={this.handleChange} controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Register;