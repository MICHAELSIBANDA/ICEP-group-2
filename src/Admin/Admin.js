// Admin.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <>
      <style jsx>{`
        :root {
          --tut-blue: #003087;
          --tut-blue-light: #0050c8;
          --tut-blue-lightest: rgba(0, 48, 135, 0.05);
          --tut-blue-medium: rgba(0, 48, 135, 0.1);
          --tut-blue-dark: #001f5c;
          --tut-red: #c8102e;
          --tut-red-light: #e8354f;
          --tut-red-lightest: rgba(200, 16, 46, 0.05);
          --tut-red-medium: rgba(200, 16, 46, 0.1);
          --tut-red-dark: #9b0c23;
          --tut-black: #111111;
          --tut-black-light: rgba(17, 17, 17, 0.7);
          --tut-black-medium: rgba(17, 17, 17, 0.1);
          --tut-white: #ffffff;
          --tut-gray-light: #f8fafc;
          --tut-gray: #6b7280;
          --tut-gray-dark: #374151;
          --border-radius: 12px;
          --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);
          --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);
          --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.12);
          --transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        * { 
          margin: 0; 
          padding: 0; 
          box-sizing: border-box; 
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: var(--tut-black);
          background: linear-gradient(135deg, var(--tut-gray-light) 0%, #f1f5f9 100%);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          line-height: 1.5;
        }

        /* ===== Navbar ===== */
        .navbar-admin {
          background: linear-gradient(135deg, var(--tut-black) 0%, #222 100%);
          padding: 0.875rem 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          border-bottom: 3px solid var(--tut-blue);
          position: relative;
          z-index: 1000;
        }

        .navbar-admin::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--tut-blue) 0%, var(--tut-red) 100%);
        }

        .navbar-admin .navbar-brand {
          color: var(--tut-white);
          font-weight: 800;
          font-size: 1.35rem;
          letter-spacing: -0.02em;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: var(--transition);
        }

        .navbar-admin .navbar-brand:hover {
          color: rgba(255, 255, 255, 0.95);
          transform: translateX(-2px);
        }

        .navbar-admin .badge-admin {
          background: linear-gradient(135deg, var(--tut-blue) 0%, var(--tut-blue-light) 100%);
          color: var(--tut-white);
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.3rem 0.75rem;
          border-radius: 20px;
          margin-left: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          letter-spacing: 0.02em;
        }

        .btn-logout {
          background: linear-gradient(135deg, var(--tut-red) 0%, var(--tut-red-dark) 100%);
          color: var(--tut-white);
          border: none;
          padding: 0.5rem 1.25rem;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: 8px;
          transition: var(--transition);
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 2px 8px rgba(200, 16, 46, 0.3);
          position: relative;
          overflow: hidden;
        }

        .btn-logout::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .btn-logout:hover::before {
          left: 100%;
        }

        .btn-logout:hover {
          background: linear-gradient(135deg, var(--tut-red-light) 0%, var(--tut-red) 100%);
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(200, 16, 46, 0.4);
        }

        /* ===== Main Content ===== */
        .admin-main {
          flex: 1;
          padding: 2rem 0 3rem;
        }

        .container {
          max-width: 1400px;
        }

        /* ===== Stat Cards ===== */
        .stat-card {
          background: var(--tut-white);
          border-radius: var(--border-radius);
          padding: 1.75rem;
          border: 1px solid rgba(0, 0, 0, 0.05);
          transition: var(--transition);
          position: relative;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--tut-blue), var(--tut-red));
          opacity: 0;
          transition: var(--transition);
        }

        .stat-card:hover::before {
          opacity: 1;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(0, 48, 135, 0.1);
        }

        .stat-card .stat-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .stat-card .stat-icon.blue { 
          background: linear-gradient(135deg, var(--tut-blue-medium) 0%, rgba(0, 80, 200, 0.1) 100%);
          color: var(--tut-blue);
        }
        
        .stat-card .stat-icon.red { 
          background: linear-gradient(135deg, var(--tut-red-medium) 0%, rgba(232, 53, 79, 0.1) 100%);
          color: var(--tut-red);
        }
        
        .stat-card .stat-icon.dark { 
          background: linear-gradient(135deg, var(--tut-black-medium) 0%, rgba(34, 34, 34, 0.1) 100%);
          color: var(--tut-black);
        }

        .stat-card .stat-content {
          flex: 1;
        }

        .stat-card .stat-value {
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--tut-black);
          letter-spacing: -0.03em;
          line-height: 1.2;
          margin-bottom: 0.25rem;
        }

        .stat-card .stat-label {
          font-size: 0.875rem;
          color: var(--tut-gray);
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        .stat-card .stat-change {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          margin-top: 0.75rem;
          display: inline-block;
        }

        .stat-card .stat-change.positive {
          background: rgba(0, 200, 83, 0.1);
          color: #00c853;
        }

        .stat-card .stat-change.negative {
          background: rgba(200, 16, 46, 0.1);
          color: var(--tut-red);
        }

        /* ===== Tabs ===== */
        .admin-tabs {
          background: var(--tut-white);
          border-radius: var(--border-radius);
          border: 1px solid rgba(0, 0, 0, 0.05);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }

        .admin-tabs .nav-tabs {
          border-bottom: 1px solid #e5e7eb;
          padding: 0 1.5rem;
          background: linear-gradient(to right, var(--tut-gray-light), #f1f5f9);
          flex-wrap: nowrap;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .admin-tabs .nav-tabs::-webkit-scrollbar {
          display: none;
        }

        .admin-tabs .nav-tabs .nav-item {
          margin: 0;
        }

        .admin-tabs .nav-tabs .nav-link {
          border: none;
          color: var(--tut-gray);
          font-weight: 600;
          font-size: 0.9rem;
          padding: 1rem 1.25rem;
          border-bottom: 3px solid transparent;
          border-radius: 0;
          transition: var(--transition);
          white-space: nowrap;
          font-family: 'Inter', sans-serif;
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .admin-tabs .nav-tabs .nav-link:hover {
          color: var(--tut-blue);
          background: rgba(255, 255, 255, 0.5);
          border-bottom-color: rgba(0, 48, 135, 0.3);
        }

        .admin-tabs .nav-tabs .nav-link.active {
          color: var(--tut-blue);
          background: var(--tut-white);
          border-bottom-color: var(--tut-blue);
          font-weight: 700;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }

        .admin-tabs .nav-tabs .nav-link .tab-icon {
          font-size: 1rem;
          opacity: 0.7;
        }

        .admin-tabs .nav-tabs .nav-link.active .tab-icon {
          opacity: 1;
          color: var(--tut-blue);
        }

        .admin-tabs .tab-content {
          padding: 2rem;
        }

        /* ===== Tab Panel Header ===== */
        .panel-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid var(--tut-gray-light);
        }

        .panel-header .panel-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--tut-blue-medium) 0%, rgba(0, 80, 200, 0.1) 100%);
          color: var(--tut-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          box-shadow: var(--shadow-sm);
        }

        .panel-header h5 {
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--tut-black);
          margin: 0;
          letter-spacing: -0.01em;
        }

        .panel-header .panel-subtitle {
          font-size: 0.875rem;
          color: var(--tut-gray);
          margin-top: 0.25rem;
        }

        /* ===== Table ===== */
        .table-admin {
          font-size: 0.875rem;
          margin-bottom: 0;
          border-collapse: separate;
          border-spacing: 0;
        }

        .table-admin thead {
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .table-admin thead th {
          background: linear-gradient(to bottom, var(--tut-gray-light), #edf2f7);
          color: var(--tut-gray-dark);
          font-weight: 700;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 2px solid var(--tut-blue-medium);
          padding: 1rem 1.25rem;
          white-space: nowrap;
          position: relative;
        }

        .table-admin thead th::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -2px;
          height: 2px;
          background: linear-gradient(90deg, var(--tut-blue), transparent);
        }

        .table-admin tbody tr {
          transition: var(--transition);
          border-bottom: 1px solid rgba(0, 0, 0, 0.03);
        }

        .table-admin tbody tr:hover {
          background: var(--tut-blue-lightest);
          transform: translateX(4px);
        }

        .table-admin tbody td {
          padding: 1rem 1.25rem;
          vertical-align: middle;
          color: var(--tut-black-light);
          font-weight: 500;
          border-bottom: 1px solid rgba(0, 0, 0, 0.03);
        }

        .table-admin .empty-state {
          text-align: center;
          padding: 4rem 1rem;
          color: var(--tut-gray);
        }

        .table-admin .empty-state div {
          font-size: 0.9rem;
          font-weight: 500;
        }

        /* ===== Action Buttons ===== */
        .btn-action {
          padding: 0.4rem 0.75rem;
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 6px;
          border: 1px solid transparent;
          cursor: pointer;
          transition: var(--transition);
          font-family: 'Inter', sans-serif;
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
          letter-spacing: 0.02em;
        }

        .btn-action.edit {
          background: var(--tut-blue-lightest);
          color: var(--tut-blue);
          border-color: var(--tut-blue-medium);
        }

        .btn-action.edit:hover {
          background: var(--tut-blue);
          color: var(--tut-white);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 48, 135, 0.2);
        }

        .btn-action.delete {
          background: var(--tut-red-lightest);
          color: var(--tut-red);
          border-color: var(--tut-red-medium);
        }

        .btn-action.delete:hover {
          background: var(--tut-red);
          color: var(--tut-white);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(200, 16, 46, 0.2);
        }

        /* ===== Status Badges ===== */
        .badge-status {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.375rem 0.75rem;
          border-radius: 20px;
          letter-spacing: 0.02em;
          display: inline-flex;
          align-items: center;
          gap: 0.375rem;
        }

        .badge-status.pending {
          background: linear-gradient(135deg, var(--tut-red-lightest) 0%, rgba(232, 53, 79, 0.05) 100%);
          color: var(--tut-red);
          border: 1px solid var(--tut-red-medium);
        }

        .badge-status.resolved {
          background: linear-gradient(135deg, var(--tut-blue-lightest) 0%, rgba(0, 80, 200, 0.05) 100%);
          color: var(--tut-blue);
          border: 1px solid var(--tut-blue-medium);
        }

        .badge-status.in-progress {
          background: linear-gradient(135deg, var(--tut-black-medium) 0%, rgba(34, 34, 34, 0.05) 100%);
          color: var(--tut-black);
          border: 1px solid rgba(17, 17, 17, 0.2);
        }

        /* ===== Statistics Cards ===== */
        .stat-box {
          background: var(--tut-white);
          border-radius: var(--border-radius);
          padding: 1.75rem;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }

        .stat-box:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .stat-box .stat-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--tut-gray);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .stat-box .stat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .stat-box .stat-item {
          text-align: center;
          padding: 1rem;
          border-radius: 10px;
          background: var(--tut-gray-light);
          transition: var(--transition);
        }

        .stat-box .stat-item:hover {
          background: rgba(0, 0, 0, 0.02);
        }

        .stat-box .stat-item.blue .stat-number {
          color: var(--tut-blue);
        }

        .stat-box .stat-item.red .stat-number {
          color: var(--tut-red);
        }

        .stat-box .stat-item.dark .stat-number {
          color: var(--tut-black);
        }

        .stat-box .stat-number {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 0.375rem;
          letter-spacing: -0.02em;
        }

        .stat-box .stat-label {
          font-size: 0.75rem;
          color: var(--tut-gray);
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        /* ===== Footer ===== */
        .footer-admin {
          background: linear-gradient(135deg, var(--tut-blue-dark) 0%, var(--tut-black) 100%);
          color: rgba(255, 255, 255, 0.7);
          padding: 1.5rem 0;
          font-size: 0.85rem;
          text-align: center;
          position: relative;
          border-top: 3px solid var(--tut-red);
        }

        .footer-admin::before {
          content: '';
          position: absolute;
          top: -3px;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--tut-blue), var(--tut-red));
        }

        .footer-admin a {
          color: var(--tut-white);
          text-decoration: none;
          font-weight: 600;
          transition: var(--transition);
        }

        .footer-admin a:hover {
          color: var(--tut-red-light);
          text-decoration: underline;
        }

        /* ===== Responsive ===== */
        @media (max-width: 768px) {
          .admin-main {
            padding: 1.25rem 0 2rem;
          }
          
          .stat-card {
            padding: 1.5rem;
          }
          
          .stat-card .stat-value {
            font-size: 1.875rem;
          }
          
          .admin-tabs .tab-content {
            padding: 1.25rem;
          }
          
          .table-admin {
            font-size: 0.8rem;
          }
          
          .table-admin tbody td,
          .table-admin thead th {
            padding: 0.875rem;
          }
          
          .btn-action {
            padding: 0.35rem 0.65rem;
            font-size: 0.7rem;
          }
          
          .stat-box .stat-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 576px) {
          .navbar-admin .navbar-brand {
            font-size: 1.1rem;
          }
          
          .btn-logout {
            padding: 0.4rem 1rem;
            font-size: 0.8rem;
          }
          
          .stat-card .stat-icon {
            width: 48px;
            height: 48px;
            font-size: 1.25rem;
          }
          
          .panel-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
          
          .panel-header .panel-icon {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
        }
      `}</style>

      {/* ===== NAVBAR ===== */}
      <nav className="navbar navbar-admin sticky-top">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="navbar-brand">
            <i className="bi bi-shield-check"></i>
            CampusConnect <span style={{color: 'var(--tut-red)'}}>Admin</span>
            <span className="badge-admin">Super Admin</span>
          </div>
          <button onClick={handleLogout} className="btn-logout">
            <i className="bi bi-box-arrow-right"></i>
            Logout
          </button>
        </div>
      </nav>

      {/* ===== MAIN CONTENT ===== */}
      <div className="admin-main">
        <div className="container">

          {/* ===== STAT CARDS ===== */}
          <div className="row g-4 mb-5">
            <div className="col-6 col-lg-3">
              <div className="stat-card">
                <div className="stat-icon blue">
                  <i className="bi bi-people-fill"></i>
                </div>
                <div className="stat-content">
                  <div className="stat-value">0</div>
                  <div className="stat-label">Total Users</div>
                  <span className="stat-change positive">
                    <i className="bi bi-arrow-up"></i> 0% this month
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="stat-card">
                <div className="stat-icon red">
                  <i className="bi bi-clipboard-check"></i>
                </div>
                <div className="stat-content">
                  <div className="stat-value">0</div>
                  <div className="stat-label">Service Requests</div>
                  <span className="stat-change negative">
                    <i className="bi bi-arrow-down"></i> 0% pending
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="stat-card">
                <div className="stat-icon dark">
                  <i className="bi bi-clock-history"></i>
                </div>
                <div className="stat-content">
                  <div className="stat-value">0</div>
                  <div className="stat-label">Pending Requests</div>
                  <span className="stat-change negative">
                    <i className="bi bi-exclamation-triangle"></i> Needs attention
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="stat-card">
                <div className="stat-icon blue">
                  <i className="bi bi-chat-left-text"></i>
                </div>
                <div className="stat-content">
                  <div className="stat-value">0</div>
                  <div className="stat-label">Feedback Items</div>
                  <span className="stat-change positive">
                    <i className="bi bi-star-fill"></i> 0% positive
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ===== TABBED PANEL ===== */}
          <div className="admin-tabs">
            <ul className="nav nav-tabs" id="adminTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="users-tab" data-bs-toggle="tab" data-bs-target="#users" type="button" role="tab" aria-controls="users" aria-selected="true">
                  <i className="bi bi-people tab-icon"></i>
                  Users
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="requests-tab" data-bs-toggle="tab" data-bs-target="#requests" type="button" role="tab" aria-controls="requests" aria-selected="false">
                  <i className="bi bi-clipboard-data tab-icon"></i>
                  Service Requests
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="announcements-tab" data-bs-toggle="tab" data-bs-target="#announcements" type="button" role="tab" aria-controls="announcements" aria-selected="false">
                  <i className="bi bi-megaphone tab-icon"></i>
                  Announcements
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="feedback-tab" data-bs-toggle="tab" data-bs-target="#feedback" type="button" role="tab" aria-controls="feedback" aria-selected="false">
                  <i className="bi bi-chat-square-text tab-icon"></i>
                  Feedback
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="stats-tab" data-bs-toggle="tab" data-bs-target="#statistics" type="button" role="tab" aria-controls="statistics" aria-selected="false">
                  <i className="bi bi-bar-chart tab-icon"></i>
                  Statistics
                </button>
              </li>
            </ul>

            <div className="tab-content" id="adminTabContent">

              {/* ===== USERS TAB ===== */}
              <div className="tab-pane fade show active" id="users" role="tabpanel" aria-labelledby="users-tab">
                <div className="panel-header">
                  <div className="panel-icon">
                    <i className="bi bi-people-fill"></i>
                  </div>
                  <div>
                    <h5>User Management</h5>
                    <div className="panel-subtitle">Manage all registered users and their permissions</div>
                  </div>
                  <div className="ms-auto">
                    <button className="btn-action edit">
                      <i className="bi bi-plus-circle"></i>
                      Add User
                    </button>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-admin">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Registered</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="7" className="empty-state">
                          <i className="bi bi-people" style={{fontSize: '3rem'}}></i>
                          <div>No users found in the system</div>
                          <small className="text-muted d-block mt-2">Add your first user to get started</small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ===== SERVICE REQUESTS TAB ===== */}
              <div className="tab-pane fade" id="requests" role="tabpanel" aria-labelledby="requests-tab">
                <div className="panel-header">
                  <div className="panel-icon" style={{background: 'linear-gradient(135deg, var(--tut-red-medium) 0%, rgba(232, 53, 79, 0.1) 100%)', color: 'var(--tut-red)'}}>
                    <i className="bi bi-clipboard-check"></i>
                  </div>
                  <div>
                    <h5>Service Requests</h5>
                    <div className="panel-subtitle">Track and manage all service requests from students</div>
                  </div>
                  <div className="ms-auto">
                    <button className="btn-action edit">
                      <i className="bi bi-funnel"></i>
                      Filter
                    </button>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-admin">
                    <thead>
                      <tr>
                        <th>Request ID</th>
                        <th>Student</th>
                        <th>Service Type</th>
                        <th>Status</th>
                        <th>Date Submitted</th>
                        <th>Priority</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="7" className="empty-state">
                          <i className="bi bi-clipboard" style={{fontSize: '3rem'}}></i>
                          <div>No service requests found</div>
                          <small className="text-muted d-block mt-2">Requests will appear here when submitted</small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ===== ANNOUNCEMENTS TAB ===== */}
              <div className="tab-pane fade" id="announcements" role="tabpanel" aria-labelledby="announcements-tab">
                <div className="panel-header">
                  <div className="panel-icon" style={{background: 'linear-gradient(135deg, var(--tut-black-medium) 0%, rgba(34, 34, 34, 0.1) 100%)', color: 'var(--tut-black)'}}>
                    <i className="bi bi-megaphone"></i>
                  </div>
                  <div>
                    <h5>Announcements</h5>
                    <div className="panel-subtitle">Create and manage campus announcements</div>
                  </div>
                  <div className="ms-auto">
                    <button className="btn-action edit">
                      <i className="bi bi-plus-circle"></i>
                      New Announcement
                    </button>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-admin">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Content Preview</th>
                        <th>Published Date</th>
                        <th>Expiry Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="6" className="empty-state">
                          <i className="bi bi-megaphone" style={{fontSize: '3rem'}}></i>
                          <div>No announcements found</div>
                          <small className="text-muted d-block mt-2">Create your first announcement to inform students</small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ===== FEEDBACK TAB ===== */}
              <div className="tab-pane fade" id="feedback" role="tabpanel" aria-labelledby="feedback-tab">
                <div className="panel-header">
                  <div className="panel-icon">
                    <i className="bi bi-chat-left-text"></i>
                  </div>
                  <div>
                    <h5>Feedback & Reviews</h5>
                    <div className="panel-subtitle">View and respond to student feedback</div>
                  </div>
                  <div className="ms-auto">
                    <button className="btn-action edit">
                      <i className="bi bi-download"></i>
                      Export
                    </button>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-admin">
                    <thead>
                      <tr>
                        <th>Student</th>
                        <th>Subject</th>
                        <th>Rating</th>
                        <th>Date Submitted</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="6" className="empty-state">
                          <i className="bi bi-chat" style={{fontSize: '3rem'}}></i>
                          <div>No feedback found</div>
                          <small className="text-muted d-block mt-2">Student feedback will appear here</small>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ===== STATISTICS TAB ===== */}
              <div className="tab-pane fade" id="statistics" role="tabpanel" aria-labelledby="stats-tab">
                <div className="panel-header">
                  <div className="panel-icon" style={{background: 'linear-gradient(135deg, var(--tut-red-medium) 0%, rgba(232, 53, 79, 0.1) 100%)', color: 'var(--tut-red)'}}>
                    <i className="bi bi-bar-chart"></i>
                  </div>
                  <div>
                    <h5>Analytics Dashboard</h5>
                    <div className="panel-subtitle">System insights and performance metrics</div>
                  </div>
                  <div className="ms-auto">
                    <button className="btn-action edit">
                      <i className="bi bi-calendar-week"></i>
                      This Month
                    </button>
                  </div>
                </div>
                
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="stat-box">
                      <div className="stat-title">
                        <i className="bi bi-clipboard-data" style={{color: 'var(--tut-red)'}}></i>
                        Service Request Status
                      </div>
                      <div className="stat-grid">
                        <div className="stat-item red">
                          <div className="stat-number">0</div>
                          <div className="stat-label">Pending</div>
                        </div>
                        <div className="stat-item dark">
                          <div className="stat-number">0</div>
                          <div className="stat-label">In Progress</div>
                        </div>
                        <div className="stat-item blue">
                          <div className="stat-number">0</div>
                          <div className="stat-label">Resolved</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-6">
                    <div className="stat-box">
                      <div className="stat-title">
                        <i className="bi bi-people" style={{color: 'var(--tut-blue)'}}></i>
                        User Distribution
                      </div>
                      <div className="stat-grid">
                        <div className="stat-item blue">
                          <div className="stat-number">0</div>
                          <div className="stat-label">Students</div>
                        </div>
                        <div className="stat-item red">
                          <div className="stat-number">0</div>
                          <div className="stat-label">Staff</div>
                        </div>
                        <div className="stat-item dark">
                          <div className="stat-number">0</div>
                          <div className="stat-label">Admins</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-12">
                    <div className="stat-box">
                      <div className="stat-title">
                        <i className="bi bi-activity" style={{color: 'var(--tut-black)'}}></i>
                        System Activity Overview
                      </div>
                      <div className="row text-center">
                        <div className="col-4">
                          <div className="stat-number" style={{color: 'var(--tut-blue)'}}>0</div>
                          <div className="stat-label">Active Sessions</div>
                        </div>
                        <div className="col-4">
                          <div className="stat-number" style={{color: 'var(--tut-red)'}}>0</div>
                          <div className="stat-label">Requests Today</div>
                        </div>
                        <div className="col-4">
                          <div className="stat-number" style={{color: 'var(--tut-black)'}}>0%</div>
                          <div className="stat-label">Satisfaction Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="footer-admin">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-md-start text-center mb-3 mb-md-0">
              &copy; 2026 Tshwane University of Technology | Faculty of ICT
            </div>
            <div className="col-md-6 text-md-end text-center">
              <a href="#" className="me-3">Privacy Policy</a>
              <a href="#" className="me-3">Terms of Service</a>
              <a href="#">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Admin;