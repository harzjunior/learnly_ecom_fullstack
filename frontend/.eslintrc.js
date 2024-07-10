module.exports = {
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      'prettier',
    ],
    rules: {
      'vue/no-unused-vars': 'error',
    },
  }
  