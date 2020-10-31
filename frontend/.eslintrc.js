module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended',
        'plugin:vue/recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        semi: [ 2, 'never' ],
        'array-bracket-newline': [ 'error', {
            minItems: 3
        } ],
        'object-curly-newline': [ 'error', {
            'minProperties': 1
        } ],
        'object-curly-spacing': [ 'error', 'always' ],
        'indent': [ 'error', 4 ],
        'space-before-function-paren': [ 'error', 'always' ],
        'comma-spacing': [ 'error', {
            'before': false,
            'after': true
        } ],
        'key-spacing': [ 'error', {
            'beforeColon': false,
            afterColon: true
        } ],
        'space-before-blocks': [ 'error', 'always' ],
        'vue/max-attributes-per-line': [ 'error', {
            'singleline': 3,
            'multiline': 1
        } ],
        'vue/html-indent': [
            'error',
            4,
            {
                'attribute': 1,
                'baseIndent': 1,
                'closeBracket': 0,
                'alignAttributesVertically': true,
                'ignores': []
            }
        ],
        'space-infix-ops': 'error',
        'keyword-spacing': 'error',
        quotes: [ 'error', 'single' ],
        'array-element-newline': [ 'error', {
            'minItems': 3
        } ],
        'object-property-newline': 'error',
        'array-bracket-spacing': [ 'error', 'always' ]
    }
}