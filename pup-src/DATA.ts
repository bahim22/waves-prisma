import { IDog } from './components/dog.interface';

const DATA: IDog = {
	name: 'Collins',
	breed: 'Border Collie',
	dob: '02/26/2012',
	address: 'San Francisco',
	humanFriend: 'Alexi Taylor',
	image: 'https://i.imgur.com/pf4nUAN.jpg',
	friends: [
		{
			name: 'Charzar',
			breed: 'Border Collie',
			dob: '07/07/2016',
			address: 'Petaluma',
			humanFriend: 'Nicolas Taylor',
			image: 'https://i.imgur.com/ABA7xs4.jpg',
		},
		{
			name: 'Lilly',
			breed: 'Poodle',
			dob: '04/21/2013',
			address: 'San Anselmo',
			humanFriend: 'Alice Smith',
			image: 'https://i.imgur.com/yRHjih0.jpg',
		},
	],
};

export default DATA;
