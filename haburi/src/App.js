import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./component/MainPage";
import ErrorPage from "./component/ErrorPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/components" exact component={MainPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
