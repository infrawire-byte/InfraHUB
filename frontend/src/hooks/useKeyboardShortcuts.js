import { useEffect } from 'react';

const shortcutMap = {
  'Control+k': 'commandPalette',
  'Control+/': 'shortcutHelp',
  'Control+Shift+f': 'globalSearch',
  'Control+Alt+t': 'toggleTheme',
  'Control+f': 'localSearch',
  'Control+Shift+l': 'filters',
  'Control+n': 'new',
  'Control+s': 'save',
  'Control+o': 'open',
  'Control+e': 'edit',
  'Control+d': 'duplicate',
  'Control+Delete': 'delete',
  'Control+Enter': 'submit',
  Escape: 'escape',
};

function normalize(event) {
  const parts = [];
  if (event.ctrlKey) parts.push('Control');
  if (event.altKey) parts.push('Alt');
  if (event.shiftKey) parts.push('Shift');
  const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
  parts.push(key);
  return parts.join('+');
}

export default function useKeyboardShortcuts(handler) {
  useEffect(() => {
    const listener = (event) => {
      if (event.altKey && !event.ctrlKey && !event.metaKey) {
        const digit = parseInt(event.key, 10);
        if (digit >= 1 && digit <= 9) {
          event.preventDefault();
          handler('module-' + digit, event);
          return;
        }
      }

      const combination = normalize(event);
      const action = shortcutMap[combination];
      if (action) {
        event.preventDefault();
        handler(action, event);
      }
    };

    window.addEventListener('keydown', listener);
    return () => window.removeEventListener('keydown', listener);
  }, [handler]);
}
