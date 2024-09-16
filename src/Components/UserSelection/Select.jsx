import React from 'react';
import { useNavigate } from 'react-router-dom';
import './select.css'; // Custom styles


const UserSelection = () => {
  const navigate = useNavigate();
  
   const handleSelection = (role) => {
    navigate(`/Signup?role=${role}`);  // Pass the selected role to the Signup page
    };

  return (
    <div className="selection-container">
      <h2>Continue as</h2>
      <div className="selection-boxes">
        <div className="selection-box developer" onClick={() => handleSelection('Developer')}>
          <div className="icon">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/developer.png" alt="Developer" />
          </div>
          <p>Developer</p>
        </div>

        <div className="selection-box investor" onClick={() => handleSelection('Investor')}>
          <div className="icon">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/money.png" alt="Investor" />
          </div>
          <p>Investor</p>
        </div>

        <div className="selection-box entrepreneur" onClick={() => handleSelection('Entrepreneur')}>
          <div className="icon">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/businesswoman.png" alt="Entrepreneur" />
          </div>
          <p>Entrepreneur</p>
        </div>
      </div>
    </div>
  );
};

export default UserSelection;
