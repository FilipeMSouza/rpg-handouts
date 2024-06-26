module.exports = {
  root: true,
  ignorePatterns: [
    'next.config.js',
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'prefer-spread': 'off',
    'no-case-declarations': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/consistent-type-imports': 'warn',
    '@typescript-eslint/no-unnecessary-condition': 'warn',
    // Personal preferences
    'semi': ['error', 'always'],
    'semi-style': ['error', 'last'],
    'quotes': ['error', 'single'],
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'no-console': 'warn',
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'dot-notation': 'error',
    'eqeqeq': ['error', 'always'],
    'max-depth': ['error', 4],
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'prefer-const': 'error',
    'sort-imports': ['error', { 'ignoreDeclarationSort': true }],
    'padded-blocks': ['error', 'never'],
    'indent': ['error', 2],
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-require-imports': 'error',
  },
};
