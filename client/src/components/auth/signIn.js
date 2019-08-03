import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
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
                    <Form.Group controlId='email' onChange={this.handleChange}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId='password' onChange={this.handleChange}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button  variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default SignIn;