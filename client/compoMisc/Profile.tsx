// @ts-nocheck
import * as React from 'react';
import ProfileCard from './ProfileCard';
import Loader from './Loader/Loader';
import Error from './Error/Error';


const Profile = () => {
  //hook "subscribes" to the state changes in the data provider component.//create new user interface and dataprovider
	const { data, status, error } = npoDataProvider	();

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
					// Display content w/ data via custom hook, npoDataProvider	.
					<ProfileCard data={data} />
				)}
			</div>
		</div>
	);
};

export default Profile;
// use below until data provider created
function npoDataProvider(): {data: any; status: any; error: any;} {
	throw new Error('Function not implemented.');
}

