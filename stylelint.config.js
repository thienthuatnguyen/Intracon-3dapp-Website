/* Lint Styled Components */
module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: ['stylelint-config-standard', 'stylelint-config-styled-components'],
  rules: {
    indentation: 2,
    'comment-empty-line-before': null,
    'no-descending-specificity': null
  },
  ignoreFiles: ['**/node_modules/**', '**/app/theme/**', '**/app/server/**', '**/app/tools/**']
}
