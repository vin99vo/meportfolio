module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:react/jsx-runtime',
    'prettier'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  plugins: ['react', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': ['off'],
    // 'typescript-eslint/explicit-function-return-type': 'off'
    'prettier/prettier': 0,
    // '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/consistent-type-definitions': 'off'
    // "no-console": "off",
    // "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
  }
}
