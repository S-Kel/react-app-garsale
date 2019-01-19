import React, { Fragment, Component } from "react";
import {Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { LastLocationProvider } from 'react-router-last-location';

import "./App.css";
import Welcome from "../components/pages/Welcome";
import Nav from "../components/nav/Nav";
import NotFound from "../components/_404/NotFound";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Authentication from "../components/auth/Authentication";


class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <LastLocationProvider>
            <Fragment>
              <Nav />
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/users/register" render={props => { return <Authentication {...props} authType={"register"} /> }} />
                <Route path="/users/login" render={props => { return <Authentication {...props} authType={"login"} /> }} />
                <Route path="/users/logout" render={props => { return <Authentication {...props} authType={"logout"} /> }} />
                <Route component={NotFound} />
              </Switch>
            </Fragment>
          </LastLocationProvider>
        </Router>
      </div >
    );
  };
};

export default App;
