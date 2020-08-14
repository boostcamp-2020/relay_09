import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Pagenation from "./component/Pagenation";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
