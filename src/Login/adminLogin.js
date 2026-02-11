// Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Admin/Navbar';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to Admin page using React Router
    navigate('/admin');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <>
      <Navbar />
      <style jsx>{`
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
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', Arial, Helvetica, sans-serif;
          color: var(--tut-black);
          background: linear-gradient(135deg, var(--tut-blue-dark) 0%, var(--tut-blue) 50%, var(--tut-blue-light) 100%);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          -webkit-font-smoothing: antialiased;
        }

        .login-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
        }

        .login-card {
          background: var(--tut-white);
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          width: 100%;
          max-width: 420px;
          overflow: hidden;
        }

        .login-header {
          background-color: var(--tut-black);
          padding: 2rem 2rem 1.5rem;
          text-align: center;
        }

        .login-header h1 {
          color: var(--tut-white);
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 0.25rem;
        }

        .login-header h1 span {
          color: var(--tut-red);
        }

        .login-header p {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.85rem;
          font-weight: 500;
        }

        .login-header .shield-icon {
          width: 56px;
          height: 56px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }

        .login-body {
          padding: 2rem;
        }

        .login-body label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--tut-black);
          margin-bottom: 0.4rem;
          display: block;
        }

        .login-body .form-control {
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          padding: 0.7rem 1rem;
          font-size: 0.9rem;
          font-family: 'Inter', sans-serif;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .login-body .form-control:focus {
          border-color: var(--tut-blue);
          box-shadow: 0 0 0 3px rgba(0, 48, 135, 0.12);
          outline: none;
        }

        .btn-login {
          background-color: var(--tut-red);
          color: var(--tut-white);
          border: none;
          padding: 0.75rem;
          font-weight: 700;
          font-size: 0.95rem;
          border-radius: 8px;
          width: 100%;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(200, 16, 46, 0.3);
          font-family: 'Inter', sans-serif;
          cursor: pointer;
        }

        .btn-login:hover {
          background-color: var(--tut-red-dark);
          color: var(--tut-white);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(200, 16, 46, 0.4);
        }

        .login-back {
          text-align: center;
          margin-top: 1.25rem;
        }

        .login-back a {
          color: var(--tut-blue);
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease;
          cursor: pointer;
        }

        .login-back a:hover {
          color: var(--tut-blue-light);
          text-decoration: underline;
        }

        .login-footer {
          background-color: var(--tut-blue-dark);
          color: rgba(255, 255, 255, 0.6);
          padding: 1.25rem 0;
          font-size: 0.8rem;
          text-align: center;
        }
      `}</style>

      <div className="login-wrapper">
        <div className="login-card">
          <div className="login-header">
            <div className="shield-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
              </svg>
            </div>
            <h1>Admin <span>Access</span></h1>
            <p>CampusConnect Administration</p>
          </div>
          <div className="login-body">
            <form id="loginForm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username">Username:</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="username" 
                  placeholder="Enter admin username" 
                  required 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password">Password:</label>
                <input 
                  type="password" 
                  className="form-control" 
                  id="password" 
                  placeholder="Enter password" 
                  required 
                />
              </div>
              <button type="submit" className="btn-login">Admin Login</button>
            </form>
            <div className="login-back">
              <a onClick={handleBackToHome} style={{cursor: 'pointer'}}>
                &larr; Back to CampusConnect
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="login-footer">
        <div className="container">
          &copy; 2026 Tshwane University of Technology | Faculty of ICT
        </div>
      </footer>
    </>
  );
};

export default Login;