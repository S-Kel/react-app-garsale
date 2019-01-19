import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function LoginForm(props) {
  const { submit } = props
  return (
    <Fragment>
      <h1>Login</h1>
      <form onSubmit={submit}>
        <label htmlFor='email'>Email: <input type='email' name='email' /></label><br />
        <label htmlFor='password'>Password: <input type='password' name='password' /></label><br />
        <button type='submit'>Login</button>
      </form>
    </Fragment>
  )
};

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};