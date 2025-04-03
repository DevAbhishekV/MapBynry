// src/AdminPanel.js
import React from 'react';

const AdminPanel = ({ profiles, onAdd, onEdit, onDelete, setEditProfile, setShowForm }) => {
  const panelStyle = {
    backgroundColor: '#222', // Darker background
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
  };

  const titleStyle = {
    color: '#e50914',
    marginBottom: '15px',
    fontSize: '1.5em',
  };

  const buttonStyle = {
    backgroundColor: '#e50914',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    marginRight: '10px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const listStyle = {
    marginTop: '15px',
  };

  const listItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px',
    borderBottom: '1px solid #333',
  };

  const actionButtonStyle = {
    backgroundColor: '#e50914',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    marginRight: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const deleteButtonStyle = {
    backgroundColor: '#800000',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={panelStyle}>
      <h2 style={titleStyle}>Admin Panel</h2>
      <button style={buttonStyle} onClick={() => {setShowForm(true); setEditProfile(null);}}>Add Profile</button>
      <div style={listStyle}>
        {profiles.map((profile) => (
          <div key={profile.name} style={listItemStyle}>
            <span>{profile.name}</span>
            <div>
              <button style={actionButtonStyle} onClick={() => {setEditProfile(profile); setShowForm(true);}}>Edit</button>
              <button style={deleteButtonStyle} onClick={() => onDelete(profile)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;