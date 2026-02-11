import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ userRole, onLogout }) => {
    return (
        <nav className="navbar flex items-center justify-between p-4 bg-white shadow">
            <div className="navbar-brand text-xl font-bold text-blue-600 hover:text-blue-800">
                <Link to="/">CampusConnect</Link>
            </div>
            <ul className="navbar-menu flex space-x-4 text-gray-700">

                {userRole === '' && (
                    <>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>
                )}

                {userRole === 'student' && (
                    <>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/announcements-events">Announcements</Link></li>
                        <li><Link to="/request-support">Request Support</Link></li>
                        <li>
                        <button onClick={onLogout} className="logout-btn text-red-600 hover:text-red-800">
                            Logout
                        </button>
                </li>
                    </>
                )}

                {userRole === 'admin' && (
                    <>
                        <li><Link to="/admin-dashboard">Dashboard</Link></li>
                        <li><Link to="/admin-announcements">Post Announcements</Link></li>
                        <li><Link to="/admin-requests">View Requests</Link></li>
                        <li>
                        <button onClick={onLogout} className="logout-btn text-red-600 hover:text-red-800">
                            Logout
                        </button>
                </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;