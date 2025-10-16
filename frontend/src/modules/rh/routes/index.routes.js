import React from 'react';
import ModuleHome from '../index.jsx';
import Listagem from '../pages/Listagem.jsx';
import Detalhe from '../pages/Detalhe.jsx';

export default [
  { path: '/rh', element: <ModuleHome /> },
  { path: '/rh/listagem', element: <Listagem /> },
  { path: '/rh/detalhe', element: <Detalhe /> },
];
