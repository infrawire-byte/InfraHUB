import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext.jsx';
import ModuleRegistry from '../routes/modules.js';

export default function Layout({ onOpenPalette, onOpenHelp }) {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <div className="app-shell">
      <aside>
        <div className="logo">InfraHub</div>
        <nav>
          {ModuleRegistry.map((module, index) => (
            <NavLink
              key={module.path}
              to={module.path}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              <span>{module.label}</span>
              <small>Alt+{index + 1}</small>
            </NavLink>
          ))}
        </nav>
      </aside>
      <div className="main">
        <header>
          <div className="actions">
            <button type="button" onClick={onOpenPalette}>
              Ctrl+K
            </button>
            <button type="button" onClick={onOpenHelp}>
              Ctrl+/
            </button>
          </div>
          <div className="spacer" />
          <button type="button" onClick={toggleTheme}>
            Tema: {theme === 'light' ? 'Claro' : 'Escuro'}
          </button>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
