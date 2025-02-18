import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import { useNavigate } from 'react-router-dom';




const styles = {

  container: {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',    
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: "url('https://i.postimg.cc/50Y67xXK/brain2.jpg')", // Replace with your actual image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  content: {
    textAlign: 'center',
  },
  title: {
    fontSize: '6em',
    fontWeight: 800,
    color: '#fff', 
    marginTop:"-200px",
    marginBottom: '10px',
    width:'100%', 
  },
  text: {
    fontSize:'',
    color: '#fff',
  },
  image: {
    maxWidth: '100%', 
    marginTop: '20px', 
  },
  button: {
    marginBottom: "50px",
    color: "black",
    backgroundColor: "#e9ecef",
    borderRadius: '30px',
    transition: 'background-color 0.3s ease', // Add a smooth transition effect
  
    '&:hover': {
      backgroundColor: '#000000',
      color:"#e9ecef  !important", // Change the background color on hover
      cursor: 'pointer', // Change cursor to pointer on hover (optional)
    },
  }
  ,
};

function Home() {
  const Navigate = useNavigate()
  function GotoLogin(){
    Navigate('/login');
  }
  return (
    <div>
      <Navbar  />
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.title}>
            <h>Discover your Potential</h>
          </div>
          <div style={styles.text}>
            <p>Exercise memory ,flexibility, and more with the brain training program.</p>
          </div>
        </div>

       

        {/* Your existing buttons */}
        <button style={styles.button} onClick={GotoLogin}>Get Started</button>
      </div>
    </div>
  );
}

export default Home;
