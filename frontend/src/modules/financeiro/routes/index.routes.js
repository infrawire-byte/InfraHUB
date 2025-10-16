import React from 'react';
import ModuleHome from '../index.jsx';
import Listagem from '../pages/Listagem.jsx';
import Detalhe from '../pages/Detalhe.jsx';

export default [
  { path: '/financeiro', element: <ModuleHome /> },
  { path: '/financeiro/listagem', element: <Listagem /> },
  { path: '/financeiro/detalhe', element: <Detalhe /> },
];
