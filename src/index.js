import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './index.css';
import Machines from "./components/Machines"
import Login from './pages/Login/Login';
import ProtectedRoute from "./components/ProtectedRoute";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <div className="root">
      <div className="app">
        <Router>
          <Switch>
            <Route path="/login" component={Login}/>
            <ProtectedRoute path="/" redirectTo="/login" component={Machines}/>
          </Switch>
        </Router>
        </div>
    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
