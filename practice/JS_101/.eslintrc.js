module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'rules': {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-loop-func': ['error'],
    'block-spacing': ['error', 'always'],
    'camelcase': ['error'],
    'eqeqeq': ['error', 'always'],
    'strict': ['error', 'global'],
  }
};
