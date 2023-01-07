import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoutonConnectEnedis from "./components/BoutonConnectEnedis";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Logo from "./components/Logo"

var isLoggedIn = true;
var isRegistered = true;

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <div className="App">

        <Nav />
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <Logo /><h1 className="App-title">Portail de connexion</h1>
          {
            isLoggedIn === false ?
              <Login isRegistered={isRegistered} /> : null
          }
          {
            isLoggedIn === true ?
              <BoutonConnectEnedis  /> : null
          }
      
        </header>
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;