module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'simple-import-sort', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: [
    '.eslintrc.js',
    'node_modules/*',
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-duplicate-imports': 'error', // imports from the same source must be in one record
    'import/no-cycle': ['error', { maxDepth: '∞' }],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['error'],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^(@?\\w|\\w)'], // libs
          ['^\\$\\.*'], // ts-aliases
          ['^\\./'], // relative folder imports
          ['^\\.\\./'], // parent folder imports
        ],
      },
    ],
    'consistent-return': 'off',
    'eslint-comments/disable-enable-pair': 'off',
    'quote-props': ['error', 'consistent-as-needed'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'arrow-parens': ['error', 'always'],
    curly: ['error', 'all'],
    'prefer-destructuring': 'error',
    'default-case': 'error',
    'no-restricted-exports': [
      'error',
      { restrictDefaultExports: { defaultFrom: true } },
    ],
    'func-names': ['error', 'always', { generators: 'never' }],
    'no-dupe-keys': 'error',
    'no-console': ['error', { allow: ['warn', 'error', 'debug'] }],
    'no-underscore-dangle': ['off'], // we regulate an use of an underscore by other rules
    'no-plusplus': 'off', // It's okay to use ++ operator
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 1 }],
  },
}
