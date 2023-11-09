import { useState } from 'react';
import axios from 'axios';

import './Register.css';
import validateEmail from '../../utils/validateEmail.js';
import validatePassword from '../../utils/validatePassword.js';
import matchPasswords from '../../utils/matchPasswords.js';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [error, setError] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);
    const isMatchPasswords = matchPasswords(password, rePassword);
    console.log(password);

    if (isValidEmail) {
      setError('');
    } else {
      setEmail('Email is not entered correctly. Try again');
    }

    if (isValidPassword) {
      setError('');
    } else {
      setError('Password is not entered correctly. Try again.');
    }

    if (isMatchPasswords) {
      setError('');
    } else {
      setError('Incorrect passwords mapping. Try again.');
    }

    if (isValidEmail && isValidPassword && isMatchPasswords) {
      const data = {
        email: email,
        password: password,
        rePassword: rePassword,
      };

      const registeredData = async () => {
        const res = await axios.post('http://localhost:3002/register', data);
      };

      registeredData();
    } else {
      setError('Please, fill in the field correctly');
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
  const handlerRePassword = (e) => {
    const value = e.target.value;
    setRePassword(value);
  };
  return (
    <div className="register-box">
      <p>{error}</p>
      <form className="register-form" onSubmit={(e) => handlerSubmit(e)}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => handlerEmail(e)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => handlerPassword(e)}
        />
        <label htmlFor="rePassword">Confirm Password</label>
        <input
          type="password"
          name="rePassword"
          id="rePassword"
          onChange={(e) => handlerRePassword(e)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
