import React from "react";
import LoginPage from "./component/LoginPage";
import Card from "./component/card";
import MyNav from "./component/MyNav";
import Tab from "./component/Tab";

function App() {
  return (
    <div className="App">
      <MyNav />
      <LoginPage />
      <Tab />
      <Card />
    </div>
  );
}

export default App;
