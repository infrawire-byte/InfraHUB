import React from 'react';

export default function CommandPalette({ open, onClose, commands }) {
  const handleSelect = (command) => {
    command.action();
    onClose();
  };

  if (!open) return null;
  return (
    <div className="overlay" role="dialog" aria-modal="true">
      <div className="dialog">
        <header>
          <h2>Paleta de Comandos</h2>
          <button type="button" onClick={onClose} className="ghost">
            Esc
          </button>
        </header>
        <input placeholder="Buscar comandos" autoFocus />
        <ul>
          {commands.map((command) => (
            <li key={command.id}>
              <button type="button" onClick={() => handleSelect(command)}>
                <span>{command.label}</span>
                {command.shortcut && <small>{command.shortcut}</small>}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
