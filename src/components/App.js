import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Layer from './Layer';
import Auth from './Auth/Auth';
import '../style.scss';


const history = createBrowserHistory();

class App extends Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path='/login' component={Auth} />
          <Route path='/' component={Layer} />
        </Switch>
      </Router>
    )
  }
}

export default App;