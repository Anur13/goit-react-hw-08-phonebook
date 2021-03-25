import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../Redux/phonebook/phonebook-operations';
import styles from './RegistrationPage.module.css';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [name, SetName] = useState('');

  const emailHandler = event => SetEmail(event.currentTarget.value);
  const passwordHandler = event => SetPassword(event.currentTarget.value);
  const nameHandler = event => SetName(event.currentTarget.value);

  const submitHanler = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
  };
  return (
    <div>
      <form onSubmit={submitHanler}>
        <label>
          Введите имя
          <input className={styles.text} onChange={nameHandler} type="text" />
        </label>
        <label>
          Введите email
          <input className={styles.text} onChange={emailHandler} type="text" />
        </label>
        <label>
          Введите пароль
          <input
            className={styles.text}
            onChange={passwordHandler}
            type="text"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
