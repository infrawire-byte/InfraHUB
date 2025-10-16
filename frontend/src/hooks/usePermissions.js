import { useMemo } from 'react';

const defaultPermissions = ['list', 'detail', 'create', 'edit', 'approve', 'delete', 'export'];

export default function usePermissions(moduleKey) {
  // TODO: conectar com RBAC real após implementação de autenticação.
  return useMemo(
    () => ({
      can: (action) => defaultPermissions.includes(action),
    }),
    [moduleKey],
  );
}
