import React from 'react';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext.jsx';
import Layout from './components/Layout.jsx';
import CommandPalette from './components/CommandPalette.jsx';
import ShortcutHelp from './components/ShortcutHelp.jsx';
import ModuleRegistry from './routes/modules.js';
import moduleRoutes from './routes/moduleRoutes.js';
import useKeyboardShortcuts from './hooks/useKeyboardShortcuts.js';

export default function App() {
  return (
    <ThemeProvider>
      <ThemeEventBridge>
        <BrowserRouter>
          <AppShell />
        </BrowserRouter>
      </ThemeEventBridge>
    </ThemeProvider>
  );
}

function AppShell() {
  const navigate = useNavigate();
  const [paletteOpen, setPaletteOpen] = React.useState(false);
  const [helpOpen, setHelpOpen] = React.useState(false);
  const [statusMessage, setStatusMessage] = React.useState('');

  React.useEffect(() => {
    if (!statusMessage) return undefined;
    const timer = setTimeout(() => setStatusMessage(''), 2500);
    return () => clearTimeout(timer);
  }, [statusMessage]);

  const commands = React.useMemo(
    () => [
      {
        id: 'toggle-theme',
        label: 'Alternar tema',
        shortcut: 'Ctrl+Alt+T',
        action: () => document.dispatchEvent(new CustomEvent('toggle-theme')),
      },
      ...ModuleRegistry.map((module) => ({
        id: `nav-${module.moduleKey}`,
        label: `Ir para ${module.label}`,
        shortcut: '',
        action: () => navigate(module.path),
      })),
    ],
    [navigate],
  );

  useKeyboardShortcuts((action) => {
    if (action === 'commandPalette' || action === 'globalSearch') setPaletteOpen(true);
    if (action === 'shortcutHelp') setHelpOpen(true);
    if (action === 'toggleTheme') document.dispatchEvent(new CustomEvent('toggle-theme'));
    if (action === 'filters') setStatusMessage('Abrindo filtros (em breve)');
    if (action === 'localSearch') setStatusMessage('Busca local (em breve)');
    if (action === 'submit') setStatusMessage('Confirmar ação (em breve)');
    if (action === 'new') setStatusMessage('Novo registro (em breve)');
    if (action === 'save') setStatusMessage('Salvando alterações (em breve)');
    if (action === 'open') setStatusMessage('Abrindo registros (em breve)');
    if (action === 'edit') setStatusMessage('Editando registro (em breve)');
    if (action === 'duplicate') setStatusMessage('Duplicando registro (em breve)');
    if (action === 'delete') setStatusMessage('Excluindo registro (em breve)');
    if (action?.startsWith?.('module-')) {
      const index = Number(action.split('-')[1]) - 1;
      if (ModuleRegistry[index]) navigate(ModuleRegistry[index].path);
    }
    if (action === 'escape') {
      setPaletteOpen(false);
      setHelpOpen(false);
      setStatusMessage('');
    }
  });

  return (
    <>
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} commands={commands} />
      <ShortcutHelp open={helpOpen} onClose={() => setHelpOpen(false)} />
      {statusMessage && <div className="card">{statusMessage}</div>}
      <Routes>
        <Route element={<Layout onOpenPalette={() => setPaletteOpen(true)} onOpenHelp={() => setHelpOpen(true)} />}>
          <Route index element={<Navigate to={ModuleRegistry[0].path} replace />} />
          {moduleRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </>
  );
}

function ThemeEventBridge({ children }) {
  const { toggleTheme } = React.useContext(ThemeContext);

  React.useEffect(() => {
    const handler = () => toggleTheme();
    document.addEventListener('toggle-theme', handler);
    return () => document.removeEventListener('toggle-theme', handler);
  }, [toggleTheme]);

  return children;
}
