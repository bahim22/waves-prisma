import * as React from 'react';
import { IDog, Status } from './dog.interface';
import DATA from '../DATA';

interface State {
  data: IDog;
  status: Status;
  error: Error;
}

const initState: State = { status: Status.loading, data: null, error: null };

// Create a DogDataProviderContext with React.createContext
const DogDataProviderContext = React.createContext(undefined);
// Context object accepts a displayName string property.
// React DevTools uses this string to determine what to display
// for the context.
DogDataProviderContext.displayName = 'DogDataProvider';

// The Custom Consumer Hook
// The custom hook uses React.useContext to get the provided context value, and
// it will return the context state when we call it.
// By exposing the custom hook, the consumer components can subscribe to the state
// managed in the provider data component. Also, we have added error handling if the
// hook is called in a component that is not a descendant of the data provider component.
// This will ensure if misused that it will fail fast and provide a valuable error message.
export function useDogProviderState() {
  const context = React.useContext(DogDataProviderContext);

  // IMPORTANT to pass undefined to React.createContext() and DO NOT pass 
  // default values.
  if (context === undefined) {
    throw new Error('useDogProviderState must be used within DogDataProvider.');
  }

  return context;
}

// Our data provider wrapper component
const DogDataProvider: React.FC = ({ children }): React.ReactElement => {
  // Everything that we want to provide to our consumer components
  // should be put into `state`.
  // It will help us avoid unnecessary re-renders.
  const [state, setState] = React.useState<State>(initState);

  React.useEffect(() => {
    setState(initState);

    (async (): Promise<void> => {
      try {
        // MOCK API CALL
        const asyncMockApiFn = async (): Promise<IDog> =>
          await new Promise(resolve => setTimeout(() => resolve(DATA), 1000));
        // MOCK FAILED API CALL
        // const asyncFnReject = async (): Promise<void> => {
        // 	await new Promise((resolve, reject) =>
        // 		setTimeout(() => {
        // 			reject(new Error('Request failed with status code 404'));
        // 		}, 1000),
        // 	);
        // };
        const data = await asyncMockApiFn();
        // Once our SPA loads the data will only be fetched once even
        // when we navigate to another page.
        console.log('1 CALL');
        setState({
          data,
          status: Status.loaded,
          error: null
        });
      } catch (error) {
        console.log(error.message);

        setState({
          error,
          status: Status.error,
          data: null
        });
      }
    })();
  }, []);

  return (
    <DogDataProviderContext.Provider value={state}>
      {children}
    </DogDataProviderContext.Provider>
  );
};

export default DogDataProvider;
