import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import { LoginPage } from './components/LoginPage';
import { RegisterPage } from './components/RegisterPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/logowanie" component={LoginPage} />
          <Route path="/rejestracja" component={RegisterPage} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
