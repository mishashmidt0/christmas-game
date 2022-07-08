import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { Header } from '../components/header/Header';
import { Navigate } from '../components/header/Navigate';
import { ReturnComponentType } from '../types';

export const App = (): ReturnComponentType => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigate />
      </div>
    </BrowserRouter>
  );
};
