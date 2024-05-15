import React from 'react'
import './Profile.css';


function Profile() {
  return(
    <div className="profile-page" style={{padding: '20px'}}>
      <h1 style={{margin: '20px'}}>My Profile</h1>
      <div className="profile-container" style={{margin: '20px'}}>
        <div className="profile-image">
          <img src="path/to/profile/image" alt="Profile" />
        </div>
        <div className="profile-info">
          <h2>John Doe</h2>
          <p>Email: john.doe@example.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Main St, Anytown USA</p>
        </div>
      </div>
      <div className="profile-bio" style={{margin: '20px'}}>
        <h3>Bio</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo, velit et pharetra rhoncus, mi lacus venenatis nisl, vel aliquet lorem nisi et sapien.</p>
        <button className="button-4 button-6">Edit</button>
      </div>
    </div>
  )
}

export default Profile


