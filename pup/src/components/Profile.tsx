import * as React from 'react';
import { useDogProviderState } from './DogDataProvider';
import ProfileCard from './ProfileCard';
import Loader from './Loader/Loader';
import Error from './Error/Error';
import { Status } from './dog.interface';

const Profile = () => {
  // Our custom hook that "subscribes" to the state changes in 
	// the data provider component, DogDataProvider.
	const { data, status, error } = useDogProviderState();

	return (
		<div>
			<h1 className="text-3xl font-bold leading-7 text-white sm:text-4xl sm:leading-9 sm:truncate my-5">
				Profile
			</h1>
			<div className="mt-10">
        {/* If the API call returns an error show an error message */}
				{error ? (
					<Error errorMessage={error.message} />
          // Show a loading state when we are fetching the data
				) : status === Status.loading ? (
					<Loader isInherit={true} />
				) : (
					// Display content w/ data via custom hook, useDogProviderState.
					<ProfileCard data={data} />
				)}
			</div>
		</div>
	);
};

export default Profile;
