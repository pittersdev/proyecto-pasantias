import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Suport from  '../suport';
import Markets from '../markets';
import Grafits from '../grafits/index.js';
import Home from    '../home.js';
import './nav.css'
const Nav = (props) => {

  return (
    <div>
      <Router>

          <div className="banner">
            <Link className="banner-bottom" to="/">home</Link>
            <Link className="banner-bottom" to="/markets/">Markets</Link>
            <Link className="banner-bottom" to="/grafits">Grafits</Link>
            <Link className="banner-bottom" to="/suport">Suport</Link>
          </div>
          <Switch>
            <Route path="/markets" component={Markets} />
            <Route path="/grafits" component={Grafits} />
            <Route path="/suport" component={Suport} />
            <Route path="/" component={Home} />
          </Switch>

      </Router>
    </div>
  )
}

export default Nav;
