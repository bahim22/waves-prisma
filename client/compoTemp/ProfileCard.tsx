// @ts-nocheck
import * as React from 'react';

// import new created interface
interface ProfileCardProps {
  data: IUser;
}

const ProfileCard = ({ data }: ProfileCardProps) => (
  <div className="max-w-sm w-full lg:flex mx-auto flex border rounded-lg border-gray-400 bg-white rounded-b p-4 text-left shadow-lg mb-5">
    <div className="h-20 lg:h-auto flex-none text-center">
      <img
        className="w-20 h-20 rounded-full mr-4"
        src={data.image}
        alt={`Avatar of ${data.name}`}
      />
    </div>
    <div className="flex flex-col justify-between leading-normal">
      <div className="mb-1">
        <p className="text-sm text-gray-600 flex items-center">
          <svg
            width={24}
            height={24}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-500 mr-2"
          >
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx={12} cy={7} r={4} />
          </svg>
          Profile
        </p>
        <div className="text-gray-900 font-bold text-xl my-1">{data.name}</div>

        <div className="font-normal text-sm text-gray-500 truncate">
          string:
          <span className="ml-1 text-normal leading-5 font-medium text-blue-600">
            {data.breed}
          </span>
        </div>

        <div className="font-normal text-sm text-gray-500 truncate">
          string:
          <span className="ml-1 text-normal leading-5 font-medium text-blue-600">
            {data.dob}
          </span>
        </div>

        <div className="font-normal text-sm text-gray-500 truncate">
          string:
          <span className="ml-1 text-normal leading-5 font-medium text-blue-600">
            {data.humanFriend}
          </span>
        </div>

        <div className="font-normal text-sm text-gray-500 truncate">
          string:
          <span className="ml-1 text-normal leading-5 font-medium text-blue-600">
            {data.address}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileCard;
