// QuizPage.js
import { useState } from "react";
import "./QuizPage.css";
import axios from "axios";
// import { Navigate } from "react-router-dom";

const ID = localStorage.getItem("userId");

const questionsData = [
  {
    question: "Does your child look at you when you call his/her name?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question: "How easy is it for you to get eye contact with your child? ",
    options: ["Yes", "No"],
    // correctAnswer: "No",
  },
  {
    question: "Does your child point to indicate that s/he wants something? (e.g. a toy that is out of reach)",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question: "Does your child point to share interest with you? (e.g. pointing at an interesting sight) ",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question: "Does your child pretend? (e.g. care for dolls, talk on a toy phone)",
    options: ["Yes", "No"],
    // correctAnswer: "No",
  },
  {
    question: "Does your child follow where you are looking? ",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question:
      "If you or someone else in the family is visibly upset, does your child show signs of wanting to comfort them? (e.g. stroking hair, hugging them)",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question: "Did your child speak their first words?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question: "Does your child use simple gestures? (e.g. wave goodbye)",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  {
    question: "Does your child stare at nothing with no apparent purpose?",
    options: ["Yes", "No"],
    // correctAnswer: "Yes",
  },
  
  // Add more questions as needed
];

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(questionsData.length).fill(null)
  );
  const [score, setScore] = useState(0);
  // const ID = localStorage.getItem('userId');

  const handleOptionSelect = (option) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = option;
    setSelectedOptions(updatedOptions);
  };

  const handleNextQuestion = () => {
    // Check if the selected option is correct and update the score
    if (
      selectedOptions[currentQuestion] ===
      questionsData[currentQuestion].correctAnswer
    ) {
      setScore(score + 1);
    }

    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    // Move to the previous question
    setCurrentQuestion(currentQuestion - 1);
  };
  const handleQuizCompletion = async () => {
    // Convert 'Yes' to 1 and 'No' to 0
    var answers = selectedOptions.map((option) => (option === "Yes" ? 1 : 0));
    answers[answers.length - 1] = answers[answers.length - 1] === 1 ? 0 : 1;
    console.log(answers);

    
    try {
      const response = await axios.post("http://localhost:3001/predict", {userId : ID , answer : answers}, );

      // Handle the response as needed
      console.log("Backend response:", response.data);
      window.alert("Test result Recorded. Check Results in Profile.");
    } catch (error) {
      console.error("Error posting quiz results:", error);
    }
  };

  return (
    <div className="quiz-container">
      {/* Apply styles to the main container */}
      {currentQuestion < questionsData.length ? (
        <div className="question-container">
          {/* Apply styles to the question container */}
          <h1>{questionsData[currentQuestion].question}</h1>
          <div>
            {questionsData[currentQuestion].options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={option}
                  name={`question${currentQuestion}`} // unique name for each question's options
                  value={option}
                  checked={selectedOptions[currentQuestion] === option}
                  onChange={() => handleOptionSelect(option)}
                />
                <label htmlFor={option} className="text">
                  {option}
                </label>
              </div>
            ))}
          </div>
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
          <button onClick={handleNextQuestion}>Next</button>
          {currentQuestion === questionsData.length - 1 && (
            <button onClick={handleQuizCompletion}>Finish</button>
          )}
        </div>
      ) : (
        <div className="result-container">
          {/* Apply styles to the result container */}
          <h1>Quiz completed!</h1>
          {/* <p>{questionsData}</p> */}
          {/* <p>{selectedOptions}</p> */}
          console.log(selectedOptions);
        </div>
      )}
    </div>
  );
  
};

export default QuizPage;
