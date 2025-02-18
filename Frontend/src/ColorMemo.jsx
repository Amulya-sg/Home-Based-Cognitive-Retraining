import { useState, useEffect } from 'react';
import axios from 'axios';
import './Appp.css';
import Title from './components/Title';
import Stats from './components/Stats';
import Cards from './components/Cards';
import GameOver from './components/GameOver';
import Navbar from './Navbar2.0';

let overlayStyle = {
  visibility: 'hidden',
  opacity: '0%',
};

let modalStyle = {
  transform: 'translate(0%, 0%)',
};

function Appp() {
  const [level, setLevel] = useState(1);
  const [gameState, setGameState] = useState('');
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  useEffect(() => {
    gameState === 'next level' && setLevel(level + 1);

    return () => {
      setGameState('');
    };
  }, [gameState, level]);

  useEffect(() => {
    if (gameState === 'game over') {
      overlayStyle = {
        opacity: '100%',
      };
      modalStyle = {
        transform: 'translate(0%, 50%)',
      };
    }

    return () => {
      overlayStyle = {
        visibility: 'hidden',
        opacity: '0%',
      };

      modalStyle = {
        transform: 'translate(0%, 0%)',
      };
    };
  }, [gameState]);

  useEffect(() => {
    score > highestScore && setHighestScore(score);
  }, [score, highestScore]);

  const resetGame = () => {
    const ID = localStorage.getItem('userId');
    localStorage.setItem('ColorMemoScore', highestScore);
    axios
      .post('http://localhost:3001/colorMemo', { Cscore: highestScore, userId: ID })
    setGameState('new game');
    setScore(0);
    setLevel(1);
  };

  return (
    <>
    <div>
      <Navbar />
      <header>
        <Title />
        <Stats level={level} score={score} highestScore={highestScore} />
      </header>
      <main>
        <Cards level={level} gameState={gameState} setGameState={setGameState} setScore={setScore} score={score} />
      </main>
      <GameOver highestScore={highestScore} overlayStyle={overlayStyle} modalStyle={modalStyle} resetGame={resetGame} />
      </div>
    </>
  );
}

export default Appp;
