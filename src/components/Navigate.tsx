import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main } from '../page/Main';
import { Games } from '../page/Games';
import { ChristmasTree } from '../page/ChristmasTree';

const routes = [
  { path: '/', component: <Main /> },
  { path: '/games', component: <Games /> },
  { path: '/ChristmasTree', component: <ChristmasTree /> },
];

export const Navigate = () => {
  return (
    <Routes>
      {routes.map(route => <Route path={route.path} element={route.component} />)}
    </Routes>
  );
};

