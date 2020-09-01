import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Layout from './../../styles/layout.js';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import styles from './signup.module.css';
import CssBaseline from '@material-ui/core/CssBaseline';


const SignUpPage = () => (
  <div>

    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };

  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.LANDING);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  onChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };


  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <Layout>
      <CssBaseline>
      <img className={styles.blockdimage} src="/friends.jpg"></img>
      <div classname={styles.title}><h1>Sign Up</h1></div>
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />

        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
      </CssBaseline>
      </Layout>
    );
  }
}

// const SignInLink = () => (
//   <p>
//     Already have an account? <Route to={ROUTES.SIGN_IN}>Login</Route>
//   </p>
// );

const SignUpForm = compose(
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm };
