const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  // Configuration for your email service
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

const sendOtpEmail = async (toEmail, otp, email, password) => {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: toEmail,
    subject: 'Your OTP for Signup',
    text: `Your OTP is: ${otp}`,
  };

  try {
    // Access email and password here if needed
    console.log('Received email:', email);
    console.log('Received password:', password);

    await transporter.sendMail(mailOptions);
    console.log(`OTP sent to ${toEmail}: ${otp}`);
    return true; // Email sent successfully
  } catch (error) {
    console.error('Error sending OTP:', error.message);
    return false; // Error sending email
  }
};


