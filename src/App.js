import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Layouts/Navbar';
import Index from './components/Layouts/Index';
import Lyrics from './components/tracks/Lyrics';

import Provider from './context';

import './App.css';

const App = () => {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Index} />
              <Route exact path='/lyrics/track/:id' component={Lyrics} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
};

export default App;
