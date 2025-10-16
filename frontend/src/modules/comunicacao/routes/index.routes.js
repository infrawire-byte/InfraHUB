import React from 'react';
import ModuleHome from '../index.jsx';
import Listagem from '../pages/Listagem.jsx';
import Detalhe from '../pages/Detalhe.jsx';

export default [
  { path: '/comunicacao', element: <ModuleHome /> },
  { path: '/comunicacao/listagem', element: <Listagem /> },
  { path: '/comunicacao/detalhe', element: <Detalhe /> },
];
