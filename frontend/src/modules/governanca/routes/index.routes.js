import React from 'react';
import ModuleHome from '../index.jsx';
import Listagem from '../pages/Listagem.jsx';
import Detalhe from '../pages/Detalhe.jsx';

export default [
  { path: '/governanca', element: <ModuleHome /> },
  { path: '/governanca/listagem', element: <Listagem /> },
  { path: '/governanca/detalhe', element: <Detalhe /> },
];
