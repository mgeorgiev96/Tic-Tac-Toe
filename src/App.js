import React from 'react';
import './css/style.css'
import { TicTacProvider } from './Context';
import Game from './Game';
import Header from './Header';
import Loader from './Loader';

function App() {
  return (
    <TicTacProvider>
       <Header/>
      <div className='container'>
        <Game/>
      </div>
      <Loader/>
    </TicTacProvider>
  );
}

export default App;
