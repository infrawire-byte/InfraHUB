import React from 'react';
import ModuleHome from '../index.jsx';
import Listagem from '../pages/Listagem.jsx';
import Detalhe from '../pages/Detalhe.jsx';

export default [
  { path: '/agenda', element: <ModuleHome /> },
  { path: '/agenda/listagem', element: <Listagem /> },
  { path: '/agenda/detalhe', element: <Detalhe /> },
];
