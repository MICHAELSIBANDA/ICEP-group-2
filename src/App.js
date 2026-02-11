// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Admin/Navbar';
import Home from './Landing/Home';
import Login from './Login/adminLogin';
import Admin from './Admin/Admin.js';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page - with Navbar */}
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
          </>
        } />
        
        {/* Login Page - standalone (no navbar) */}
        <Route path="/login" element={<Login />} />
        
        {/* Admin Dashboard - standalone (has its own navbar) */}
        <Route path="/admin" element={<Admin />} /> *
        
        {/* Fallback route - redirect to home if route not found */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;