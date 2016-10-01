import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Logout } from './components';
import {
  App, Login, Register,
  Signup, Home, DropList,
  LetterList, ContactList,
  Profile, List
 } from './containers';
import { AUTH_LOGIN_SUCCESS } from './actions/ActionTypes';
import RequireAuth from './containers/Authentication/require_auth';
import './index.css';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

// If we have token, consider the user to be logged in.
const token = localStorage.getItem('token');
if(token) {
  store.dispatch({type: AUTH_LOGIN_SUCCESS});
}

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="login" component={Login}/>
        <Route path="signup" component={Signup}/>
        <Route path="drop" component={RequireAuth(List)}/>
        <Route path="letter" component={RequireAuth(List)}/>
        <Route path="contact" component={RequireAuth(List)}/>
        <Route path="profile" component={RequireAuth(Profile)}/>
        <Route path="logout" component={Logout}/>
      </Route>
    </Router>
  </Provider>, rootElement);
