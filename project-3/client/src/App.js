import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Intro from "./pages/Intro";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Saved from "./pages/Saved";
import './App.css';

const App = () => (
  <Router>
    <div>
       <Nav />
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/saved" component={Saved} />
      </Switch>
    </div>
  </Router>
)

export default App;
