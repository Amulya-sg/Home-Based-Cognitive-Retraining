import { useState } from 'react';
import './ForgotPassword.css';
import axios from 'axios';

function ForgotPassword() {
    const [formData, setFormData] = useState({
        email: '',
        otp: '',
        newPassword: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleGenerateOTP = async () => {
        try {
            const response = await axios.post('http://localhost:3001/generateOTP', {
                email: formData.email,
            });

            if (response.data.message === 'OTP sent successfully') {
                console.log('OTP sent successfully');
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

        if (formData.newPassword !== formData.confirmPassword) {
            console.error('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/forgotPassword', formData);

            console.log(response.data.message);

            if (response.data.message === 'Password changed successfully') {
                console.log('Password changed successfully');
                redirectToLogin();
            } else {
                
                console.error('Password change failed');
            }
        } catch (error) {
            console.error('Unexpected error:', error);
        }
    };

    return (
        <div className="forgot-password-page">
            <div className="forgot-password-container">
                <form onSubmit={handleSubmit} className="forgot-password-form">
                    <h2 className="forgot-password-title">Forgot Password</h2>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        OTP:
                        <input
                            type="text"
                            name="otp"
                            value={formData.otp}
                            onChange={handleChange}
                            required
                        />
                        <button type="button" onClick={handleGenerateOTP}>
                            Generate OTP
                        </button>
                    </label>
                    <br />
                    <label>
                        New Password:
                        <input
                            type="password"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Confirm New Password:
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />
                    <button type="submit">Change Password</button>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
