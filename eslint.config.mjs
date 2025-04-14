import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import parser from 'astro-eslint-parser'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
})

export default defineConfig([
	globalIgnores([
		'.astro/*', // unignore `node_modules/` directory
		'dist/*', // unignore `node_modules/` directory
		// '!node_modules/', // unignore `node_modules/` directory
		// 'node_modules/*', // ignore its content
		// '!node_modules/mylibrary/', // unignore `node_modules/mylibrary` directory
	]),
	{
		extends: compat.extends('eslint:recommended', 'plugin:astro/recommended'),

		languageOptions: {
			globals: {
				...globals.node,
				...globals.browser,
			},

			ecmaVersion: 'latest',
			sourceType: 'module',
		},

		rules: {
			'no-mixed-spaces-and-tabs': 'off',
		},
	},
	{
		files: ['**/*.astro'],

		languageOptions: {
			parser: parser,
			ecmaVersion: 5,
			sourceType: 'script',

			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
		},

		rules: {},
	},
	{
		files: ['**/*.ts'],
		extends: compat.extends('plugin:@typescript-eslint/recommended'),

		languageOptions: {
			parser: tsParser,
		},

		rules: {
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
				},
			],

			'@typescript-eslint/no-non-null-assertion': 'off',
		},
	},
	{
		files: ['**/*.d.ts'],

		rules: {
			'@typescript-eslint/triple-slash-reference': 'off',
		},
	},
	{
		files: ['**/*.tsx'],

		extends: compat.extends(
			'eslint:recommended',
			'plugin:@typescript-eslint/recommended',
			'plugin:@typescript-eslint/recommended-requiring-type-checking'
		),

		plugins: {
			'@typescript-eslint': typescriptEslint,
		},

		languageOptions: {
			parser: tsParser,
			ecmaVersion: 5,
			sourceType: 'script',

			parserOptions: {
				tsconfigRootDir: '/home/jllahi/Code/Testing/Astro/github-actions-astro',
				project: ['./tsconfig.json'],
			},
		},

		rules: {
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
				},
			],

			'@typescript-eslint/no-non-null-assertion': 'off',
		},
	},
	{
		files: ['**/*.astro/*.js', '*.astro/*.js'],

		languageOptions: {
			parser: tsParser,
		},
	},
])
