import React from "react";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import FighterList from "./pages/FighterList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fighters" element={<FighterList /> } />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
