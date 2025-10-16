import apiClient from '../../../services/apiClient.js';

const basePath = '/rh';

export default {
  async list() {
    const response = await apiClient.request(basePath);
    return response.data || [];
  },
  async get(id) {
    const response = await apiClient.request(`${basePath}/${id}`);
    return response.data;
  },
  async save(payload) {
    return apiClient.request(basePath, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },
};
