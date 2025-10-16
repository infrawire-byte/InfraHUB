import React from 'react';
import ModuleHome from '../index.jsx';
import Listagem from '../pages/Listagem.jsx';
import Detalhe from '../pages/Detalhe.jsx';

export default [
  { path: '/logistica', element: <ModuleHome /> },
  { path: '/logistica/listagem', element: <Listagem /> },
  { path: '/logistica/detalhe', element: <Detalhe /> },
];
