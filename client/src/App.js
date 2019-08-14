import React, { Component } from "react";
import NavBar from "./components/navBar";
import fire from './components/firebase/firebase';




class App extends Component {
  state = {
    authenticated: false,
  };
  componentDidMount() {
    console.log(this.state.authenticated);
    fire.auth().onAuthStateChanged((authenticated) => {
      authenticated
        ? this.setState(() => ({
          authenticated: true,
        }))
        : this.setState(() => ({
          authenticated: false,
        }));
      console.log(this.state.authenticated);
    });
  }
  render() {

    return (
      <NavBar authenticated={this.state.authenticated} />

    );
  }
}

export default App;