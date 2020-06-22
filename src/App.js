import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Performance from './performance/pages/Performance';

const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <Performance />
          </Route>        
        </Switch>
        </main>
    </Router>
      
    );
  }; 
 
export default App;
