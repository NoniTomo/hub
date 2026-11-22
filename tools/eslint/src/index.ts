import type {
  Awaitable,
  OptionsConfig,
  OptionsTypescript,
  TypedFlatConfigItem
} from '@antfu/eslint-config';
import type { Linter } from 'eslint';

import antfu from '@antfu/eslint-config';

type EslintOptions = OptionsConfig &
  TypedFlatConfigItem & {
    typescript?: boolean | 'engine' | OptionsTypescript;
  };

type Eslint = (
  options?: EslintOptions,
  ...userConfigs: Awaitable<Linter.Config[] | TypedFlatConfigItem | TypedFlatConfigItem[]>[]
) => Promise<Linter.Config[]>;

export const eslint: Eslint = async (inputOptions = {}, ...configs) => {
  const { typescript = false, ...options } = inputOptions;

  return antfu(
    {
      ...options,
      ...(typescript === 'engine'
        ? {
            typescript: { tsconfigPath: './tsconfig.json' }
          }
        : { typescript })
    },
    {
      name: 'nonitomo/rewrite',
      files: ['**/*.?([cm])[jt]s?(x)'],
      rules: {
        'antfu/if-newline': 'off',
        'antfu/top-level-function': 'off',

        'no-console': 'warn',
        'prefer-template': 'error',
        'arrow-body-style': ['error', 'as-needed'],

        'unicorn/no-typeof-undefined': 'error',
        'unicorn/no-useless-spread': 'warn',

        'e18e/prefer-static-regex': 'off',
        'e18e/prefer-array-at': 'off',

        'import/newline-after-import': 'error',

        'react/prefer-namespace-import': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'react-refresh/only-export-components': 'off',

        'test/prefer-lowercase-title': 'off'
      }
    },
    {
      name: 'nonitomo/sort',
      rules: {
        'perfectionist/sort-array-includes': [
          'error',
          {
            order: 'asc',
            type: 'alphabetical'
          }
        ],
        'perfectionist/sort-imports': [
          'error',
          {
            groups: [
              'type-import',
              ['value-builtin', 'value-external'],
              'type-internal',
              'value-internal',
              ['type-parent', 'type-sibling', 'type-index'],
              ['value-parent', 'value-sibling', 'value-index'],
              'style',
              'side-effect',
              'side-effect-style',
              'ts-equals-import',
              'unknown'
            ],
            internalPattern: ['^~/.+', '^@/.+'],
            newlinesBetween: 1,
            order: 'asc',
            type: 'natural'
          }
        ],
        'perfectionist/sort-interfaces': [
          'error',
          {
            groups: ['property', 'member', 'method', 'index-signature'],
            order: 'asc',
            type: 'alphabetical'
          }
        ],
        'perfectionist/sort-jsx-props': [
          'error',
          {
            customGroups: [
              {
                groupName: 'reserved',
                elementNamePattern: '^(key|ref)$'
              },
              {
                groupName: 'callback',
                elementNamePattern: '^on[A-Z].*'
              }
            ],
            groups: ['shorthand-prop', 'reserved', 'multiline-prop', 'unknown', 'callback'],
            order: 'asc',
            type: 'alphabetical'
          }
        ],
        'perfectionist/sort-union-types': [
          'error',
          {
            groups: [
              'conditional',
              'function',
              'import',
              'intersection',
              'keyword',
              'literal',
              'named',
              'object',
              'operator',
              'tuple',
              'union',
              'nullish'
            ],
            order: 'asc',
            specialCharacters: 'keep',
            type: 'alphabetical'
          }
        ]
      }
    },
    ...configs
  );
};
