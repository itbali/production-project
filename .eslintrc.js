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
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'no-underscore-dangle': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'import/extensions': 'off',
    indent: ['error', 4, {
      SwitchCase: 1
    }],
    'react/jsx-indent': ['error', 4, {
      indentLogicalExpressions: true
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