import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import fire from '../firebase/firebase';
import { withRouter } from 'react-router-dom';



class Register extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }



    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).then((u) => { console.log(u) })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {

        return (
            <Container>
                <form>
                    <Form.Group controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={this.state.email} onChange={this.handleChange} required name="email" type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={this.state.password} onChange={this.handleChange} required type="password" name="password" placeholder="Password" />
                    </Form.Group>

                    <Button onClick={this.signup} type="submit" variant="primary">Signup</Button>
                </form>
            </Container>
        );
    }
}


export default withRouter(Register);
