import React from "react";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Login";
import Footer from "./components/Footer";
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
          <Route path="/fighters" element={<FighterList />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
    
  );
};

export default App;
