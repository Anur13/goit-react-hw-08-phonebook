import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/phonebook/phonebook-operations';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const dispatch = useDispatch();
  const handleEmail = event => {
    SetEmail(event.currentTarget.value);
  };
  const handlePassword = event => {
    SetPassword(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          email
          <input className={styles.input} onChange={handleEmail} type="text" />
        </label>
        <label>
          Password
          <input
            className={styles.input}
            onChange={handlePassword}
            type="text"
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginPage;
