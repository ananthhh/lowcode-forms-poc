module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'react-app',
    'prettier'
  ],
  overrides: [
  ],
  parserOptions: {
    project: ["tsconfig.json"],
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/triple-slash-reference': 0
  },
  settings: {
    react: {
      version: 'detect'
    },
  }
}
