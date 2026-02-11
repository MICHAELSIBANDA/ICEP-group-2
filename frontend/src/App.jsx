import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Support from './pages/Support';
import Feedback from './pages/Feedback';
import AdminDashboard from './pages/adminDashboard';
import Announcements from './pages/Announcements';
import AdminAnnouncements from './pages/adminAnnouncements';
import AdminStudents from "./pages/adminStudents";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/support" element={<Support />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/announcements" element={<Announcements />} />
      <Route path="/admin-announcements" element={<AdminAnnouncements />} />
      <Route path="/admin-students" element={<AdminStudents />} />
      
    </Routes>
  );
}

export default App;
