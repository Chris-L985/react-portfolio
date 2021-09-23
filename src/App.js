import React from 'react';
import { 
  Router,
  Switch,
  Route,
  Redirect, 
  useLocation,
} from 'react-router-dom';
import './App.css';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from './Theme';

import Navigation from './Components/NavigationHeader';

import AboutMePage from './Pages/AboutMePage';
import PortfolioPage from './Pages/PortfolioPage';
import ContactPage from './Pages/ContactPage';
import ResumePage from './Pages/ResumePage';



const App = () => {
  const location = useLocation();
  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={theme} >
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={AboutMePage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/resume" component={ResumePage} />
        </Switch>
      </ThemeProvider>
    </div>   
  );
}

export default App;
