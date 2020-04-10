import React from 'react';
import './App.scss';
import { Switch, Route, Link } from "react-router-dom";
import Header from './containers/Header.js'
import HomePage from './containers/HomePage.js'
import Projects from './containers/Projects.js'
import ProjectPage from './components/ProjectPage.js'
import About from './components/About.js'

function App() {
  return (
    <div className="App">
    	<Header />
    	<Switch>
          <Route exact path="/about" component={ About } />
          <Route exact path="/projects" component={ Projects } />
          <Route exact path="/projects/:id" component={ ProjectPage } />
          <Route exact path="/resume" component={ Projects } />
          <Route exact path="/contact" component={ Projects } />
          <Route exact path="/" component={ HomePage } />
        </Switch>
    </div>
  );
}

export default App;
