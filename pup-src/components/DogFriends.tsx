import * as React from 'react';
import { useDogProviderState } from './DogDataProvider';
import { IDog, Status } from './dog.interface';
import ProfileCard from './ProfileCard';
import Loader from './Loader/Loader';
import Error from './Error/Error';

interface FriendsListProps {
  friends: IDog[];
}

const FriendsList = ({ friends }: FriendsListProps) => (
  <div>
    {friends.map(friend => (
      <div key={friend.name}>
        <ProfileCard data={friend} />
      </div>
    ))}
  </div>
);

const DogFriends = () => {
  // Our custom hook that "subscirbes" to the state changes in 
	// the data provider component, DogDataProvider.
  const { data, status, error } = useDogProviderState();
  return (
    <div>
      <h1 className="text-3xl font-bold leading-7 text-white sm:text-4xl sm:leading-9 sm:truncate my-5">
        Friends:
      </h1>
      <div className="mt-10">
        {/* If the API call returns an error we will show an error message */}
        {error ? (
          <Error errorMessage={error.message} />
          // Show a loading state when we are fetching the data
        ) : status === Status.loading ? (
          <Loader isInherit={true} />
        ) : (
          // Display the content with the data 
          // provided via the custom hook, useDogProviderState.
          <FriendsList friends={data.friends} />
        )}
      </div>
    </div>
  );
};

export default DogFriends;
