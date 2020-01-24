import React from 'react';
import './styles.css';
import Form from './Form';
import LeftSide from './LeftSide';
import { HashRouter, Switch, Route } from 'react-router-dom';
import PasswordRecovery from './PasswordRecovery';
import LoggedIn from './LoggedIn';

function App() {
  return (
    <article className="register-form">
      <LeftSide />
      <HashRouter>
        <Switch>
          <Route path="/" exact>
            <Form />
          </Route>
          <Route path="/forgot/password" exact>
            <PasswordRecovery />
          </Route>
          <Route path="/hi">
            <LoggedIn />
          </Route>
        </Switch>
      </HashRouter>
    </article>
  );
}




export default App;
