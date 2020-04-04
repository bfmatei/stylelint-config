# stylelint Configuration
This package aims at creating universal configurations for stylelint that restricts the coding standards as much as possible. It is inspired but various rules packages but compiles everything into only one, dependency-free package.

## Versions
- `prettier` - 2.0.2
- `stylelint` - 13.3.0
- `stylelint-scss` - 3.16.0

## Rules Details
### Possible errors
#### General / Sheet
- `no-extra-semicolons` - disabled - Prettier

### Limit language features
#### Color
- `color-no-hex` - disabled since we allow HEX colors

#### Function
- `function-blacklist`- disabled since we don't have anything to blacklist
- `function-url-no-scheme-relative`- disabled since we allow scheme relative urls
- `function-url-scheme-blacklist`- disabled since we don't have anything to blacklist
- `function-url-scheme-whitelist`- disabled since we don't have anything to whitelist
- `function-whitelist`- disabled since we don't have anything to whitelist

#### Keyframes
- `keyframes-name-pattern` - disabled since we don't have any pattern to specify

#### Unit
- `unit-blacklist`- disabled since we don't have anything to blacklist
- `unit-whitelist`- disabled since we don't have anything to whitelist

#### Custom property
- `custom-property-pattern` - disabled since we don't have any pattern to specify

#### Property
- `property-blacklist`- disabled since we don't have anything to blacklist
- `property-whitelist`- disabled since we don't have anything to whitelist

#### Declaration
- `declaration-property-unit-blacklist`- disabled since we don't have anything to blacklist
- `declaration-property-unit-whitelist`- disabled since we don't have anything to whitelist
- `declaration-property-value-blacklist`- disabled since we don't have anything to blacklist
- `declaration-property-value-whitelist`- disabled since we don't have anything to whitelist

#### Selector
- `selector-attribute-operator-blacklist`- disabled since we don't have anything to blacklist
- `selector-attribute-operator-whitelist`- disabled since we don't have anything to whitelist
- `selector-class-pattern` - disabled since we don't have any pattern to specify
- `selector-combinator-blacklist`- disabled since we don't have anything to blacklist
- `selector-combinator-whitelist`- disabled since we don't have anything to whitelist
- `selector-id-pattern` - disabled since we don't have any pattern to specify
- `selector-max-class` - disabled since allow unlimited classes in a selector
- `selector-max-combinators` - disabled since allow unlimited combinators
- `selector-max-compound-selectors` - disabled since allow unlimited selectors
- `selector-max-empty-lines` - disabled - `max-empty-lines` and Prettier
- `selector-max-pseudo-class` - disabled since allow unlimited pseudo classes
- `selector-max-specificity` - disabled since allow unlimited specificity
- `selector-nested-pattern` - disabled since we don't have any pattern to specify
- `selector-pseudo-class-blacklist`- disabled since we don't have anything to blacklist
- `selector-pseudo-class-whitelist`- disabled since we don't have anything to whitelist
- `selector-pseudo-element-blacklist`- disabled since we don't have anything to blacklist
- `selector-pseudo-element-whitelist`- disabled since we don't have anything to whitelist

#### Media feature
- `media-feature-name-blacklist`- disabled since we don't have anything to blacklist
- `media-feature-name-value-whitelist`- disabled since we don't have anything to whitelist
- `media-feature-name-whitelist`- disabled since we don't have anything to whitelist

#### Custom media
- `custom-media-pattern` - disabled since we don't have any pattern to specify

#### At-rule
- `at-rule-blacklist`- disabled since we don't have anything to blacklist
- `at-rule-no-unknown` - disabled - SCSS
- `at-rule-property-requirelist` - disabled since we don't have a list of requires for at-rules
- `at-rule-whitelist`- disabled since we don't have anything to whitelist

#### Comment
- `comment-word-blacklist`- disabled since we don't have anything to blacklist

#### General / Sheet
- `max-nesting-depth` - disabled - Angular, BEM

### Stylistic issues
#### Color
- `color-hex-case` - disabled - Prettier

#### Function
- `function-comma-newline-after` - disabled - Prettier
- `function-comma-newline-before` - disabled - Prettier
- `function-comma-space-after` - disabled - Prettier
- `function-comma-space-before` - disabled - Prettier
- `function-max-empty-lines` - disabled - `max-empty-lines` and Prettier
- `function-parentheses-newline-inside` - disabled - Prettier
- `function-parentheses-space-inside` - disabled - Prettier

#### Number
- `number-leading-zero` - disabled - Prettier
- `number-no-trailing-zeros` - disabled - Prettier

#### String
- `string-quotes` - disabled - Prettier

#### Unit
- `unit-case` - disabled - Prettier

#### Value list
- `value-list-comma-newline-after` - disabled - Prettier
- `value-list-comma-newline-before` - disabled - Prettier
- `value-list-comma-space-after` - disabled - Prettier
- `value-list-comma-space-before` - disabled - Prettier
- `value-list-max-empty-lines` - disabled - `max-empty-lines` and Prettier

#### Property
- `property-case` - disabled - Prettier

#### Declaration
- `declaration-colon-newline-after` - disabled - Prettier
- `declaration-colon-space-after` - disabled - Prettier
- `declaration-colon-space-before` - disabled - Prettier

#### Declaration block
- `declaration-block-trailing-semicolon` - disabled - Prettier

