import React from 'react';
import '../styles/Dashboard.css';
import {
    HomeOutlined,
    UserOutlined,
    LineChartOutlined,
    FolderOutlined,
    RobotOutlined,
    MessageOutlined,
    ShareAltOutlined,
} from '@ant-design/icons';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <div className="logo">
                    {/* Add your logo here */}
                </div>
                <nav className="menu">
                    <a href="#" className="menu-item">
                        <HomeOutlined /> Dashboard
                    </a>
                    <a href="#" className="menu-item">
                        <UserOutlined /> Mentor For You
                    </a>
                    <a href="#" className="menu-item">
                        <LineChartOutlined /> AI Insights
                    </a>
                    <a href="#" className="menu-item">
                        <FolderOutlined /> Jobs & Internships
                    </a>
                    <a href="#" className="menu-item">
                        <RobotOutlined /> Resume Bot
                    </a>
                    <a href="#" className="menu-item">
                        <MessageOutlined /> Community Forum
                    </a>
                    <a href="#" className="menu-item">
                        <MessageOutlined /> Messages
                    </a>
                    <a href="#" className="menu-item">
                        <ShareAltOutlined /> Referrals
                    </a>
                </nav>
            </aside>
            <main className="content">
                <header className="content-header">
                    Welcome to Your Dashboard
                </header>
                <div className="content-body">
                    <p>Start exploring features on the left menu.</p>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;