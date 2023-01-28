const me = {
	siteName: 'Apple',
	avatar: '/avatar.png',
	description:
		'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, impedit.</p>' +
		'<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere est eligendi nemo ut fugiat id.</p>' +
		'<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consequatur iste est laborum! Ratione repellendus non suscipit incidunt?</p>' +
		'<p>Lorem ipsum dolor sit amet. 😊</p>'
}

export default function handler(req, res) {
	res.status(200).json(me)
}
