import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './layout/theme';
import FrontPage from './pages/FrontPage';
import ProfilePage from './pages/ProfilePage';
import NotFound from './pages/NotFoundPage';
import BottomMenu from './components/BottomMenu/BottomMenu';
import Demo from './pages/Demo';
import ActiveTicketPage from "./pages/ActiveTicketPage";
import TestDialog from './pages/TestDialog';
// import TicketPage from "./pages/TicketPage";

function App() {
  const setLocalStorage = () => {
    let showTutorial = localStorage.getItem('showTutorial');
    if (showTutorial === null) {
      localStorage.setItem('showTutorial', true);
    }
  };
  setLocalStorage();
  return (

    <Router>
      <div className='App'>
        <ThemeProvider theme={theme}>
          <div id='wrapper'>
            <div className='container'>
              <Switch>
                <Route exact path='/' component={FrontPage} />
                <Route exact path='/demopage' component={Demo} />
                {/*<Route exact path='/ticket' component={TicketPage} />*/}
                <Route exact path='/profile' component={ProfilePage} />
                <Route exact path='/activeticket' component={ActiveTicketPage} />
                <Route exact path='/test' component={TestDialog} />
                <Route component={NotFound} />
              </Switch>
            </div>
            <BottomMenu />
          </div>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
