import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './Acontext';
import Login from './login';
import Home from './home';
import Profile from './profile';
import ForgotPassword from './forgotPassword';
import About from './about';
import Contact from './contact';
import Others from './actualhome';
import ProfileUpdate from './UpdateProfile';
// import Sidebar from './sidebar';
import Appp from './ColorMemo';
import ScorePage from './stats';
import QuizPage from './QuizPage';
import Reports from './reports';
import Hangman from './src_hang/hangman';
// import Keyboard from './src_hang/Keyboard';
import Typing from './src_typing/typing';
// import WordSearch from './src_wordsearch/WordSearch';
import Game1 from './MchatRtest';
// import Game from './src_fastMathFrenzy/components/game';
import MemoryGame from './src_memory/MemoryGame';
// import scrapeArticles from './WebScraped';
import Webscraped from './WebScraped';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function App(){
root.render(
  <BrowserRouter>
    {/* <AuthProvider> */}
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile/:ID" element={<Profile />} />
        <Route path="/profile/:ID/UpdateProfile" element={<ProfileUpdate />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/actualhome/:ID" element={<Others />} />
        <Route path="/actualhome/ColorMemo/:ID" element={<Appp />} />
        <Route path="/stats/:ID" element={<ScorePage />} />
        <Route path="/Reports/:ID" element={<Reports />} />
        <Route path="/Reports/QuizPage/:ID" element={<QuizPage />}/>
        <Route path="/actualhome/Hangman/:ID" element={<Hangman />} />
        <Route path="/actualhome/Typing/:ID" element={<Typing />} />
        {/* <Route path="/actualhome/FastMathFrenzy/:ID" element={<Game />} /> */}
        <Route path="/WebScraped" element={<Webscraped />} />
        <Route path="/actualhome/Memory/:ID" element={<MemoryGame />} />
        <Route path="/actualhome/Jigsaw/:ID" element={<Game1 />} />
        {/* <Route path="/wordsearch" element={<WordSearch />} /> */}
        {/* <Route path="/typing" element={<Typing />} /> */}


     </Routes>
    {/* </AuthProvider> */}
  </BrowserRouter>
);
}
export default App;