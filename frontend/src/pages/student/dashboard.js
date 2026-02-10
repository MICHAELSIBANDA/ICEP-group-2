import React, { useState, useEffect } from 'react';
//import './dashboard.css';

export default function StudentDashboard() {
    const [announcements, setAnnouncements] = useState([]);
    const [supportProgress, setSupportProgress] = useState([]);
    const [feedback, setFeedback] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            // Replace with your API endpoints
            const [announcementsRes, progressRes, feedbackRes] = await Promise.all([
                fetch('/api/announcements?limit=5'),
                fetch('/api/student/support-progress'),
                fetch('/api/student/feedback')
            ]);

            setAnnouncements(await announcementsRes.json());
            setSupportProgress(await progressRes.json());
            setFeedback(await feedbackRes.json());
            setLoading(false);
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
            setLoading(false);
        }
    };

    if (loading) return <div className="loader">Loading...</div>;

    return (
        <div className="dashboard-container">
            <h1>Student Dashboard</h1>

            {/* Latest Announcements */}
            <section className="announcements-section">
                <h2>Latest Announcements</h2>
                <div className="announcements-actions">
                    <a href="/announcements" className="btn view-past">View Past Announcements</a>
                </div>
                <div className="announcements-list">
                    {announcements.length > 0 ? (
                        announcements.map((announcement) => (
                            <div key={announcement.id} className="announcement-card">
                                <h3>{announcement.title}</h3>
                                <p>{announcement.content}</p>
                                <span className="date">{new Date(announcement.createdAt).toLocaleDateString()}</span>
                            </div>
                        ))
                    ) : (
                        <p className="empty-message">No announcements yet</p>
                    )}
                </div>
            </section>

            {/* Support Progress Table */}
            <section className="progress-section">
                <h2>Support Progress Tracking</h2>
                <table className="progress-table">
                    <thead>
                        <tr>
                            <th>Support Type</th>
                            <th>Status</th>
                            <th>Progress</th>
                            <th>Start Date</th>
                            <th>Expected Completion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {supportProgress.length > 0 ? (
                            supportProgress.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.type}</td>
                                    <td><span className={`status ${item.status.toLowerCase()}`}>{item.status}</span></td>
                                    <td>
                                        <div className="progress-bar">
                                            <div className="progress-fill" style={{ width: `${item.percentage}%` }}></div>
                                        </div>
                                        <span>{item.percentage}%</span>
                                    </td>
                                    <td>{new Date(item.startDate).toLocaleDateString()}</td>
                                    <td>{new Date(item.expectedDate).toLocaleDateString()}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="empty-message">No support progress tracked</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>

            {/* Feedback Section */}
            <section className="feedback-section">
                <h2>Support Feedback</h2>
                <div className="feedback-list">
                    {feedback.length > 0 ? (
                        feedback.map((item) => (
                            <div key={item.id} className="feedback-card">
                                <div className="feedback-header">
                                    <h3>{item.supportType}</h3>
                                    <span className="rating">⭐ {item.rating}/5</span>
                                </div>
                                <p className="feedback-text">{item.comments}</p>
                                <span className="feedback-date">{new Date(item.date).toLocaleDateString()}</span>
                            </div>
                        ))
                    ) : (
                        <p className="empty-message">No feedback yet</p>
                    )}
                </div>
            </section>
        </div>
    );
}