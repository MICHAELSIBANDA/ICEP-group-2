import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ userRole, onLogout }) => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">CampusConnect</Link>
            </div>

            <ul className="navbar-menu">
                {userRole === 'student' && (
                    <>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/announcements">Announcements</Link></li>
                        <li><Link to="/request-support">Request Support</Link></li>
                    </>
                )}

                {userRole === 'admin' && (
                    <>
                        <li><Link to="/admin-dashboard">Dashboard</Link></li>
                        <li><Link to="/admin-announcements">Post Announcements</Link></li>
                        <li><Link to="/admin-requests">View Requests</Link></li>
                    </>
                )}

                <li>
                    <button onClick={onLogout} className="logout-btn">
                        Logout
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;