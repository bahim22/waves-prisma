import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Banner from './components/Banner/Banner';
import Nav from './components/Nav';
import Profile from './components/Profile';
import DogFriends from './components/DogFriends';
import DogDataProvider from './components/DogDataProvider';

import './styles.css';

//Router = React Router component
/* DogDataProvider = The data provider component responsible for fetching and managing the data for the child components.This needs to be at the top level of our component tree.*/
// Switch = react router compo
// Profile and DogFriends =  child compo that sconsume data from the data provider compo, DogDataProvider.

function App() {
  return (
    <Router> 
      <div className="App">
        <DogDataProvider>
          <Nav />
          <main className="py-5 md:py-20 max-w-screen-xl mx-auto text-center text-white w-full">
            <Banner
              title={'React Component Patterns:'}
              subtitle={'Provider Pattern'}
            />
            <Switch>
              <Route exact path="/">
                <Profile />
              </Route>
              <Route path="/friends">
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
