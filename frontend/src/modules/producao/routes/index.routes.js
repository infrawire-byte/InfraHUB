import React from 'react';
import ModuleHome from '../index.jsx';
import Listagem from '../pages/Listagem.jsx';
import Detalhe from '../pages/Detalhe.jsx';

export default [
  { path: '/producao', element: <ModuleHome /> },
  { path: '/producao/listagem', element: <Listagem /> },
  { path: '/producao/detalhe', element: <Detalhe /> },
];
