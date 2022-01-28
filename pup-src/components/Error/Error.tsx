import * as React from 'react';

interface ErrorProps {
  errorMessage?: string;
}

const Error: React.FC<ErrorProps> = ({ errorMessage = 'Error.' }) => (
  <p className="text-xl leading-7 font-semibold text-red-500">
    <span role="img" aria-label="Error" className="mr-3">🚧</span>
    {errorMessage}
  </p>
);

export default Error;
