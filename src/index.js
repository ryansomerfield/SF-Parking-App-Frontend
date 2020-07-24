import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";
import { saveToLocalStorage, loadFromLocalStorage } from "./localStorage";

const LoginTimeout = 10 * 60 * 1000;
const persistedState = loadFromLocalStorage();

const store = createStore(
  allReducers,
  //persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//TODO: add a timeoout for local storage to be cleared out.
store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
