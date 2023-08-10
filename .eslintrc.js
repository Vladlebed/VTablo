module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': ['error', { code: 200, ignoreUrls: true, ignorePattern: 'd="([\\s\\S]*?)"' }],
    'prettier/prettier': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/attribute-hyphenation': ['error'],
    'vue/v-on-event-hyphenation': [
      'error',
      'always',
      {
        autofix: true,
      },
    ],
    'import/extensions': 'off',
    'no-plusplus': 'off',
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'below',
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
    'vue/html-end-tags': 2,
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    'vue/html-quotes': ['error', 'double', { avoidEscape: true }],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 2,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        ignores: [],
        allowEmptyLines: false,
      },
    ],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/no-multi-spaces': [
      'error',
      {
        ignoreProperties: false,
      },
    ],
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    'vue/no-template-shadow': 2,
    'vue/one-component-per-file': 2,
    'vue/require-default-prop': 0,
    'vue/require-prop-types': 2,
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/v-slot-style': [
      'error',
      {
        atComponent: 'shorthand',
        default: 'shorthand',
        named: 'shorthand',
      },
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'TWO_WAY_BINDING',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'CONTENT',
          'EVENTS',
        ],
        alphabetical: false,
      },
    ],
    'vue/component-tags-order': [
      'error',
      {
        order: [['template', 'script'], 'style'],
      },
    ],
    'vue/no-v-html': 1,
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          ['provide', 'inject'],
          'ROUTER_GUARDS',
          'layout',
          'middleware',
          'validate',
          'scrollToTop',
          'transition',
          'loading',
          'inheritAttrs',
          'model',
          'emits',
          ['props', 'propsData'],
          'setup',
          'asyncData',
          'data',
          'fetch',
          'head',
          'computed',
          'methods',
          'LIFECYCLE_HOOKS',
          'watch',
          'watchQuery',
          ['template', 'render'],
          'renderError',
        ],
      },
    ],
    'vue/this-in-template': ['error', 'never'],
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: true,
        ignores: [],
      },
    ],
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/new-line-between-multi-line-property': [
      'error',
      {
        minLineOfMultilineProperty: 2,
      },
    ],
    'vue/no-empty-component-block': 2,
    'vue/no-potential-component-option-typo': [
      'error',
      {
        presets: ['all'],
        custom: ['test'],
      },
    ],
    'vue/no-static-inline-styles': [
      'error',
      {
        allowBinding: false,
      },
    ],
    'vue/no-unused-properties': [
      'error',
      {
        groups: ['props', 'data', 'computed'],
        deepData: false,
        ignorePublicMembers: false,
      },
    ],
    'vuejs-accessibility/no-autofocus': 'off',
    'object-curly-spacing': ["error", "always"],
  },
}
