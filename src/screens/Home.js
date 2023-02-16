import React, { useState } from 'react';
import SinglePlayer from './Single';
import TwoPlayers from './TwoPlayer';

const Home = () => {
  const [gameModeSelected, setGameModeSelected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedGameMode, setSelectedGameMode] = useState('');

  const handleSelectSinglePlayer = () => {
    setSelectedGameMode('single');
    setGameModeSelected(true);
    setShowModal(true);
  };

  const handleSelectTwoPlayers = () => {
    setSelectedGameMode('multi');
    setGameModeSelected(true);
    setShowModal(true);
  };

  const handleGoHome = () => {
    setGameModeSelected(false);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-700 flex flex-col justify-center items-center">
      {!gameModeSelected && (
        <div className="bg-gray-400 rounded-lg p-12">
          <h1 className="text-4xl mb-4">Tic Tac Toe</h1>
          <p className="text-lg mb-4">Please Choose a Game Mode:</p>
          <nav>
            <ul className="flex justify-center items-center">
              <li className="mx-4">
                <button
                  onClick={handleSelectSinglePlayer}
                  className="text-lg px-4 py-2 rounded-md bg-orange-700 text-white hover:bg-orange-800"
                >
                  1P
                </button>
              </li>
              <li className="mx-4">
                <button
                  onClick={handleSelectTwoPlayers}
                  className="text-lg px-4 py-2 rounded-md bg-blue-700 text-white hover:bg-blue-800"
                >
                  2P
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-400 rounded-lg p-8">
            <button
              onClick={handleGoHome}
              className="absolute top-4 right-4 text-lg px-4 py-2 rounded-md bg-red-700 text-white hover:bg-red-800"
            >
              X
            </button>
            {selectedGameMode === 'single' && <SinglePlayer />}
            {selectedGameMode === 'multi' && <TwoPlayers />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
