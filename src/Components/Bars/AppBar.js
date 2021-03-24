import React from 'react';
import { useSelector } from 'react-redux';
import AuthBar from './AuthBar';
import UserBar from './UserBar';
import BarSelectors from '../../Redux/bar/bar-selectors';

const AppBar = () => {
  const logged = useSelector(state => BarSelectors.isLoggedIn(state));
  return <>{logged ? <UserBar /> : <AuthBar />}</>;
};

export default AppBar;
