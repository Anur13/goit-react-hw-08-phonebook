import React, { lazy, Suspense, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { Switch } from 'react-router-dom';
import PublicRoute from './Components/Routes/PublicRoute';
import PrivateRoute from './Components/Routes/PrivateRoute';
import AppBar from './Components/Bars/AppBar';
import { getCurrentUser } from './Redux/phonebook/phonebook-operations';
import selectors from '../src/Redux/phonebook/phonebook-selectors';
import routes from './routes';

const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('./Pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() =>
  import('./Pages/RegistrationPage/RegistrationPage'),
);
const PhoneBookContainer = lazy(() =>
  import('./Components/PhoneBookContainer/PhoneBookContainer.js'),
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);
  const loader = useSelector(state => selectors.getLoading(state));
  console.log(loader);
  return (
    <div className="container">
      <Suspense fallback={<p>loading...</p>}>
        <AppBar />
        <Switch>
          <PublicRoute
            exact
            path={routes.home}
            redirect={routes.contactsPage}
            restricted
            component={HomePage}
          />
          <PublicRoute
            path={routes.loginPage}
            redirect={routes.contactsPage}
            restricted
            component={LoginPage}
          />
          <PublicRoute
            path={routes.registrationPage}
            redirect={routes.contactsPage}
            restricted
            component={RegistrationPage}
          />
          <PrivateRoute
            path={routes.contactsPage}
            component={PhoneBookContainer}
            redirect="/login"
          />
        </Switch>
        <div className="container">
          {loader && (
            <Loader
              color="#00BFFF"
              height={150}
              width={150}
              type="TailSpin"
              style={{ textAlign: 'center' }}
            />
          )}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
