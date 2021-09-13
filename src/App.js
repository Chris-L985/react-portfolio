import React from 'react';
import { 
  Router,
  Switch,
  Route,
  Redirect, 
} from 'react-router-dom';

import Homepage from './Pages/Homepage';
import ResumePage from './Pages/ResumePage';
import NotFoundPage from './Pages/NotFoundPage';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/resume" component={ResumePage} />
        <Route exact path="/404" component={NotFoundPage} />
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
