import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    otp: '',
});

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleGenerateOTP = async () => {
    try {
        const response = await axios.post('http://localhost:3001/GenerateOTP', {
            email: formData.email,
        });

        if (response.data.message === 'OTP sent successfully') {
            console.log('OTP sent successfully');
            window.alert("OTP Sent Successfully. Please check your Email.")
        } else {
            console.error('Invaild Email.');
        }
    } catch (error) {
        console.error('Unexpected error:', error);
    }
};

const redirectToLogin = () => {
    window.location.href = '/login';
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:3001/register', formData);

        console.log(response.data.message);

        if (response.data.message === 'Registered Successfully') {
            console.log('Password changed successfully');
            window.alert('Registered Successfully');
            redirectToLogin();
        } else {
            
            console.error('Registration Failed failed');
            window.alert('Registration Failed');
        }
    } catch (error) {
        console.error('Unexpected error:', error);
    }
};

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
      <h2 style={styles.heading}>Signup</h2>
      <form>
        <div style={styles.formGroup}>
          <label htmlFor="username" style={styles.label}>
            Full Name:
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="otp" style={styles.label}>
            OTP:
          </label>
          <input
            type="text"
            name="otp"
            value={formData.otp}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <button type="button" onClick={handleGenerateOTP} style={styles.button}>
          Generate OTP
        </button>

        <button type="button" onClick={handleSubmit} style={styles.button}>
          Register
        </button>
      </form>
      <p style={styles.link}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
    </div>
  );
}

const styles = {
  pageWrapper: {
    // backgroundImage: "url('https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: 'cover',
    backgroundColor:'#F7DEEA' ,
    height: '100vh',
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',

},
  container: {
    width: '400px',
    margin: 'auto',
    padding: '20px',
    border: '2px solid #555', 
    borderRadius: '10px', 
    backgroundColor:'#f8d5e6' , 
},
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    color:'blue',
  },
  button: {
    backgroundColor:'#b080b1' ,
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  link: {
    textAlign: 'center',
    marginTop: '15px',
  },
};

export default Signup;
