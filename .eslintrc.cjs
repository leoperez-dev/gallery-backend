module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-type-checked'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: true,
		tsconfigRootDir: __dirname,
	},
	plugins: ['@typescript-eslint'],
	root: true,
	ignorePatterns: ['**/*.test.ts', '.eslintrc.cjs'],
	rules: {
		'@typescript-eslint/no-misused-promises': [
			'error',
			{
			  'checksVoidReturn': {
				'arguments': false,
			  }
			}
		  ]
	}
};