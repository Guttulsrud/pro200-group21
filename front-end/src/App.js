import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './layout/theme';
import FrontPage from './pages/FrontPage';
import LiveMapPage from './pages/LiveMapPage';
import TicketPage from './pages/TicketPage';
import ProfilePage from './pages/ProfilePage';
import PurchasePage from './pages/PurchasePage';
import NotFound from './pages/NotFoundPage';
import BottomMenu from './components/BottomMenu/BottomMenu';
import Demo from './pages/Demo';
import ActiveTicketPage from './pages/ActiveTicketPage';
import BetterActiveTicketPage from "./pages/BetterActiveTicketPage";

function App() {
  return (
    <Router>
      <div className='App'>
        <ThemeProvider theme={theme}>
          <div id='wrapper'>
            <div className='container'>
              <Switch>
                <Route exact path='/' component={FrontPage} />
                <Route exact path='/demopage' component={Demo} />
                <Route exact path='/livemap' component={LiveMapPage} />
                <Route exact path='/ticket' component={TicketPage} />
                <Route exact path='/profile' component={ProfilePage} />
                <Route exact path='/activeticket' component={BetterActiveTicketPage} />
                <Route exact path='/purchase' component={PurchasePage} />
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
