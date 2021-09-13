import React from 'react';
import { 
  Router,
  Switch,
  Route,
  Redirect, 
} from 'react-router-dom';
import './App.css';
import theme from './Theme';

import Navigation from './Components/Navigation';

import AboutMePage from './Pages/AboutMePage';
import PortfolioPage from './Pages/PortfolioPage';
import ContactPage from './Pages/ContactPage';
import ResumePage from './Pages/ResumePage';
import NotFoundPage from './Pages/NotFoundPage';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AboutMePage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route exact path="/contact" component={ContactPage} />
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
