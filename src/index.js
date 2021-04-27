import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Redux/Reducer/index";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { Router } from "react-router-dom";
import history from "./history";
const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <React.Fragment>
    {/* provider to connect global state */}
    <Provider store={store}>
      {/* router with config browser history to redirect function */}
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
