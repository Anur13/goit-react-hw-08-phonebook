import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AuthBar.module.css';
import routes from '../../routes';

const AuthBar = () => {
  return (
    <div className={styles.cont}>
      <Link to={routes.loginPage}> Login</Link>
      <Link className={styles.register} to={routes.registrationPage}>
        Register
      </Link>
    </div>
  );
};

export default AuthBar;
