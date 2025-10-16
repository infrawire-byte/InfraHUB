import React from 'react';
import { useQuery } from '@tanstack/react-query';
import moduleService from '../services/index.service.js';
import usePermissions from '../../../hooks/usePermissions.js';

export default function ModuleListagem() {
  const permissions = usePermissions('governanca');
  const { data, isLoading, isError } = useQuery(['governanca', 'list'], () => moduleService.list());

  return (
    <div className="card">
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <h2>Listagem de Governança</h2>
        {permissions.can('create') && <button type="button">Novo registro</button>}
      </header>
      {isLoading && <p>Carregando...</p>}
      {isError && <p>Erro ao carregar dados.</p>}
      {!isLoading && !isError && (!data || data.length === 0) && <p>Nenhum registro encontrado.</p>}
      {!isLoading && !isError && data?.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td><span className="badge">{item.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
