// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/student/dashboard';
import AnnouncementsEvents from './pages/student/announcements-events';
import RequestSupport from './pages/student/request-support';
import ServiceStatus from "./pages/student/service-status";
import Login from "./pages/login";
import Register from "./pages/register";


function App() {
  return (
    <Router>
      <div className="p-4 bg-gray-100 min-h-screen">
        {/* Simple Navigation for Testing */}
        <nav className="mb-6 space-x-4">
           <Link className="text-blue-600 hover:underline" to="/register">Register</Link>
           <Link className="text-blue-600 hover:underline" to="/login">Login</Link>
          <Link className="text-blue-600 hover:underline" to="/dashboard">Dashboard</Link>
          <Link className="text-blue-600 hover:underline" to="/announcements-events">Announcements & Events</Link>
          <Link className="text-blue-600 hover:underline" to="/request-support">Request Support</Link>
          <Link className="text-blue-600 hover:underline" to="/service-status">Service Status</Link>
          
         
        </nav>

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
