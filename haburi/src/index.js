import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import LoginPage from "./component/login";
import Card from "./component/card";
import MyNav from "./component/Navbar";
import Tab from "./component/Tab";
import Pagenation from "./component/Pagenation";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <MyNav />
    <LoginPage />
    <Tab />
    <Card />
    <Pagenation />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
