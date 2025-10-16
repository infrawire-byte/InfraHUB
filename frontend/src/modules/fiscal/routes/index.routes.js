import React from 'react';
import ModuleHome from '../index.jsx';
import Listagem from '../pages/Listagem.jsx';
import Detalhe from '../pages/Detalhe.jsx';
import DadosFiscais from '../pages/DadosFiscais.jsx';

export default [
  { path: '/fiscal', element: <ModuleHome /> },
  { path: '/fiscal/listagem', element: <Listagem /> },
  { path: '/fiscal/detalhe', element: <Detalhe /> },
  { path: '/fiscal/dados-fiscais', element: <DadosFiscais /> },
];
