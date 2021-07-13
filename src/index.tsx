import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './store';
import App from './components/App';
import rootSaga from './store/saga';
import './i18n';

const devTools = window?.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(saga),
    devTools,
  ),
);
saga.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider >,
  document.getElementById('root'),
);
