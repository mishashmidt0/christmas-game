import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { PATH } from '../../enums/headerEnums';
import { ChristmasTree } from '../../page/ChristmasTree';
import { Games } from '../../page/Games';
import { Main } from '../../page/Main';
import { ReturnComponentType } from '../../types';

const routes = [
  { id: uuidv4(), path: PATH.Main, component: <Main /> },
  { id: uuidv4(), path: PATH.Game, component: <Games /> },
  { id: uuidv4(), path: PATH.ChristmasTree, component: <ChristmasTree /> },
];

export const Navigate = (): ReturnComponentType => {
  return (
    <Routes>
      {routes.map(route => (
        <Route key={route.id} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};
