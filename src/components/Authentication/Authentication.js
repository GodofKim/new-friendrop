import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './Authentication.css';

const propTypes = {
  mode: PropTypes.bool,
  onLogin: PropTypes.func,
  onRegister: PropTypes.func
};

const defaultProps = {
  mode: true, /* true : login , false : register */
  onLogin: (id, pw) => { console.log("login function not defined"); },
  onRegister: (id, pw) => { console.log("register function not defined"); }
};

class Authentication extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password2: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleLogin() {
    let id = this.state.email;
    let pw = this.state.password;

    this.props.onLogin(id, pw).then(
      (success) => {
        if(!success){
          this.setState({
            password: ''
          });
        }
      }
    );
  }

  handleRegister() {
    let id = this.state.email;
    let pw = this.state.password;
    let pw2 = this.state.password2;

    this.props.onRegister(id, pw, pw2).then(
      (result) => {
        if(!result) {
          this.setState({
            username: '',
            password: '',
            password2: ''
          });
        }
      }
    );
  }

  handleKeyPress(e) {
    if(e.charCode === 13) {
      if(this.props.mode) {
        this.handleLogin();
      } else{
        this.handleRegister();
      }
    }
  }

  render() {
    const inputBoxes = (
      <div>
        <div className="input-field col s12 email">
          <label>Email</label>
          <input
            name="email"
            type="email"
            className="validate"
            onChange={this.handleChange}
            value={this.state.email}/>
        </div>
        <div className="input-field col s12">
          <label>Password</label>
          <input
            name="password"
            type="password"
            className="validate"
            onChange={this.handleChange}
            value={this.state.password}/>
        </div>
      </div>
    );

    const loginView = (
      <div>
        <div className="card-content">
          <div className="row">
            {inputBoxes}
            <a className="waves-effect waves-light btn" onClick={this.handleLogin}>SUBMIT</a>
          </div>
        </div>

        <div className="footer">
          <div className="card-content">
            <div className="right">
              New Here? <Link to="/signup">Create an account</Link>
            </div>
          </div>
        </div>
      </div>
    );

    const registerView = (
      <div className="card-content">
        <div className="row">
          {inputBoxes}
          <div className="input-field col s12">
            <label>Password Confirm</label>
            <input
              name="password2"
              type="password"
              className="validate"
              onChange={this.handleChange}
              value={this.state.password2}/>
          </div>
          <a className="waves-effect waves-light btn" onClick={this.handleRegister}>CREATE</a>
        </div>
      </div>
    );

    return(
      <div className="container auth">
        <Link className="logo" to="/">Friendrop</Link>
        <div className="card">
          <div className="header blue white-text center">
            <div className="card-content">{this.props.mode ? "Login" : "REGISTER"}</div>
          </div>
          {this.props.mode ? loginView : registerView }
        </div>
      </div>
    );
  }
}

Authentication.propTypes = propTypes;
Authentication.defaultProps = defaultProps;

export default Authentication;
