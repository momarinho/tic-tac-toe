import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import SinglePlayer from './Single';
import TwoPlayers from './TwoPlayer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl mb-4">Tic Tac Toe</h1>
      <p className="text-lg mb-2">Please Choose a Game Mode:</p>
      <nav>
        <ul className="flex justify-center items-center">
          <li className="mx-4">
            <Link
              to="/singleplayer"
              className="text-lg px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
            >
              Single Player
            </Link>
          </li>
          <li className="mx-4">
            <Link
              to="/twoplayer"
              className="text-lg px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
            >
              Two Player
            </Link>
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
