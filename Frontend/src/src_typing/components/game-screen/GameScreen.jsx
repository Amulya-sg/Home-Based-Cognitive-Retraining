// import React from 'react'
import Header from '../header/Header'
import Word from '../content_word/word'
import Bottom from '../bottom/Bottom'
import PropTypes from 'prop-types';

const GameScreen = ({
    words,
    setWords,
    typingWord,
    setTypingWord,
    matchedWord,
    setMatchedWord,
    health,
    setHealth,
    score,
    setScore,
    currentWord,
    setCurrentWord,
    level,
    setLevel,
    setCurrentState,
}) => {

  return (
    <div className="game">
    <Header />
    <div className="content">
      {words.map((word, index) => word !== '+' &&(
        <Word
        key={index} 
        word={word} 
        words={words} 
        setWords={setWords} 
        typingWord={typingWord} 
        setTypingWord={setTypingWord} 
        matchedWord={matchedWord} 
        setMatchedWord={setMatchedWord} 
        health={health}
        setHealth={setHealth}
        score={score}
        setScore={setScore}
        level={level}
        />
      ))}
    </div>
    <Bottom currentWord={currentWord} setCurrentState={setCurrentState} setLevel={setLevel} typingWord={typingWord} setCurrentWord={setCurrentWord} health={health} score={score} setScore={setScore} />
  </div>
  )
}
GameScreen.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  setWords: PropTypes.func.isRequired,
  typingWord: PropTypes.string.isRequired,
  setTypingWord: PropTypes.func.isRequired,
  matchedWord: PropTypes.string.isRequired,
  setMatchedWord: PropTypes.func.isRequired,
  health: PropTypes.number.isRequired,
  setHealth: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  currentWord: PropTypes.string.isRequired,
  setCurrentWord: PropTypes.func.isRequired,
  level: PropTypes.string.isRequired,
  setLevel: PropTypes.func.isRequired,
  setCurrentState: PropTypes.func.isRequired,
};


export default GameScreen