module.exports = {
  extends: [
    'eslint-config-youngapp/rules/es6',
    'eslint-config-youngapp/rules/legacy',
    'eslint-config-youngapp/rules/best-practices',
    'eslint-config-youngapp/rules/errors',
    'eslint-config-youngapp/rules/node',
    'eslint-config-youngapp/rules/strict',
    'eslint-config-youngapp/rules/variables',
    'eslint-config-youngapp/rules/style'
  ].map(require.resolve),
  rules: {}
};