import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from './App';

// REDUX
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/Reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    // window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
  )
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);