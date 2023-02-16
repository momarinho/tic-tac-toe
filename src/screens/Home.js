import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SinglePlayer from './Single';
import TwoPlayers from './TwoPlayer';

const Home = () => {
  return (
    <div className=''>
      <h1 className=''>Tic Tac Toe</h1>
      <p>Please Choose a Game Mode:</p>
      <nav>
        <ul>
          <li>
            <Link to="/singleplayer">Single Player</Link>
          </li>
          <li>
            <Link to="/twoplayer">Two Player</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/singleplayer" element={<SinglePlayer />}></Route>
        <Route path="/twoplayer" element={<TwoPlayers />}></Route>
      </Routes>
    </div>
  );
};

export default Home;
