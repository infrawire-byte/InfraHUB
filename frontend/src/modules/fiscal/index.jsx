import React from 'react';
import { Link } from 'react-router-dom';

export default function ModuleHome() {
  return (
    <div className="card">
      <h1>Módulo Fiscal</h1>
      <p>Selecione uma das páginas para começar.</p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link to="/fiscal/listagem">Listagem</Link>
        <Link to="/fiscal/detalhe">Detalhe</Link>
        <Link to="/fiscal/dados-fiscais">Dados Fiscais da Empresa</Link>
      </div>
    </div>
  );
}
