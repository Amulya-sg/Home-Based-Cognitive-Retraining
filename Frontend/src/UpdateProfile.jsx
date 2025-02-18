
import { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ID = localStorage.getItem('userId');

function ProfileUpdate() {
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newAddress, setNewAddress] = useState('');
  const [newDOB, setNewDOB] = useState('');
  const [newGender, setNewGender] = useState('');
  const [newEducation, setNewEducation] = useState('');

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleUpdate = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await axios.post(
        'http://localhost:3001/updateProfile',
        { userId, newUsername, newEmail, newAddress , newDOB, newGender, newEducation },
        { withCredentials: true }
      );

      console.log(response.data);
      window.alert("Profile updated! Reload to apply changes.")
      navigate(`/profile/${ID}`) 
    } catch (error) {
      console.error('Error updating profile:', error);
      setError('An error occurred while updating the profile.');
    }
  };

  return (
    <div>
      <div style={styles.container}>
        <h1>Update Your Profile</h1>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <div style={styles.formGroup}>
          <label htmlFor="newUsername">New Username:</label>
          <input
            type="text"
            id="newUsername"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="newEmail">New Email:</label>
          <input
            type="text"
            id="newEmail"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="newAddress">New Address:</label>
          <input
            type="text"
            id="newAddress"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="newDOB">New Date of Birth:</label>
          <input
            type="text"
            id="newDOB"
            value={newDOB}
            onChange={(e) => setNewDOB(e.target.value)}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="newGender">New Gender:</label>
          <input
            type="text"
            id="newGender"
            value={newGender}
            onChange={(e) => setNewGender(e.target.value)}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="newEducation">New Education:</label>
          <input
            type="text"
            id="newEducation"
            value={newEducation}
            onChange={(e) => setNewEducation(e.target.value)}
          />
        </div>

        <button onClick={handleUpdate}>Update Profile</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f8d5e6',
    borderRadius: '10px',
    textAlign: 'left',
    marginTop: '-50vh',
    padding: '40px',
    width: '600px',
    marginLeft: '50vw',
    display: 'inline-block',
  },
  formGroup: {
    marginBottom: '15px',
  },
};

export default ProfileUpdate;
