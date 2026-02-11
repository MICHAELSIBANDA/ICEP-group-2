// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/student/dashboard';
import AnnouncementsEvents from './pages/student/announcements-events';
import RequestSupport from './pages/student/request-support';
import ServiceStatus from "./pages/student/service-status";
import Login from "./pages/login";
import Register from "./pages/register";
import NavBar from './components/NavBar';



function App() {
  return (
    <Router>
      <div className="p-4 bg-gray-100 min-h-screen">
        {/* Simple Navigation for Testing */}
        <NavBar userRole="" onLogout={() => { localStorage.removeItem('token'); window.location.href = '/login'; }} />

        {/* Page Routes */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/announcements-events" element={<AnnouncementsEvents />} />
          <Route path="/request-support" element={<RequestSupport />} />
          <Route path="/service-status" element={<ServiceStatus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
