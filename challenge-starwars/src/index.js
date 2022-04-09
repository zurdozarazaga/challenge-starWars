import React from 'react';
import './index.css';
import App from './container/App';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import characterReducer from './reducers/characterReducer';

const store = createStore( (characterReducer),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

