import Navbar from './Navbar2.0.jsx';
import './actualhome.css';
import { useNavigate } from 'react-router-dom';
import p1 from './images/ColorMemo.jpg';
import p2 from './images/Hangman.jpg';
import p3 from './images/Typing.jpg';
import p4 from './images/memory.jpg';
// import p5 from './images/fastMathFrenzy.jpg';
import p6 from './images/jigsaw.jpg'



const ID = localStorage.getItem('userId');

const App = () => {
  const navigate = useNavigate();

  const handleGridItemClick = (game) => {
    navigate(`/actualhome/${game}/${ID}`);
  };

  const games = [
    { id: 1, name: 'ColorMemo', image: p1 },
    { id: 2, name: 'Hangman', image: p2 },
    { id: 3, name: 'Typing', image: p3 },
    // { id: 4, name: 'FastMathFrenzy', image: p5 },
    { id: 5, name: 'Memory', image: p4 },
    { id: 6, name: 'Jigsaw', image: p6 },

  ];

  return (
    <>
      <Navbar />
      <div className="Container">
        <div className="homeContainer">
          {games.map((game) => (
            <div key={game.id} className="grid-item" onClick={() => handleGridItemClick(game.name)}>
              <img className='images' src={game.image} alt={game.name} />
              <p>{game.name}</p>
            </div>
          ))}
        </div>
        <div className="Text">
          <h1>Try out your Brain's power here</h1>
        </div>
      </div>
    </>
  );
};

export default App;



