import { useState } from 'react';
import axios from 'axios';

import './Login.css';
import validateEmail from '../../utils/validateEmail.js';
import validatePassword from '../../utils/validatePassword';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);

    if (isValidEmail && isValidPassword) {
      const data = {
        email: email,
        password: password,
      };
      const postLogin = async () => {
        try {
          const res = await axios.post('http://localhost:3002/log-in', data, {
            withCredentials: true,
          });
        } catch (err) {
          setError('Invalid e-mail or password.');
        }
      };
      postLogin();
    }
  };
  const handlerEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handlerPassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };
  return (
    <div className="login-box">
      <p>{error}</p>
      <form className="login-form" onSubmit={(e) => handlerSubmit(e)}>
        <label htmlFor="email-login">Email:</label>
        <input
          type="email"
          name="login-email"
          id="login-email"
          value={email}
          onChange={(e) => handlerEmail(e)}
        />

        <label htmlFor="password-login">Password:</label>
        <input
          type="password"
          name="password-login"
          id="password-login"
          value={password}
          onChange={(e) => handlerPassword(e)}
        />
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};

export default Login;
