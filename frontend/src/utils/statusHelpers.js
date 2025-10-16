export function buildStatusBadge(status) {
  const map = {
    loading: { label: 'Carregando', tone: 'badge loading' },
    empty: { label: 'Sem dados', tone: 'badge empty' },
    error: { label: 'Erro', tone: 'badge error' },
    ready: { label: 'Pronto', tone: 'badge ready' },
  };
  return map[status] || map.ready;
}
