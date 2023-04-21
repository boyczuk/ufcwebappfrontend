import React from "react";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Home />
    </div>
  );
};

export default App;
