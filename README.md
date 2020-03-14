# StyleLint Configuration

## Versions

- `stylelint` - 13.2.1
- `stylelint-config-prettier` - 8.0.1
- `prettier` - 1.19.1

## How to Update

- Check changelog of each project

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
