const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');
const PaitentModel = require('./models/paitent.js');
// const crypto = require('crypto');
// const model = require('./ML_Model/MLmodel.py');
const { spawn } = require('child_process');
const { data } = require('autoprefixer');

// const process = spawn('python',['MLmodel.py',text]);


const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));



// mongodb+srv://vijaysaiuchiha:Sasuke05@cognitiveretraining.czz5xi7.mongodb.net/patient
mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });

    app.post('/register', async (req, res) => {
      const { username, email, password } = req.body;
      const patientData = new PaitentModel({ username, email, password });
    
      try {
        const savedPatient = await patientData.save();
        res.status(200).json({ message: 'Registered Successfully', data: savedPatient });
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });


app.post('/GenerateOtp' , async (req,res) => {
  const{ email } = req.body;
  try {
    // const patient = await PaitentModel.findOne({ email });
    const OTP = generateOtp(6);
    // patient.otp = OTP
    // await patient.save();
    // console.log(patient.otp);
    const transporter = nodemailer.createTransport({
      service : 'gmail',
      auth : {
        user: 'nosweets129@gmail.com',
        pass: 'lmou tuhr fhzb kjyi',
      }
    });

    const mailOptions = {
      from :'nosweets129@gmail.com',
      to:email,
      subject:'OTP Verification',
      text:`Your OTP is :${OTP}`
    }

    transporter.sendMail(mailOptions , (error , info)=>{
      if(error){
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Error sending OTP email' });
      }
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'OTP sent successfully' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

})





app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const patients = await PaitentModel.find({ email, password });

    if (patients.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const patient = patients[0];

    res.json(patient);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
function generateOtp(length){
  const digits = '0123456789';
  let OTP = '';
  
  for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * digits.length);
      OTP += digits[index];
  }
  
  return OTP;
}

app.post('/generateOtp' , async (req,res) => {
  const{ email } = req.body;
  try {
    const patient = await PaitentModel.findOne({ email });
    const OTP = generateOtp(6);
    patient.otp = OTP
    await patient.save();
    console.log(patient.otp);
    const transporter = nodemailer.createTransport({
      service : 'gmail',
      auth : {
        user: 'nosweets129@gmail.com',
        pass: 'lmou tuhr fhzb kjyi',
      }
    });

    const mailOptions = {
      from :'nosweets129@gmail.com',
      to:email,
      subject:'OTP Verification',
      text:`Your OTP is :${OTP}`
    }

    transporter.sendMail(mailOptions , (error , info)=>{
      if(error){
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Error sending OTP email' });
      }
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'OTP sent successfully' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

})

app.post('/forgotPassword', async (req, res) => {
    const { email, newPassword ,otp } = req.body;
    try {
        const patient = await PaitentModel.findOne({ email });

        if (!patient) {
            return res.status(404).json({ error: 'User not found' });
        }
        if(patient.otp == otp){
        patient.password = newPassword;
        await patient.save();
        res.status(200).json({ message : 'Password changed successfully' })
      }
        

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/profile', async (req, res) => {
  try {
    const userId = req.body.userId;
    const patient = await PaitentModel.findById(userId);

    if (!patient) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      username: patient.username,
      email: patient.email,
      Address:patient.Address,
      Education:patient.Education,
      Gender:patient.Gender,
      DateOfBirth:patient.DateOfBirth,
      TestResult:patient.autism
  });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/updateProfile', async (req, res) => {
    try {
      const { userId, newUsername, newEmail, newAddress, newDOB , newGender, newEducation } = req.body;
  
      // Find the user by ID
      const patient = await PaitentModel.findById(userId);
  
      if (!patient) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      
      if (newUsername) {
        patient.username = newUsername;
      }
  
      if (newEmail) {
        patient.email = newEmail;
      }
  
      if (newAddress) {
        patient.Address = newAddress;
      }
      if (newDOB) {
        patient.DateOfBirth = newDOB;
      }
      if (newGender) {
        patient.Gender = newGender;
      }
      if (newEducation) {
        patient.Education = newEducation;
      }
  
      await patient.save();
  
      res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
      console.error('Error updating profile:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
app.post('/colorMemo', async(req,res)=>{
    try {
        const{ userId , Cscore }= req.body;
        const patient = await PaitentModel.findById(userId);
        if (!patient) {
            return res.status(404).json({ error: 'User not found' });
          }
        if(Cscore){
            patient.colorMemoscore = Cscore;
        }
        await patient.save();
        res.status(200).json({message:'Score uploaded successfully'})

        
    } catch (error) {
        console.error('Error updating profile:', error);
      res.status(500).json({ error: 'Internal Server Error' });
        
    } 

});

const storage = multer.memoryStorage()
const upload = multer({ 
    storage : storage,
    limits:{
        fileSize: 1024 * 1024 * 5,
    }
 });

app.post('/UploadFile',upload.single('file'), async(req,res) => {
    try {
        const { userId } = req.body;
        console.log(userId);
        await PaitentModel.findOneAndUpdate(
        { _id: userId },
        {
          $push: {
            files: {
              name: req.file.originalname,
              data: req.file.buffer,
            },
          },
        }
      );
        res.status(200).json({ message: 'File uploaded successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }

});

app.use(bodyParser.json());

app.post('/predict', async(req, res) => {
    try {
        const { userId , answer } = req.body;
        const patient =await PaitentModel.findById(userId);
        console.log(userId);
        console.log(answer);

        const pythonProcess = spawn('python', ['my_model1.py'], { cwd: __dirname });

        pythonProcess.stdin.write(JSON.stringify(answer));
        pythonProcess.stdin.end();

        pythonProcess.stdout.on('data', async(data) => {
          if(data == true){
            result = "You have a High risk of Autism."
          }
            result = "You dont have a risk of Autism."
           
        
        patient.autism = result;
        await patient.save()
        
            console.log(`Python Script Output this is the data that is written out by python: ${data}`);
        });


        pythonProcess.stderr.on('data', (data) => {
          console.error(`Python Script Error: ${data}`);
        });

        pythonProcess.on('close', (code) => {
            console.log(`Python Script Exited with code ${code}`);
            res.json({ message: 'Prediction completed. Check server logs for details.' });
       });

    } catch (error) {
        console.error('Error predicting:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    

});

const{ JSDOM }= require('jsdom')
import('node-fetch').then((nodeFetch) => {
  const fetch = nodeFetch.default;
app.get('/webscraped', async(req,res)=>{
  try{
  const response = await fetch('https://www.spectrumnews.org/news/');
  const html = await response.text();
    const dom = new JSDOM(html)
    const document = dom.window.document
    const page = document.querySelector('.col-9')?.textContent

    console.log("page",page)
    res.send(html);
  }
  catch(error){
    console.error('error during fetch:', error);
    res.status(500).send('internal server error');

  }
});
});



const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
    console.error('Server failed to start:', err);
});
