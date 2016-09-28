import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import {
  App, Login, Register,
  Signup, Home, DropList,
  LetterList, ContactList,
  Profile
 } from './containers';
import './index.css';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="login" component={Login}/>
        <Route path="signup" component={Signup}/>
        <Route path="todaydrop" component={DropList}/>
        <Route path="letter" component={LetterList}/>
        <Route path="contact" component={ContactList}/>
        <Route path="profile" component={Profile}/>
      </Route>
    </Router>
  </Provider>, rootElement);
