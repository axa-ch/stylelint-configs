module.exports = {
  plugins: [
    'stylelint-scss'
  ],

  rules: {
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-pattern': '[a-z]+(:?-[a-z]+)*',
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-pattern': '[a-z]+(:?-[a-z]+)*',
    'scss/dollar-variable-colon-newline-after': 'always-multi-line',
    'scss/dollar-variable-colon-space-after': 'always-single-line',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': '[a-z]+(:?-[a-z]+)*',
    'scss/percent-placeholder-pattern': '[a-z]+(:?-[a-z]+)*',
    'scss/double-slash-comment-empty-line-before': ['always', {
      'except': ['first-nested'],
      'ignore': ['between-comments', 'stylelint-commands']
    }],
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/declaration-nested-properties': 'never',

    'at-rule-empty-line-before': [ 'always', {
      'except': [
        'blockless-after-same-name-blockless',
        'first-nested'
      ],
      'ignore': ['after-comment', 'blockless-group'],
      'ignoreAtRules': ['if', 'else']
    } ],
    'block-closing-brace-newline-after': ['always', {
      'ignoreAtRules': ['if', 'else']
    }]
  }
}
