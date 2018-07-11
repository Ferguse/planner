import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import getDate from "./redux/reducers";
import {createStore} from "redux";

// components
import App from './Components/App';

// serviceWorker
import registerServiceWorker from './registerServiceWorker';


// const store = createStore(getDate);
const store = createStore(
  getDate,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
