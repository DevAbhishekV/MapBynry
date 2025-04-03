// src/ProfileForm.js
import React, { useState, useEffect } from 'react';

const ProfileForm = ({ onSave, profile }) => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        latitude: '',
        longitude: '',
        photo: '',
        description: '',
    });

    useEffect(() => {
        if (profile) {
            setFormData(profile);
        }
    }, [profile]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    };

    const inputStyle = {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #444',
        backgroundColor: '#333',
        color: 'white',
    };

    const buttonStyle = {
        padding: '10px 15px',
        borderRadius: '5px',
        backgroundColor: '#e50914',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <input style={inputStyle} name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input style={inputStyle} name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
            <input style={inputStyle} name="latitude" placeholder="Latitude" value={formData.latitude} onChange={handleChange} required />
            <input style={inputStyle} name="longitude" placeholder="Longitude" value={formData.longitude} onChange={handleChange} required />
            <input style={inputStyle} name="photo" placeholder="Photo URL" value={formData.photo} onChange={handleChange} required />
            <textarea style={inputStyle} name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
            <button type="submit" style={buttonStyle}>Save</button>
        </form>
    );
};

export default ProfileForm;