module.exports = {
	title: 'title',
	locales: {
		'/': {
			lang: 'ja'
		}
	},
	meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' }
	],
	themeConfig: {
		sidebar: [
			{
				title: 'Home',
				path: '/',
				collapsable: false
			},
			{
				title: 'sub',
				path: '/sub/',
				collapsable: false,
				children: [
					'/sub/subsub1/',
					'/sub/subsub2/'
				]
			}
		]
	}
}
