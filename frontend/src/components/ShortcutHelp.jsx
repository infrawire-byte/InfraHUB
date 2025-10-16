import React from 'react';

const shortcuts = [
  { combo: 'Ctrl + K', description: 'Paleta de comandos' },
  { combo: 'Ctrl + /', description: 'Ajuda de atalhos' },
  { combo: 'Ctrl + Shift + F', description: 'Busca global' },
  { combo: 'Alt + 1..9', description: 'Trocar módulo' },
  { combo: 'Ctrl + Tab / Ctrl + Shift + Tab', description: 'Navegar abas' },
  { combo: 'Ctrl + N / S / O / E / D / Del', description: 'Novo / Salvar / Abrir / Editar / Duplicar / Excluir' },
  { combo: 'Ctrl + F', description: 'Buscar na tela' },
  { combo: 'Ctrl + Shift + L', description: 'Abrir filtros' },
  { combo: 'Ctrl + Alt + T', description: 'Alternar tema' },
  { combo: 'Ctrl + Enter', description: 'Confirmar / Enviar' },
  { combo: 'Esc', description: 'Cancelar / Fechar' },
];

export default function ShortcutHelp({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="overlay" role="dialog" aria-modal="true">
      <div className="dialog">
        <header>
          <h2>Atalhos</h2>
          <button type="button" className="ghost" onClick={onClose}>
            Esc
          </button>
        </header>
        <table>
          <tbody>
            {shortcuts.map((shortcut) => (
              <tr key={shortcut.combo}>
                <td>{shortcut.combo}</td>
                <td>{shortcut.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
