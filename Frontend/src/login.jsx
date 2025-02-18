import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showInvalidPopup, setShowInvalidPopup] = useState(false);
    const navigate = useNavigate();

    const forgotPassword = () => {
        navigate('/forgotPassword');
    };

    const signUp = () => {
        navigate('/register');
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/login', {
                email,
                password,
            });

            console.log(response);
            const ID = response.data._id;

            if (response.statusText === 'OK') {
                localStorage.setItem('userId', ID);
                window.alert("Login Successful.");
                navigate(`/actualhome/${ID}`);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response && error.response.status === 401) {
                    console.error('Unauthorized: Invalid email or password');
                    // Show the invalid credentials popup
                    setShowInvalidPopup(true);
                } else {
                    console.error('AxiosError response:', error.response);
                }
            } else {
                console.error('Error during login:', error.message);
            }
        }
    };

    return (
        <div style={styles.pageWrapper}>
            <div style={styles.container}>
                <h2 style={styles.heading}>Login</h2>
                <form>
                    <div style={styles.formGroup}>
                        <label htmlFor="email" style={styles.label}>
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={styles.input}
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="password" style={styles.label}>
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={styles.input}
                        />
                    </div>
                    <button type="button" onClick={handleLogin} style={styles.button}>
                        Login
                    </button>
                </form>
                <button style={styles.label} onClick={forgotPassword}>
                    Forgot Password?
                </button>
                <button style={styles.link} onClick={signUp}>
                    Don't have an account? Sign up here
                </button>

                {/* Popup for invalid credentials */}
                {showInvalidPopup && (
                    <div style={styles.invalidPopup}>
                        <p>Invalid credentials. Please try again.</p>
                        <button onClick={() => setShowInvalidPopup(false)}>Close</button>
                    </div>
                )}
            </div>
        </div>
    );
}

const styles = {
    pageWrapper: {
        // backgroundImage: "url('https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: 'cover',
        backgroundColor: '#F7DEEA',
        height: '100vh',
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'left',

    },
    container: {
        maxWidth: '400px',
        margin: 'auto',
        padding: '20px',
        border: '2px solid #555', 
        borderRadius: '10px', 
        backgroundColor: '#f8d5e6', 
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
    },
    button: {
        backgroundColor: '#b080b1',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginBottom:'15px',
    },
    link: {
        textAlign: 'center',
        marginTop: '15px',
    },
    invalidPopup: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(255, 0, 0, 0.8)',
        padding: '20px',
        borderRadius: '5px',
        textAlign: 'center',
        color: 'white',
        zIndex: 1000,
    },
};
export default Login;
