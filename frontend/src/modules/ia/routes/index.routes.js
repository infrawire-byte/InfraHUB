import React from 'react';
import ModuleHome from '../index.jsx';
import Listagem from '../pages/Listagem.jsx';
import Detalhe from '../pages/Detalhe.jsx';

export default [
  { path: '/ia', element: <ModuleHome /> },
  { path: '/ia/listagem', element: <Listagem /> },
  { path: '/ia/detalhe', element: <Detalhe /> },
];
