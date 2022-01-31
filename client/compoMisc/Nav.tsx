// @ts-nocheck
import * as React from 'react';
import { Link } from 'react-router-dom';
//import status from data provider and interface

const Nav = () => {
  // hook that "subscribes" to the state changes in 
	// the data provider component
  const { data, status, error } = useDogProviderState();
  return (
    <nav className="flex items-center flex-col sm:flex-row bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        {/*create svg & path  */}
        {/* <svg
          className="fill-current h-8 w-8 mr-2"
          width={512}
          height={512}
          viewBox="0 0 512 512"
        >
          <path d="M410.66 180.72q-7.67-2.62-15.45-4.88  9.68 2.93 14.27 4.52 44.42 15.32 71.52 38 71.52 55.43 0 18.6-29.27 42.74-76.78 58.52z" />
          <path d="M256 298.55a43 43 0 10-42.86-43 42.91 42.91 0 0042.86 43z" />
        </svg> */}

        <span className="font-semibold text-xl tracking-tight">
          string
        </span>
      </div>
      <div className="flex items-center flex-row justify-between w-full">
        <div className="text-base flex flex-row">
          <Link
            to="/"
            className="block sm:inline-block mt-0 text-blue-200 hover:text-white mr-4"
          >
          string
          </Link>
          <Link
            to="/friends"
            className="block sm:inline-block mt-0 text-blue-200 hover:text-white mr-4"
          >
            string
          </Link>
        </div>
        <div>
          <span className="inline-block text-base py-2 leading-none text-white mt-0">
            {/* Show the user's name if the status is loaded w/ no error */}
            {status === Status.loaded && !error && data.name}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
