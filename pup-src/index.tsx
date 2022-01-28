import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Nav from './components/Nav';
import Profile from './components/Profile';
import DogFriends from './components/DogFriends';
import DogDataProvider from './components/DogDataProvider';

import './styles.css';

function App() {
  return (
    // React Router component
    <Router>
      <div className="App">
        {/* The data provder component responsible 
        for fetching and managing the data for the child components.
        This needs to be at the top level of our component tree.*/}
        <DogDataProvider>
          <Nav />
          <main className="py-5 md:py-20 max-w-screen-xl mx-auto text-center text-white w-full">
            <Banner
              title={'React Component Patterns:'}
              subtitle={'Provider Pattern'}
            />
            {/* A React Router component */}
            <Switch>
              <Route exact path="/">
                {/* A child component that will consume the data from 
                the data provider component, DogDataProvider. */}
                <Profile />
              </Route>
              <Route path="/friends">
                {/* A child component that will consume the data from 
                the data provider component, DogDataProvider. */}
                <DogFriends />
              </Route>
            </Switch>
          </main>
        </DogDataProvider>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById('root');
render(<App />, rootElement);
