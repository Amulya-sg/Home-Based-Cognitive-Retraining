// import styled from "styled-components";
// import React from "react";
// interface WordProps {
//   guessedLetters: string[];
//   wordToGuess: string;
//   reveal?: boolean;
// };

// export default function Word({ guessedLetters, wordToGuess, reveal = false }: WordProps) {
//   return (
//     <Container>
//       {wordToGuess.split("").map((letter, id) => (
//         <Border key={id}>
//           <Letter guessedLetters={guessedLetters} letter={letter} reveal={reveal}>
//             {letter}
//           </Letter>
//         </Border>
//       ))}
//     </Container>
//   );
// }

// const Container = styled.div`
//   padding: .5rem;
//   display: flex;
//   gap: 1rem;
//   max-width: 100vw;
//   font-size: 3rem;
//   font-weight: bold;
//   text-transform: uppercase;
//   font-family: monospace;
//   overflow-x: auto !important;

//   @media (min-width: 768px) {
//     font-size: 5rem;
//   }
// `

// const Border = styled.span`
//   border-bottom: .5rem solid black;
// `

// interface Letter {
//   guessedLetters: string[],
//   letter: string,
//   reveal?: boolean
// }

// const Letter = styled.span<Letter>`
//   visibility: ${({ guessedLetters, letter, reveal }) => (guessedLetters.includes(letter) || reveal ? "visible" : "hidden")};
//   color: ${({ guessedLetters, letter, reveal }) => (!guessedLetters.includes(letter) && reveal ? "#d30000" : "black")};
// `



import styled from "styled-components";
import PropTypes from "prop-types";
import React from "react";

interface WordProps {
  guessedLetters: string[];
  wordToGuess: string;
  hint?: string;
  reveal?: boolean;
}

export default function Word({
  guessedLetters,
  wordToGuess,
  hint = "",
  reveal = false,
}: WordProps) {
  return (
    <Container>
      {wordToGuess.split("").map((letter, id) => (
        <Border key={id}>
          <Letter guessedLetters={guessedLetters} letter={letter} reveal={reveal}>
            {letter}
          </Letter>
        </Border>
      ))}
      {hint && <Hint>{hint}</Hint>}
    </Container>
  );
}

Word.propTypes = {
  guessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  wordToGuess: PropTypes.string.isRequired,
  hint: PropTypes.string,
  reveal: PropTypes.bool,
};

const Container = styled.div`
  padding: 0.5rem;
  display: flex;
  gap: 1rem;
  max-width: 100vw;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  font-family: monospace;
  overflow-x: auto !important;

  @media (min-width: 768px) {
    font-size: 5rem;
  }
`;

const Border = styled.span`
  border-bottom: 0.5rem solid black;
`;

interface LetterProps {
  guessedLetters: string[];
  letter: string;
  reveal?: boolean;
}

const Letter = styled.span<LetterProps>`
  visibility: ${({ guessedLetters, letter, reveal }) =>
    guessedLetters.includes(letter) || reveal ? "visible" : "hidden"};
  color: ${({ guessedLetters, letter, reveal }) =>
    !guessedLetters.includes(letter) && reveal ? "#d30000" : "black"};
`;

const Hint = styled.div`
  margin-top: 0.5rem;
  font-size: 1.5rem;
`;
