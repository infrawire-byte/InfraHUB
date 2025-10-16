import React from 'react';
import ModuleHome from '../index.jsx';
import Listagem from '../pages/Listagem.jsx';
import Detalhe from '../pages/Detalhe.jsx';

export default [
  { path: '/estoque', element: <ModuleHome /> },
  { path: '/estoque/listagem', element: <Listagem /> },
  { path: '/estoque/detalhe', element: <Detalhe /> },
];
