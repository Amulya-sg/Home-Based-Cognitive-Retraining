import '../styles/GameOver.css';

function GameOver({highestScore, overlayStyle, modalStyle, resetGame}) {
    return (
        <div id="overlay" style={overlayStyle}>
            <div id="game-over-modal" style={modalStyle}>
                <h2>You lost...</h2>
                <h3>Higherst Score: {highestScore}</h3>
                <p>You clicked the same colour twice.</p>
                <button onClick={resetGame}>Try Again</button>
            </div>
        </div>
    )
}
export default GameOver