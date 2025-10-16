import React from 'react';
import ModuleHome from '../index.jsx';
import Listagem from '../pages/Listagem.jsx';
import Detalhe from '../pages/Detalhe.jsx';

export default [
  { path: '/whatsapp', element: <ModuleHome /> },
  { path: '/whatsapp/listagem', element: <Listagem /> },
  { path: '/whatsapp/detalhe', element: <Detalhe /> },
];
