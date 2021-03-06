module.exports = {
  env: {
    browser: false,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  'settings': {
    'import/parsers': {
      '@typescript-eslint/parser': [".ts"]
    },
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'import/typescript',
  ],
  rules: {
    semi: ['error', 'never'],
    'import/extensions': 0,
  },
}
