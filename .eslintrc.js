module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'plugin:import/typescript',
  ],
  rules: {
    semi: ['error', 'never'],
    'import/extensions': 0,
  },
}
