const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api/v1';

export async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(error.error || 'Erro inesperado');
  }

  return response.json();
}

export default {
  request,
};
