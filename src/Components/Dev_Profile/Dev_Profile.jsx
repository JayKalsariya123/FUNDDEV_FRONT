import React, { useEffect, useState } from 'react';
import './Dev_Profile.css';

// ProfilePage component that accepts 'user' as a prop
const ProfilePage = ({ user }) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        // Set the provided user data
        setProfileData(user);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
  }, [user]);

  if (!profileData) return <div>Loading...</div>;

  const renderProfileDetails = () => {
    switch (profileData.userType) {
      case 'Developer':
        return (
          <>
            <div className="detail-section">
              <h2>Profile Information</h2>
              <p><strong>Email:</strong> {profileData.email}</p>
              <p><strong>Location:</strong> {profileData.location}</p>
              <p><strong>Experience:</strong> {profileData.experience} years</p>
              <p><strong>Hourly Rate:</strong> ${profileData.hourlyRate}</p>
              <p><strong>Availability:</strong> {profileData.availability}</p>
              <p><strong>Skills:</strong> {profileData.skills}</p>
              <p><strong>Preferred Role:</strong> {profileData.preferredRoles}</p>
            </div>
            <div className="social-section">
              <h2>Social Links</h2>
              <p><strong>Website:</strong> <a href={profileData.website} target="_blank" rel="noopener noreferrer">{profileData.website}</a></p>
              <p><strong>GitHub:</strong> <a href={`https://github.com/${profileData.github}`} target="_blank" rel="noopener noreferrer">{profileData.github}</a></p>
              <p><strong>LinkedIn:</strong> <a href={`https://linkedin.com/in/${profileData.linkedin}`} target="_blank" rel="noopener noreferrer">{profileData.linkedin}</a></p>
              <p><strong>Twitter:</strong> <a href={`https://twitter.com/${profileData.twitter}`} target="_blank" rel="noopener noreferrer">{profileData.twitter}</a></p>
            </div>
          </>
        );
      case 'Entrepreneur':
        return (
          <>
          <div className="detail-section">
            <h2>Profile Information</h2>
            <p><strong>Email:</strong> {profileData.email}</p>
            <p><strong>Company Name:</strong> {profileData.companyName}</p>
            <p><strong>Founded Date:</strong> {profileData.foundedDate}</p>
            <p><strong>Industry:</strong> {profileData.industry}</p>
            <p><strong>Stage:</strong> {profileData.stage}</p>
            <p><strong>Team Size:</strong> {profileData.teamSize}</p>
            <p><strong>Location:</strong> {profileData.location}</p>
          </div>
          <div className="social-section">
            <h2>Social Links</h2>
            <p><strong>Website:</strong> <a href={profileData.website} target="_blank" rel="noopener noreferrer">{profileData.website}</a></p>
            <p><strong>GitHub:</strong> <a href={`https://github.com/${profileData.github}`} target="_blank" rel="noopener noreferrer">{profileData.github}</a></p>
            <p><strong>LinkedIn:</strong> <a href={`https://linkedin.com/in/${profileData.linkedin}`} target="_blank" rel="noopener noreferrer">{profileData.linkedin}</a></p>
            <p><strong>Twitter:</strong> <a href={`https://twitter.com/${profileData.twitter}`} target="_blank" rel="noopener noreferrer">{profileData.twitter}</a></p>
          </div>
        </>
        );
      case 'Investor':
        return (
          <>
          <div className="detail-section">
            <h2>Profile Information</h2>
            <p><strong>Email:</strong> {profileData.email}</p>
            <p><strong>Firm Name:</strong> {profileData.firmName}</p>
            <p><strong>Investment Range:</strong> ${profileData.investmentRangeMin} - ${profileData.investmentRangeMax}</p>
            <p><strong>Portfolio Size:</strong> ${profileData.portfolioSize}</p>
            <p><strong>Investment History:</strong> {profileData.investmentHistory}</p>
            <p><strong>Preferred Industries:</strong> {profileData.preferredIndustries}</p>
            <p><strong>Preferred Stages:</strong> {profileData.preferredStages}</p>
            <p><strong>Location:</strong> {profileData.location}</p>
          </div>
          <div className="social-section">
            <h2>Social Links</h2>
            <p><strong>Website:</strong> <a href={profileData.website} target="_blank" rel="noopener noreferrer">{profileData.website}</a></p>
            <p><strong>GitHub:</strong> <a href={`https://github.com/${profileData.github}`} target="_blank" rel="noopener noreferrer">{profileData.github}</a></p>
            <p><strong>LinkedIn:</strong> <a href={`https://linkedin.com/in/${profileData.linkedin}`} target="_blank" rel="noopener noreferrer">{profileData.linkedin}</a></p>
            <p><strong>Twitter:</strong> <a href={`https://twitter.com/${profileData.twitter}`} target="_blank" rel="noopener noreferrer">{profileData.twitter}</a></p>
          </div>
        </>
        );
      default:
        return <div>Unknown user type</div>;
    }
  };

  return (
     <div className="profile-page">
      <h1 className="main-heading">Profile Page</h1>
      <div className="profile-image">
        <img src="https://via.placeholder.com/150" alt="Profile" />
      </div>
      <div className="profile-header">
        <h2>{profileData.firstname} {profileData.lastname}</h2>
        <p className="bio">{profileData.bio}</p>
        <button className="btn">Edit Profile</button>
      </div>
      {renderProfileDetails()}
    </div>
  );
};

// App component that passes user data to ProfilePage
const App = () => {
  const user = {
    availability: "Part-time",
    bio: "abc",
    email: "123@kmail.com",
    experience: "12",
    firstname: "jay",
    github: "abc",
    hourlyRate: "12",
    lastname: "kalsariya",
    linkedin: "abc",
    location: "abc",
    password: "jay12345",
    portfolio: "abc",
    preferredRoles: "Backend",
    remote: true,
    skills: "abc",
    twitter: "abc",
    userType: "Developer",
    username: "123@kmail.com",
    website: "abc",
  };

  return (
    <div>
      <ProfilePage user={user} />
    </div>
  );
};

export default App;
