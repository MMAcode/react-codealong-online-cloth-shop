import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import store from './redux/store';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store'

import './index.css';
import App from './App';



ReactDOM.render(
  <Provider store={store}>
    {/* <BrowserRouter basename="https://MMAcode.github.io/react-codealong-online-cloth-shop"> */}
    <BrowserRouter basename="react-codealong-online-cloth-shop">
      {/* <BrowserRouter> */}
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

