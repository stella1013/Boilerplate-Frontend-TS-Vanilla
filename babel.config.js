//USED FOR TEST RUNNER JEST
//const { moduleFileExtensions } = require("./jest.config");

module.exports = (api) => {
	const isTest = api.env('test');
	api.cache(true);
	return {
		presets: [
			[
				'@babel/preset-env',
				{
					targets: {
						node: 'current'
					},
					modules: isTest ? 'es6' : false,
				},
			],
			'@babel/preset-typescript',
		],
		plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
	};
};
