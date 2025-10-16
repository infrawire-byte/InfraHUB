import React from 'react';
import ModuleHome from '../index.jsx';
import Listagem from '../pages/Listagem.jsx';
import Detalhe from '../pages/Detalhe.jsx';

export default [
  { path: '/projetos', element: <ModuleHome /> },
  { path: '/projetos/listagem', element: <Listagem /> },
  { path: '/projetos/detalhe', element: <Detalhe /> },
];
