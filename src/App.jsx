import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import SemesterPage from "./components/SemesterPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="/semester/:id" element={<SemesterPage />} /> {/* ✅ dynamic route */}
      </Routes>
       
    </BrowserRouter>
     
  );
}

export default App;
