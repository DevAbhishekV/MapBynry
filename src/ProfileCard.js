// src/ProfileCard.js
import React from 'react';

const ProfileCard = ({ profile, onSummaryClick, isSelected, onEdit, onDelete, onClick }) => {
  return (
    <div
      style={{
        border: isSelected ? '2px solid blue' : '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
        cursor: 'pointer',
      }}
      onClick={onClick} // Add onClick handler
    >
      <img src={profile.photo} alt={profile.name} style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }} />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <button onClick={() => onSummaryClick(profile)}>Summary</button>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default ProfileCard;