import React from 'react';
import './css/App.css';
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
  withRouter,
} from "react-router-dom";
import SignIn from './components/SignIn';
import Dashboard from './components/dashboard/Dashboard';

function createPath(path) {
  return process.env.PUBLIC_URL + path;
}

const TransitionApp = withRouter(({ location }) => {
  console.log(location);
  return (<TransitionGroup>
    <CSSTransition key={location.key} classNames="fade" timeout={0}>
      <Switch location={location}>
        <Route exact path='/'>
          <Redirect to="/signin" />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </CSSTransition>
  </TransitionGroup>);
});

function App() {

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/signin" />
          </Route>
          <Route path="*">
            <TransitionApp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
