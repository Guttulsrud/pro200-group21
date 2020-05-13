import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ExamplePage from './pages/ExamplePage';
import Another from './pages/AnotherPage';
import NotFound from './pages/NotFoundPage';
import NavBar from './components/NavBar';
import BottomMenu from './components/BottomMenu';
import Demo from './pages/Demo';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={ExamplePage} />
            <Route exact path='/another' component={Another} />
            <Route exact path='/demopage' component={Demo}/>
            <Route component={NotFound} />
          </Switch>
        </div>
        <BottomMenu />
      </div>
    </Router>
  );
}

export default App;
