import React, { useState, useEffect } from 'react';
import './MainPage.css';
import { Link , useNavigate, useLocation } from 'react-router-dom';
import Idea_Card from '../Idea_Card/Idea_Card';
const MainPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userType, setUserType] = useState('');

  //there is no need for an api for conditional rendrening here i have done it.

  useEffect(() => {
    // Parse the query parameters
    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get('userType');
    
    if (type) {
      setUserType(type);
    }
  }, [location]);

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleProfileClick = () => {
    navigate('/Dev_Profile');  
  };

  const handlesupportClick = () => {
    navigate('/helpandsupport');
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
          {userType === 'Developer' || userType === 'Entrepreneur' ? (
            <>
              <li><button onClick={handleIdeaClick}>Upload Idea</button></li>
              <li>Request</li>
            </>
          ) : null}
          <li><button onClick={handlesupportClick}>Help and Support</button></li>
          <li className="logout">Logout</li>
        </ul>
      </div>

      <div className="content">
          <Idea_Card />
      </div>
    </div>
  );
};

export default MainPage;
