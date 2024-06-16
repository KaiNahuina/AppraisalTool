import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import profilePicture from "./Media/pexels-justin-shaifer-501272-1222271.jpg";

function Profile({ onLogout }) {
  // State for user data
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const navigate = useNavigate();

  // Function to handle form submission for changing name
  const handleChangeName = (e) => {
    e.preventDefault();
    // Implement logic to update name
  };

  // Function to handle form submission for changing profile picture
  const handleChangeProfilePicture = (e) => {
    e.preventDefault();
    // Implement logic to update profile picture
  };

  // Function to handle form submission for changing log-in credentials
  const handleChangeCredentials = (e) => {
    e.preventDefault();
    // Implement logic to update log-in credentials
  };

  // Function to handle logout
  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="profile">
      <div className="profile-container">
        <div className='sideA'>
          <div className="profile-item">
            <div className="profile-picture-container">
              <img src={profilePicture} alt="Profile" />
            </div>
          </div>
          <div className="profile-item">
            <div className="profile-info">{name}</div>
            <div className="edit" onClick={handleChangeName}>
              {/* Add edit icon or text if needed */}
            </div>
          </div>
          <div className="profile-item">
            <div className="profile-info">{email}</div>
          </div>
          <div className="profile-item">
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>
        <div className='sideB'>
          <div className='profile-item'>
            <h1 className='profile-title'>Information</h1>
            <div className="profile-line"></div>
            <h2 className="profile-name">Name: </h2>
            <input 
              className="profile-input"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <h2 className="profile-email">Email: </h2>
            <input
              className="profile-input"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <h2 className="profile-phone">Password: </h2>
            <input
              className="profile-input"
              type="password"
            />
            <button className="change-credentials-btn" onClick={handleChangeCredentials}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
