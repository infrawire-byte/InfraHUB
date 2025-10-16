module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:import/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.0',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
