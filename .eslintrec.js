module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin: jsx-a11y/recommended',
    'plugin: prettier/recommended',
    'next',
    'next/core-web-vitals'
  ],
  rules: {
    'semi': ['error', 'always'], //para que se usen los punto y comas obligatoriamente
    'prettier/prettier': 0  // 0 para que sea más permisivo, 1 para que lso tome como warning y 2 para que sea extricto.
  }
}

