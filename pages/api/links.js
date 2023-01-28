const links = [
	{
		_id: 'link_1',
		icon: {
			path: '/icons/apple-logo.svg',
			width: 76
		},
		gradient: {
			from: '#13E780',
			to: '#00bbd5'
		},
		link: 'https://www.apple.com/',
		title: 'Web Site'
	},
	{
		_id: 'link_2',
		icon: {
			path: '/icons/store.svg',
			width: 80
		},
		gradient: {
			from: '#fc5dff',
			to: '#5dfdff'
		},
		link: 'https://www.apple.com/store',
		title: 'Apple Store',
		isImportant: true
	},
	{
		_id: 'link_3',
		icon: {
			path: '/icons/global.svg',
			width: 80
		},
		gradient: {
			from: '#FEAC5E',
			to: '#4BC0C8'
		},
		link: 'https://support.apple.com/',
		title: 'How to buy from other countries'
	},
	{
		_id: 'link_7',
		icon: {
			path: '/icons/youtube.svg',
			width: 84
		},
		gradient: {
			from: '#e53935',
			to: '#e35d5b'
		},
		link: 'https://www.youtube.com/apple',
		title: 'Youtube'
	}
]

export default function handler(req, res) {
	res.status(200).json(links)
}
