import React from 'react';
import ModuleHome from '../index.jsx';
import Listagem from '../pages/Listagem.jsx';
import Detalhe from '../pages/Detalhe.jsx';

export default [
  { path: '/crm', element: <ModuleHome /> },
  { path: '/crm/listagem', element: <Listagem /> },
  { path: '/crm/detalhe', element: <Detalhe /> },
];
