export interface IDog {
	name: string;
	breed: string;
	dob?: string;
  address?: string;
  image?: string;
	humanFriend?: string;
	friends?: IDog[];
}

export enum Status {
	loading = 'LOADING',
	loaded = 'LOADED',
	error = 'ERROR',
}
