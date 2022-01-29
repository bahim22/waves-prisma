import { IDog } from './components/dog.interface';

const DATA: IDog = {
	name: 'Cora Athena',
	breed: 'Pitbull Mix',
	dob: '10/22/2021',
	address: 'Pittsburgh',
	humanFriend:[ 'Emily','Hima'],
	image: 'https://i.imgur.com/pf4nUAN.jpg',
	friends: [
		{
			name: 'Jackson',
			breed: 'Border Collie',
			dob: '07/07/2016',
			address: 'Northside',
			humanFriend: 'Vick',
			image: 'public/img/jax.png',
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
