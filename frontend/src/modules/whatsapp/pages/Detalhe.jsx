import React, { useState } from 'react';
import moduleService from '../services/index.service.js';
import usePermissions from '../../../hooks/usePermissions.js';

export default function ModuleDetalhe() {
  const permissions = usePermissions('whatsapp');
  const [form, setForm] = useState({ name: '', status: 'draft' });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!permissions.can('edit')) {
      setMessage('Você não possui permissão para editar.');
      return;
    }
    setSaving(true);
    setMessage('');
    try {
      await moduleService.save(form);
      setMessage('Registro salvo com sucesso.');
    } catch (error) {
      setMessage('Falha ao salvar.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="card">
      <h2>Detalhe WhatsApp</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem', maxWidth: '480px' }}>
        <label>
          Nome
          <input name="name" value={form.name} onChange={handleChange} required disabled={!permissions.can('edit')} />
        </label>
        <label>
          Status
          <select name="status" value={form.status} onChange={handleChange} disabled={!permissions.can('edit')}>
            <option value="draft">Rascunho</option>
            <option value="active">Ativo</option>
          </select>
        </label>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button type="submit" disabled={saving || !permissions.can('edit')}>
            {saving ? 'Salvando...' : 'Salvar'}
          </button>
          <button
            type="button"
            className="ghost"
            onClick={() => setForm({ name: '', status: 'draft' })}
            disabled={!permissions.can('edit')}
          >
            Limpar
          </button>
        </div>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}
