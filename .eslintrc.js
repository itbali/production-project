module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['airbnb', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended', 'plugin:storybook/recommended'],
  overrides: [{
    files: ['*.ts', '*.tsx'],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json',
      tsconfigRootDir: __dirname
    }
  }],
  parser: '@typescript-eslint/parser',
  plugins: [
      'react',
    'dyuzhev-fsd-plugin',
    '@typescript-eslint',
  ],
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  rules: {
    'dyuzhev-fsd-plugin/path-checker': 'error',
    'linebreak-style': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/no-array-index-key': 'off',
    'no-underscore-dangle': 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'off',
    indent: ['error', 4, {
      SwitchCase: 1
    }],
    'react/jsx-indent': ['error', 4, {
      indentLogicalExpressions: true,
    }],
    'react/jsx-indent-props': [2, 4],
    'react/jsx-filename-extension': [1, {
      extensions: ['.tsx', '.ts']
    }],
    'max-len': ['error', {
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
      code: 100
    }]
  }
};
