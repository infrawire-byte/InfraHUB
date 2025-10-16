import React from 'react';
import ModuleHome from '../index.jsx';
import Listagem from '../pages/Listagem.jsx';
import Detalhe from '../pages/Detalhe.jsx';

export default [
  { path: '/vendas', element: <ModuleHome /> },
  { path: '/vendas/listagem', element: <Listagem /> },
  { path: '/vendas/detalhe', element: <Detalhe /> },
];