#### Block
- `block-closing-brace-empty-line-before` - disabled - Prettier
- `block-closing-brace-newline-after` - disabled - Prettier
- `block-closing-brace-newline-before` - disabled - Prettier
- `block-closing-brace-space-after` - disabled - Prettier
- `block-closing-brace-space-before` - disabled - Prettier
- `block-opening-brace-newline-after` - disabled - Prettier
- `block-opening-brace-newline-before` - disabled - Prettier
- `block-opening-brace-space-after` - disabled - Prettier
- `block-opening-brace-space-before` - disabled - Prettier

#### Selector
- `selector-attribute-brackets-space-inside` - disabled - Prettier
- `selector-combinator-space-after` - disabled - Prettier
- `selector-combinator-space-before` - disabled - Prettier
- `selector-descendant-combinator-no-non-space` - disabled - Prettier
- `selector-pseudo-class-case` - disabled - Prettier
- `selector-pseudo-element-case` - disabled - Prettier

#### Selector list
- `selector-list-comma-newline-after` - disabled - Prettier
- `selector-list-comma-newline-before` - disabled - Prettier
- `selector-list-comma-space-after` - disabled - Prettier
- `selector-list-comma-space-before` - disabled - Prettier

#### Rule
- `rule-empty-line-before` - disabled - Prettier

#### Media query list
- `media-feature-name-case` - disabled - Prettier
- `media-query-list-comma-newline-after` - disabled - Prettier
- `media-query-list-comma-newline-before` - disabled - Prettier
- `media-query-list-comma-space-after` - disabled - Prettier
- `media-query-list-comma-space-before` - disabled - Prettier

#### At-rule
- `at-rule-empty-line-before` - disabled - Prettier
- `at-rule-name-case` - disabled - Prettier
- `at-rule-name-newline-after` - disabled - Prettier
- `at-rule-name-space-after` - disabled - Prettier
- `at-rule-semicolon-newline-after` - disabled - Prettier

#### General / Sheet
- `indentation` - disabled - Prettier
- `linebreaks` - disabled - Prettier
- `max-empty-lines` - disabled - Prettier
- `max-line-length` - disabled - Prettier
- `no-eol-whitespace` - disabled - Prettier
- `no-missing-end-of-source-newline` - disabled - Prettier
- `no-empty-first-line` - disabled - Prettier
- `unicode-bom` - disabled - Prettier

### SCSS
#### @-else
- `scss/at-else-closing-brace-newline-after` - disabled - `block-closing-brace-newline-after` and Prettier
- `scss/at-else-closing-brace-space-after` - disabled - `block-closing-brace-space-after` and Prettier
- `scss/at-else-empty-line-before` - disabled - `at-rule-empty-line-before` and Prettier
- `scss/at-else-if-parentheses-space-before` - disabled - Prettier

#### @-function
- `scss/at-function-parentheses-space-before` - disabled - Prettier

#### @-if
- `scss/at-if-closing-brace-newline-after` - disabled - `block-closing-brace-newline-after` and Prettier
- `scss/at-if-closing-brace-space-after` - disabled - `block-closing-brace-space-after` and Prettier
- `scss/at-if-no-null` - disabled since we don't want to disable null checks

#### @-import
- `scss/at-import-partial-extension-blacklist` - disabled - `scss/at-import-partial-extension`
- `scss/at-import-partial-extension-whitelist` - disabled - `scss/at-import-partial-extension`

#### @-mixin
- `scss/at-mixin-parentheses-space-before` - disabled - Prettier

#### # @-rule
- `scss/at-rule-conditional-no-parentheses` - disabled since we don't want to disallow parentheses in conditionals

#### $-variable
- `scss/dollar-variable-colon-newline-after` - disabled - Prettier
- `scss/dollar-variable-colon-space-after` - disabled - Prettier
- `scss/dollar-variable-colon-space-before` - disabled - Prettier
- `scss/dollar-variable-default` - disabled since we don't want to enforce default flag
- `scss/dollar-variable-first-in-block` - disabled since we don't want to enforce a particular location

#### //-comment
- `scss/double-slash-comment-empty-line-before` - disabled since we don't want to enforce a particular style
- `scss/double-slash-comment-inline` - disabled since we don't want to enforce a particular location
- `scss/double-slash-comment-whitespace-inside` - disabled - Prettier

#### Comment
- `scss/comment-no-loud` - disabled since we don't disallow CSS comments

#### Declaration
- `scss/declaration-nested-properties-no-divided-groups` - disabled - `declaration-nested-properties`

#### Dimension
- `scss/dimension-no-non-numeric-values` - disabled since we don't want to enforce a particular style

#### Function
- `scss/function-quote-no-quoted-strings-inside` - disabled - `scss/function-unquote-no-unquoted-strings-inside`

#### Map
- `scss/map-keys-quotes` - disabled since we don't use quotes for keys

#### Operator
- `scss/operator-no-newline-after` - disabled since we allow newlines after operators and Prettier
- `scss/operator-no-newline-before` - disabled - Prettier

#### Partial
- `scss/partial-no-import` - disabled since we don't want to disallow partial imports

#### Selector
- `scss/selector-no-redundant-nesting-selector` - disabled since we use nesting selectors
- `scss/selector-no-union-class-name` - disabled since we don't want to disallow union class names

#### General / Sheet
- `scss/no-dollar-variables` - disabled since we don't want to disallow dollar variables

## Inspired by:
- [stylelint-config-prettier - 8.0.1](https://github.com/prettier/stylelint-config-prettier)
- [stylelint-config-sass-guidelines - 7.0.0](https://github.com/bjankord/stylelint-config-sass-guidelines)
