// src/ProfileDetails.js
import React from 'react';

const ProfileDetails = ({ profile, onClose }) => {
  if (!profile) return null;

  const detailsStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '20px',
    borderRadius: '8px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
    maxWidth: '600px',
    width: '90%',
  };

  const closeButtonStyle = {
    backgroundColor: '#e50914',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '15px',
  };

  return (
    <div style={detailsStyle}>
      <h2>{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }} />
      <p><strong>Address:</strong> {profile.address}</p>
      <p><strong>Description:</strong> {profile.description}</p>
      <p><strong>Contact:</strong> {profile.contact || 'Not available'}</p>
      <p><strong>Interests:</strong> {profile.interests || 'Not available'}</p>
      <button style={closeButtonStyle} onClick={onClose}>Close</button>
    </div>
  );
};

export default ProfileDetails;