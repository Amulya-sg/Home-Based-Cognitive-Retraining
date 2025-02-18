import  { useState, useEffect } from 'react';

import Navbar from './Navbar2.0';
import axios from 'axios';
import ProfileUpdate from './UpdateProfile'; // Import the ProfileUpdate component

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isUpdatingProfile, setUpdatingProfile] = useState(false);
   

  const ID = localStorage.getItem('userId');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.post('http://localhost:3001/profile', { userId: ID }, { withCredentials: true });
        setUserDetails(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user details:', error);
        if (error.response) {
          setError(`Error: ${error.response.status} - ${error.response.data.message}`);
        } else {
          setError('An unexpected error occurred.');
        }
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [ID]);

  const handleUpdateProfileClick = () => {
    setUpdatingProfile(!isUpdatingProfile);
  };

  return (
    <div >
      <Navbar />
      <div style={styles.container}>
        <h1>Your Profile</h1>

        {loading && <p>Loading...</p>}

        {error && <p style={{ color: 'red' }}>{error}</p>}

        {userDetails && (
          <div>
            <p>Name: {userDetails.username}</p>
            <p>Email: {userDetails.email}</p>
            <p>Address: {userDetails.Address}</p>
            <p>Date Of Birth:{userDetails.DateOfBirth}</p>
            <p>Gender: {userDetails.Gender}</p>
            <p>Education: {userDetails.Education}</p>
            <p>testResult: {userDetails.TestResult}</p>

             
            
            {/* Button to toggle the ProfileUpdate component visibility */}
            <button onClick={handleUpdateProfileClick}>Update Profile</button>

            {isUpdatingProfile && <ProfileUpdate />} {/* Conditionally render ProfileUpdate */}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#f8d5e6',
    borderRadius: '10px',
    textAlign: 'left',
    marginTop: '10vh',
    padding: '40px',
    width: '600px',
    marginLeft: '5vw',

  },
  body:{
    backgroundColor : '#f8d5e6',
    
  }
};

export default Profile;
