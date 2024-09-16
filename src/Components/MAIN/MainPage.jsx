import React, { useState } from 'react';
import './MainPage.css';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleProfileClick = () => {
    navigate('/Dev_Profile');  
};
  const handleIdeaClick = () => {
    navigate('/Idea_form');  
};
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="main-page">
      <nav className="navbar">
        <div className="hamburger" onClick={toggleSidebar}>
          &#9776;
        </div>
        <div className="navbar-right">
          <ul>
            <li>Ideas</li>
            <li>Review</li>
            <li>Funding</li>
            <li>Admin</li>
          </ul>
        </div>
      </nav>

      {isSidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <ul>
          <li><button onClick={handleProfileClick}>Profile</button></li>
          <li>Request</li>
          <li>Help and Support</li>
          <li><button onClick={handleIdeaClick} >Upload Idea</button></li>
          <li className="logout">Logout</li>
        </ul>
      </div>

      <div className="content">
        <h1>Welcome to the Main Page</h1>
        <p>This is the main oage of our</p>
      </div>
    </div>
  );
};

export default MainPage;
