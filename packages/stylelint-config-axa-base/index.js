module.exports = {
  extends: 'stylelint-config-standard',

  plugins: [
    'stylelint-order',
    'stylelint-declaration-strict-value'
  ],

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
    'block-no-empty': null,

    'scale-unlimited/declaration-strict-value': [['/color/', 'fill', 'stroke', 'z-index', 'font-size'], {
      ignoreKeywords: ['transparent', 'currentColor', 'inherit']
    }],

    'order/declaration-block-property-groups-structure': [
      // Positioning
      {
        emptyLineBefore: 'always',
        order: 'strict',
        properties: [
          'position',
          'top',
          'right',
          'bottom',
          'left',
          'z-index'
        ]
      },
      // Box-Model
      {
        emptyLineBefore: 'always',
        order: 'strict',
        properties: [
          'display',
          'box-sizing',
          'float',
          'width',
          'height',
          'max-width',
          'max-height',
          'min-width',
          'min-height',
          'padding',
          'padding-top',
          'padding-right',
          'padding-bottom',
          'padding-left',
          'margin',
          'margin-top',
          'margin-right',
          'margin-bottom',
          'margin-left',
          'margin-collapse',
          'margin-top-collapse',
          'margin-right-collapse',
          'margin-bottom-collapse',
          'margin-left-collapse',
          'overflow',
          'overflow-x',
          'overflow-y',
          'clip',
          'clear'
        ]
      },
      // Flex-Container
      {
        emptyLineBefore: 'always',
        order: 'strict',
        properties: [
          'flex-flow',
          'flex-direction',
          'flex-wrap',
          'justify-content',
          'align-items',
          'align-content'
        ]
      },
      // Flex-Children
      {
        emptyLineBefore: 'always',
        order: 'strict',
        properties: [
          'order',
          'flex',
          'flex-grow',
          'flex-shrink',
          'flex-basis',
          'align-self'
        ]
      },
      // Typography
      {
        emptyLineBefore: 'always',
        order: 'strict',
        properties: [
          'font',
          'font-family',
          'font-size',
          'font-smoothing',
          'osx-font-smoothing',
          'font-style',
          'font-weight',
          'hyphens',
          'src',
          'line-height',
          'letter-spacing',
          'word-spacing',
          'color',
          'fill',
          'stroke',
          'text-align',
          'text-decoration',
          'text-indent',
          'text-overflow',
          'text-rendering',
          'text-size-adjust',
          'text-shadow',
          'text-transform',
          'word-break',
          'overflow-wrap',
          'word-wrap',
          'white-space',
          'vertical-align',
          'list-style',
          'list-style-type',
          'list-style-position',
          'list-style-image',
          'pointer-events',
          'cursor'
        ]
      },
      // Visual
      {
        emptyLineBefore: 'always',
        order: 'strict',
        properties: [
          'background',
          'background-attachment',
          'background-color',
          'background-image',
          'background-position',
          'background-repeat',
          'background-size',
          'border',
          'border-collapse',
          'border-top',
          'border-right',
          'border-bottom',
          'border-left',
          'border-color',
          'border-image',
          'border-top-color',
          'border-right-color',
          'border-bottom-color',
          'border-left-color',
          'border-spacing',
          'border-style',
          'border-top-style',
          'border-right-style',
          'border-bottom-style',
          'border-left-style',
          'border-width',
          'border-top-width',
          'border-right-width',
          'border-bottom-width',
          'border-left-width',
          'border-radius',
          'border-top-right-radius',
          'border-bottom-right-radius',
          'border-bottom-left-radius',
          'border-top-left-radius',
          'border-radius-topright',
          'border-radius-bottomright',
          'border-radius-bottomleft',
          'border-radius-topleft',
          'box-shadow',
          'content',
          'quotes',
          'outline',
          'outline-offset',
          'opacity',
          'transform',
          'transition',
          'animation'
        ]
      }
    ]
  }
}
