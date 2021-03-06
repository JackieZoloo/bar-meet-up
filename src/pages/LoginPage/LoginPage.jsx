import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import userService from '../../utils/userService';
import './LoginPage.css'

class LoginPage extends Component {
  
  state = {
    email: '',
    pw: ''
  };

  handleChange = (e) => {
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      <div className="Login-page">
        <header>Log In</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
              <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
              <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
        </form>
        <h1>OR</h1>
        <NavLink exact to='/signup'className="signup">SIGNUP</NavLink>
      </div>
    );
  }
}

export default LoginPage;