import React from 'react';
import ModuleHome from '../index.jsx';
import Listagem from '../pages/Listagem.jsx';
import Detalhe from '../pages/Detalhe.jsx';

export default [
  { path: '/marketing', element: <ModuleHome /> },
  { path: '/marketing/listagem', element: <Listagem /> },
  { path: '/marketing/detalhe', element: <Detalhe /> },
];
