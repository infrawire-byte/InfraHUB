import React from 'react';
import ModuleHome from '../index.jsx';
import Listagem from '../pages/Listagem.jsx';
import Detalhe from '../pages/Detalhe.jsx';

export default [
  { path: '/ecommerce', element: <ModuleHome /> },
  { path: '/ecommerce/listagem', element: <Listagem /> },
  { path: '/ecommerce/detalhe', element: <Detalhe /> },
];
