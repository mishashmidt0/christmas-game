import React from 'react';
import { Header } from '../components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './Main';
import { ChristmasTree } from './ChristmasTree';
import { Games } from './Games';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path={'/'} element={<Main />} />
          <Route path={'/games'} element={<Games />} />
          <Route path={'/ChristmasTree'} element={<ChristmasTree />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
