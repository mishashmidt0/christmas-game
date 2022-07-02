import React from 'react';
import { Header } from '../components/header/Header';
import { BrowserRouter } from 'react-router-dom';
import { Navigate } from '../components/Navigate';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Navigate />
      </div>
    </BrowserRouter>
  );
}

export default App;
