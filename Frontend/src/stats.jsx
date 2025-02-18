import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import Navbar from './Navbar2.0';

const ScorePage = () => {
  const [randomScores, setRandomScores] = useState([]);

  useEffect(() => {
    const scoresFromLocalStorage = [
      parseInt(localStorage.getItem('ColorMemoScore')) || 0,
      parseInt(localStorage.getItem('HangmanScore')) || 0,
      parseInt(localStorage.getItem('Jigsawscore')) || 0,
      parseInt(localStorage.getItem('Memoryscore')) || 0,
    ];

    setRandomScores(scoresFromLocalStorage);
  }, []);

  const chartOptions = {
    chart: {
      id: 'scores-chart',
    },
    xaxis: {
      categories: ['Color Memo', 'Hangman', 'Jigsaw', 'Memory'],
    },
  };

  const chartSeries = [
    {
      name: 'Scores',
      data: randomScores,
    },
  ];

  return (
    <div>
      <Navbar />
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2> Your Stats</h2>
        <div style={{ marginBottom: '20px' }}>
          <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={350} />
        </div>
        <div style={{ textAlign: 'left' }}>
          <h3>Scores:</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {randomScores.map((score, index) => (
              <li key={index}>{`Game ${index + 1}: ${score}`}</li>
            ))}

          </ul>
        <h4>Note: Typing doesnt have any Score optimised for it right now</h4>  
        </div>
      </div>
    </div>
  );
};

export default ScorePage;
