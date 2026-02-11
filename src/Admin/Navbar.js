// Navbar.jsx (updated with React Router links)
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <style jsx>{`
        /* ===== TUT Brand Colors ===== */
        :root {
          --tut-blue: #003087;
          --tut-blue-light: #0050c8;
          --tut-blue-dark: #001f5c;
          --tut-red: #c8102e;
          --tut-red-light: #e8354f;
          --tut-red-dark: #9b0c23;
          --tut-black: #111111;
          --tut-white: #ffffff;
          --tut-gray-light: #f4f6f9;
          --tut-gray: #6b7280;
          --tut-gray-dark: #374151;
        }

        /* ===== Global Resets ===== */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', Arial, Helvetica, sans-serif;
          color: var(--tut-black);
          background-color: var(--tut-white);
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }

        /* ===== Navbar ===== */
        .navbar-tut {
          background-color: var(--tut-white);
          padding: 0.75rem 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid #e5e7eb;
        }

        .navbar-tut .navbar-brand {
          color: var(--tut-black);
          font-weight: 700;
          font-size: 1.35rem;
          letter-spacing: -0.02em;
          text-decoration: none;
        }

        .navbar-tut .navbar-brand span {
          color: var(--tut-red);
        }

        .navbar-tut .navbar-toggler {
          border: none;
          padding: 0.25rem 0.5rem;
        }

        .navbar-tut .navbar-toggler:focus {
          box-shadow: none;
        }

        .navbar-tut .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.85%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
        }

        .navbar-tut .nav-link {
          color: var(--tut-black);
          font-weight: 500;
          font-size: 0.9rem;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          transition: all 0.2s ease;
          text-decoration: none;
          display: block;
        }

        .navbar-tut .nav-link:hover,
        .navbar-tut .nav-link:focus {
          color: var(--tut-black);
          background-color: rgba(0, 0, 0, 0.05);
        }
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-tut sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Campus<span>Connect</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-1">
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;