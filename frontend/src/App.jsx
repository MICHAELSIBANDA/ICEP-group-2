import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import RequestSupport from "./pages/RequestSupport";
import Announcements from "./pages/Announcements";
import TrackRequests from "./pages/TrackRequests";
import Feedback from "./pages/Feedback";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/request-support" element={<RequestSupport />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/track-requests" element={<TrackRequests />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;
