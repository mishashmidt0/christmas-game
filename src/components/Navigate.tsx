import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main } from '../page/Main';
import { Games } from '../page/Games';
import { ChristmasTree } from '../page/ChristmasTree';

enum PATH {
  Main = '/',
  Game = '/games',
  ChristmasTree = '/ChristmasTree',
}
const routes = [
  { path: PATH.Main, component: <Main /> },
  { path: PATH.Game, component: <Games /> },
  { path: PATH.ChristmasTree, component: <ChristmasTree /> },
];

export const Navigate = () => {
  return (
    <Routes>
      {routes.map(route => <Route path={route.path} element={route.component} />)}
    </Routes>
  );
};

