import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../firebase';

const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    error: null,
};

const SignUpPage = () => (
    <div>
        <h1>SignUp</h1>
        <SignUpForm />
    </div>
);


class Register extends Component {



    constructor(props) {
        super(props);
        this.state = {
            ...INITIAL_STATE
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = event => {
        const { firstName, lastName, email, password } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();
    };

    render() {
        const {
            email,
            password,
            firstName,
            lastName,
            error,
        } = this.state;
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group value={firstName} onChange={this.handleChange} controlId="firstName" >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control required />
                    </Form.Group>
                    <Form.Group value={lastName} onChange={this.handleChange} controlId="lastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control required />
                    </Form.Group>
                    <Form.Group value={email} onChange={this.handleChange} controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group value={password} onChange={this.handleChange} controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    {error && <p>{error.message}</p>}
                </Form>
            </Container>
        );
    }
}

const SignUpForm = withRouter(withFirebase(Register));

export default SignUpPage;
export { SignUpForm };