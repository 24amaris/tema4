import globals from 'globals'
import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import prettier from 'eslint-plugin-prettier'
import tailwind from 'eslint-plugin-tailwindcss'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,vue}'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  js.configs.recommended,
  ...vue.configs['flat/essential'],
  {
    plugins: {
      prettier,
      tailwindcss: tailwind,
    },
    rules: {
      'prettier/prettier': 'error',
      'tailwindcss/classnames-order': 'warn',
      'no-console': 'warn',
      'no-alert': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'eol-last': ['error', 'always'],
      'no-trailing-spaces': 'error',
      quotes: ['error', 'single'],
      'max-len': ['error', { code: 80 }],
    },
  },
]
