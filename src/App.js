import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Header, Login, BoardList } from './containers';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
            <Switch>
              <Route exact path="/" component={BoardList}/>
              <Route path="/Login" component={Login}/>
              <Route path="/BoardList" component={BoardList}/>
              <Route component={BoardList}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
