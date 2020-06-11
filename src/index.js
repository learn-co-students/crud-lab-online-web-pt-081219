import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageRestaurant from './reducers/manageRestaurant'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(manageRestaurant, window.__redux_devtools_extension__ && window.__redux_devtools_extension__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)
