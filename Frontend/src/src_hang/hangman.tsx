import { useState } from "react";
import styled from "styled-components";
import Drawing from "./Drawing";
import Keyboard from "./Keyboard";
import Word from "./Word";
import words from "./wordList.json";
import React from "react";
import Navbar from "../Navbar2.0"

const tryAgainIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 16 16">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.75 8a4.5 4.5 0 0 1-8.61 1.834l-1.391.565A6.001 6.001 0 0 0 14.25 8A6 6 0 0 0 3.5 4.334V2.5H2v4l.75.75h3.5v-1.5H4.352A4.5 4.5 0 0 1 12.75 8z"
      clipRule="evenodd"
    />
  </svg>
);

// function getRandomWord(arr: string[]) {
//   return arr[Math.floor(Math.random() * arr.length)];
// }

interface WordData {
  word: string;
  hint: string;
}

function getRandomWord(wordDataArray: WordData[]) {
  const randomIndex = Math.floor(Math.random() * wordDataArray.length);
  return wordDataArray[randomIndex];
}

let score = 0;

export default function Hangman() {
  const [wordToGuess, setWordToGuess] = useState<WordData>(getRandomWord(words));
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.word.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.word
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = (letter: string) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    }
  };

  const restartGame = () => {
    if (isWinner) {
      score += 25;
    } else {
      score = 0;
    }

    setWordToGuess(getRandomWord(words));
    setGuessedLetters([]);
    localStorage.setItem("HangmanScore", score.toString());
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Title>Hangman(Play in FullScreen)</Title>

        {!(isWinner || isLoser) ? (
          <Drawing numberOfGuesses={incorrectLetters.length} />
        ) : (
          <EndGame isWinner={isWinner}>
            {isWinner && `You are a winner! Score: ${score}`}
            {isLoser && "Nice try..."}
          </EndGame>
        )}

        <Word
          reveal={isLoser}
          wordToGuess={wordToGuess.word}
          guessedLetters={guessedLetters}
        />

        <p>Hint: {wordToGuess.hint}</p>

        {(isWinner || isLoser) && (
          <TryAgainButton onClick={restartGame}>{tryAgainIcon}</TryAgainButton>
        )}

        <Keyboard
          disabled={isWinner || isLoser}
          correctLetters={guessedLetters.filter((letter) =>
            wordToGuess.word.includes(letter)
          )}
          incorrectLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </Container>
    </div>
  );
}




const Container = styled.div`
  margin: 0 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  min-height: 100vh;
  max-width: 800px;
  font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  position: relative;

  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  padding: 15px;
`;

// const EndGame = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 1rem;
//   text-align: center;
//   font-size: 1.3rem;
//   font-weight: bold;
//   color: ${(props: { isWinner: boolean }) =>
//     props.isWinner ? "#ffd900" : "black"};

//   @media (min-width: 768px) {
//     font-size: 2rem;
//   }
const EndGame = styled.div<{ isWinner: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  color: ${(props) => (props.isWinner ? "#ffd900" : "black")};

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;



const TryAgainButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
  border: 3px solid black;
  border-radius: 1rem;
  font-size: 2.5rem;
  background: none;
  color: black;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #16a085;
  }

  @media (min-width: 768px) {
    font-size: 2.3rem;
  }
`;

const Footer = styled.footer`
  margin: 0 auto;
  padding: 0.5rem;
  display: block;
  width: max-content;
  font-weight: 700;
  color: black;

  a {
    color: #0044ff;
    font-style: italic;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;