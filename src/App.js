// src/App.js
import React, { useState, useMemo } from 'react';
import profilesData from './profiles';
import ProfileCard from './ProfileCard';
import MapComponent from './MapComponent';
import ProfileForm from './ProfileForm';
import AdminPanel from './AdminPanel';
import ProfileDetails from './ProfileDetails';

function App() {
  const [profiles, setProfiles] = useState(profilesData);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editProfile, setEditProfile] = useState(null);
  const [isAdmin, setIsAdmin] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [mapLoading, setMapLoading] = useState(false);
  const [mapError, setMapError] = useState(null);
  const [detailsProfile, setDetailsProfile] = useState(null);
  const mapboxAccessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

  const handleSummaryClick = (profile) => {
    setMapLoading(true);
    setMapError(null);
    setSelectedProfile(profile);
    setTimeout(() => {
      setMapLoading(false);
    }, 500);
  };

  const handleAddProfile = (newProfile) => {
    setProfiles([...profiles, newProfile]);
    setShowForm(false);
  };

  const handleEditProfile = (updatedProfile) => {
    const updatedProfiles = profiles.map((profile) =>
      profile.name === updatedProfile.name ? updatedProfile : profile
    );
    setProfiles(updatedProfiles);
    setEditProfile(null);
    setShowForm(false);
  };

  const handleDeleteProfile = (profileToDelete) => {
    const filteredProfiles = profiles.filter(
      (profile) => profile.name !== profileToDelete.name
    );
    setProfiles(filteredProfiles);
    setSelectedProfile(null);
  };

  const performSearch = () => {
    // The filtering logic is now handled here, when the button is clicked.
    // However, the useMemo will still work, and this function is not nessisary.
    // If you wish to have a button, you must remove the useMemo.
  };

  const filteredProfiles = useMemo(() => {
    return profiles
      .filter((profile) =>
        profile.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter((profile) =>
        filterLocation
          ? profile.address.toLowerCase().includes(filterLocation.toLowerCase())
          : true
      );
  }, [profiles, searchQuery, filterLocation]);

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#141414', color: '#e5e5e5', minHeight: '100vh', padding: '20px' }}>
      <center><h1 style={{ color: 'white' }}>BYNRY MAP APPLICATION</h1></center>
      {isAdmin && (
        <AdminPanel
          profiles={profiles}
          onAdd={handleAddProfile}
          onEdit={handleEditProfile}
          onDelete={handleDeleteProfile}
          setEditProfile={setEditProfile}
          setShowForm={setShowForm}
        />
      )}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #444', backgroundColor: '#333', color: 'white', marginRight: '10px' }}
        />
        <input
          type="text"
          placeholder="Filter by location"
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #444', backgroundColor: '#333', color: 'white' }}
        />
        <button onClick={performSearch} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #444', backgroundColor: '#333', color: 'white', marginLeft: '10px' }}>Search</button>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '300px', marginRight: '20px' }}>
          {filteredProfiles.map((profile) => (
            <div key={profile.name}>
              <ProfileCard
                profile={profile}
                onSummaryClick={handleSummaryClick}
                isSelected={selectedProfile && selectedProfile.name === profile.name}
                onEdit={() => {
                  setEditProfile(profile);
                  setShowForm(true);
                }}
                onDelete={() => handleDeleteProfile(profile)}
                onClick={() => setDetailsProfile(profile)}
              />
            </div>
          ))}
        </div>
        <div style={{ flex: 1 }}>
          {showForm && <ProfileForm onSave={editProfile ? handleEditProfile : handleAddProfile} profile={editProfile} />}
          {mapLoading && <p>Loading Map...</p>}
          {mapError && <p style={{ color: 'red' }}>{mapError}</p>}
          <MapComponent profile={selectedProfile} accessToken={mapboxAccessToken} onError={(error) => setMapError(error)} />
        </div>
      </div>
      {detailsProfile && <ProfileDetails profile={detailsProfile} onClose={() => setDetailsProfile(null)} />}
    </div>
  );
}

export default App;