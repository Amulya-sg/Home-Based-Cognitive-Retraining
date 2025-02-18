import { useState } from "react";
import "./reports.css";
import Navbar from "./Navbar2.0";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Reports = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  const ID = localStorage.getItem("userId");
  

  const handleTestAttempt = () => {
    navigate(`/Reports/QuizPage/${ID}`);
    console.log("Test attempted!");
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("userId", ID);

      axios.post("http://localhost:3001/UploadFile", formData, {});

      window.alert("File uploaded successfully!");

      console.log("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="column">
            <p className="text">Attempt Test</p>
          </div>
          <div className="column">
            <button className="Button" onClick={handleTestAttempt}>
              Attempt
            </button>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <p className="text">Upload Document</p>
          </div>
          <div className="column">
            <div className="file-upload">
              <label htmlFor="file-input" className="file-label">
                Choose File(Limit:5MB)
              </label>
              <input id="file-input" type="file" onChange={handleFileUpload} />
              <p>Selected File: {selectedFile ? selectedFile.name : "None"}</p>
            </div>
          </div>
        </div>
        {/* Display Result */}
        {Result && (
          <div className="row">
            <div className="column">
              <p className="text">Test Result</p>
            </div>
            <div className="column">
              <p>{Result}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;
