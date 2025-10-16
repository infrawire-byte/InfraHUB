import React from 'react';
import ModuleHome from '../index.jsx';
import Listagem from '../pages/Listagem.jsx';
import Detalhe from '../pages/Detalhe.jsx';

export default [
  { path: '/infraestrutura', element: <ModuleHome /> },
  { path: '/infraestrutura/listagem', element: <Listagem /> },
  { path: '/infraestrutura/detalhe', element: <Detalhe /> },
];
