import React, { useEffect } from 'react';

import { HashRouter } from 'react-router-dom';

import { setCardsTC } from '../components/Games/slice/cardsSlice';
import { Header } from '../components/header/Header';
import { Navigate } from '../components/header/Navigate';
import { useAppDispatch } from '../store/redux';
import { ReturnComponentType } from '../types';

export const App = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCardsTC());
  }, []);

  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Navigate />
      </div>
    </HashRouter>
  );
};
