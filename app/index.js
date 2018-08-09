import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import App from './app';

const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(rootReducer),
  {},
  compose(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App history={history} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
