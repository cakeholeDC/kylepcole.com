import React from 'react';
import './App.scss';
import { Switch, Route, Link } from "react-router-dom";
import Header from './containers/Header.js'
import HomePage from './containers/HomePage.js'
import Projects from './containers/Projects.js'
import ProjectPage from './components/ProjectPage.js'
import About from './components/About.js'
import ErrorPage from './components/ErrorPage.js'

function App() {
  return (
    <div className="App">
    	<Header />
    	<Switch>
          <Route exact path="/404" component={ ErrorPage } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/projects" component={ Projects } />
          <Route exact path="/projects/:id" component={ ProjectPage } />
          <Route exact path="/resume" component={ Projects } />
          <Route exact path="/contact" component={ Projects } />
          <Route exact path="/home" component={ HomePage } />
          <Route exact path="/" component={ HomePage } />
      { /* allows for shortpath links to projects. Will direct to 404 as needed from ProjectPage.js */ }
          <Route exact path="/:id" component={ ProjectPage } />
        </Switch>
    </div>
  );
}

export default App;
