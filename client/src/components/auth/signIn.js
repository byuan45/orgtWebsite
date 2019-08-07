import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import fire from '../firebase/firebase';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
            this.props.history.push('/seaKayaking');
        })
            .catch((error) => {
                this.setState({ error: error });
            });
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

                    <Button onClick={this.login} type="submit" variant="primary">Sign In</Button>
                </form>
            </Container>
        );
    }
}

export default SignIn;