module.exports = {
  $schema: 'http://json.schemastore.org/stylelintrc',
  extends: ['./base.json'],
  rules: {
    // Possible errors
    // General / Sheet
    'no-extra-semicolons': null,

    // Limit language features
    // Selector
    'selector-max-empty-lines': null,

    // Stylistic issues
    // Color
    'color-hex-case': null,

    // Function
    'function-comma-newline-after': null,
    'function-comma-newline-before': null,
    'function-comma-space-after': null,
    'function-comma-space-before': null,
    'function-max-empty-lines': null,
    'function-parentheses-newline-inside': null,
    'function-parentheses-space-inside': null,

    // Number
    'number-leading-zero': null,
    'number-no-trailing-zeros': null,

    // String
    'string-quotes': null,

    // Unit
    'unit-case': null,

    // Value list
    'value-list-comma-newline-after': null,
    'value-list-comma-newline-before': null,
    'value-list-comma-space-after': null,
    'value-list-comma-space-before': null,
    'value-list-max-empty-lines': null,

    // Property
    'property-case': null,

    // Declaration
    'declaration-colon-newline-after': null,
    'declaration-colon-space-after': null,
    'declaration-colon-space-before': null,

    // Declaration block
    'declaration-block-trailing-semicolon': null,

    // Block
    'block-closing-brace-empty-line-before': null,
    'block-closing-brace-newline-after': null,
    'block-closing-brace-newline-before': null,
    'block-closing-brace-space-after': null,
    'block-closing-brace-space-before': null,
    'block-opening-brace-newline-after': null,
    'block-opening-brace-newline-before': null,
    'block-opening-brace-space-after': null,
    'block-opening-brace-space-before': null,

    // Selector
    'selector-attribute-brackets-space-inside': null,
    'selector-combinator-space-after': null,
    'selector-combinator-space-before': null,
    'selector-descendant-combinator-no-non-space': null,
    'selector-pseudo-class-case': null,
    'selector-pseudo-element-case': null,

    // Selector list
    'selector-list-comma-newline-after': null,
    'selector-list-comma-newline-before': null,
    'selector-list-comma-space-after': null,
    'selector-list-comma-space-before': null,

    // Rule
    'rule-empty-line-before': null,

    // Media query list
    'media-feature-name-case': null,
    'media-query-list-comma-newline-after': null,
    'media-query-list-comma-newline-before': null,
    'media-query-list-comma-space-after': null,
    'media-query-list-comma-space-before': null,

    // At-rule
    'at-rule-empty-line-before': null,
    'at-rule-name-case': null,
    'at-rule-name-newline-after': null,
    'at-rule-name-space-after': null,
    'at-rule-semicolon-newline-after': null,

    // General / Sheet
    indentation: null,
    linebreaks: null,
    'max-empty-lines': null,
    'max-line-length': null,
    'no-eol-whitespace': null,
    'no-missing-end-of-source-newline': null,
    'no-empty-first-line': null,
    'unicode-bom': null
  }
};
