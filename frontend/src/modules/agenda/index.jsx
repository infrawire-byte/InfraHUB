import React from 'react';
import { Link } from 'react-router-dom';

export default function ModuleHome() {
  return (
    <div className="card">
      <h1>Módulo Agenda</h1>
      <p>Selecione uma das páginas para começar.</p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link to="/agenda/listagem">Listagem</Link>
        <Link to="/agenda/detalhe">Detalhe</Link>
      </div>
    </div>
  );
}
