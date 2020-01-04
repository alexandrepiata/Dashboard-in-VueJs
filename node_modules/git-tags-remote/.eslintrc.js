module.exports = {
	extends: ['airbnb'],
	rules: {
		'comma-dangle': ['error', {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			functions: 'never',
		}],
		indent: ['error', 'tab'],
		'no-tabs': 0,
	},
};
