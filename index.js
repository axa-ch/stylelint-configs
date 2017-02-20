module.exports = {
  extends: 'stylelint-config-standard',

  rules: {
    'at-rule-empty-line-before': ['always', {
      'except': [
        'blockless-after-same-name-blockless',
        'first-nested'
      ],
      'ignore': ['after-comment', 'blockless-group'],
      'ignoreAtRules': ['if', 'else']
    }],
    'declaration-empty-line-before': null,
    'block-closing-brace-newline-after': ['always', {
      'ignoreAtRules': ['if', 'else']
    }],
    'block-closing-brace-space-after': null,
    'block-no-empty': null
  }
}
