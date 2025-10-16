import React from 'react';
import ModuleHome from '../index.jsx';
import Listagem from '../pages/Listagem.jsx';
import Detalhe from '../pages/Detalhe.jsx';

export default [
  { path: '/kanban', element: <ModuleHome /> },
  { path: '/kanban/listagem', element: <Listagem /> },
  { path: '/kanban/detalhe', element: <Detalhe /> },
];
