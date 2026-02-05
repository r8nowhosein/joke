import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import FetchJoke from './components/FetchJoke.jsx'
import About from './pages/About.jsx'
import FavePage from './pages/FavePage.jsx';



function App() {
const [faves, setFaves] = useState([]);

  return (
    <>
     <header>
       <nav>
        <ul className="flex gap-4 p-4 justify-center text-2xl ">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/faves">Fave Jokes</Link></li>
        </ul>
      </nav>
     </header>
    <div className="App">
        <Routes>
          <Route path="/" element={<FetchJoke faves={faves} setFaves={setFaves} />} />
          <Route path="/about" element={<About />} />
          <Route path="/faves" element={<FavePage faves={faves} />} />
        </Routes>
      
    </div>    
  
    </>
  )
}

export default App
