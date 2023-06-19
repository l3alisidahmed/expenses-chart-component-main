import "./App.css";
import React from "react";
import NavBalance from "./component/NavBalance/navBalance";
import CardBalance from "./component/Card Balance/CardBalance";

function App() {
  return (
    <div className="App">
      <NavBalance money = "921.48" />
      <CardBalance />
    </div>
  );
}

export default App;
