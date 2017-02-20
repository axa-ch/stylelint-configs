var reComponentName = '[a-z0-9]+(?:-[a-z0-9]+)*'

module.exports = {
  plugins: [
    'stylelint-selector-bem-pattern',
  ],

  rules: {
    'plugin/selector-bem-pattern': {
      componentName: reComponentName,
      componentSelectors: {
        initial: '^\\.(?:no-)?js|\\.{componentName}(?:__{reComponentName})*(?:--{reComponentName})?(?:\\.(?:is|has)-{reComponentName})*(?:\\[.*\\])*|\\.(?:is|has)-{reComponentName}(?:\\.{reComponentName})?$'.replace(/\{reComponentName}/gm, reComponentName),
        combined: '^\\.{reComponentName}(?:__{reComponentName})*(?:--{reComponentName})?|\\[.*\\]$'.replace(/\{reComponentName}/gm, reComponentName)
      }
    },
  }
}
