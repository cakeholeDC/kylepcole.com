import React from 'react';
import './App.scss';
import { Switch, Route, Link } from "react-router-dom";
import Header from './containers/Header.js'
import HomePage from './containers/HomePage.js'
import Blog from './containers/Blog.js'
import Projects from './containers/Projects.js'
import Skills from './containers/Skills.js'
import Footer from './containers/Footer.js'
import ProjectPage from './components/ProjectPage.js'
import About from './components/About.js'
import BlogPost from './components/BlogPost.js'
import ErrorPage from './components/ErrorPage.js'


class App extends React.Component {
  state={
    posts: null
  }

  componentDidMount(){
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cakehole")
      .then(res => res.json())
      .then(json => {
        console.log(json.items)
        this.setState({ 
          posts: json.items
        })
      })

  }

  render(){
    
    return (
      <div className="App">
      	<Header />
        <div className="content">
        	<Switch>
              <Route exact path="/404" component={ ErrorPage } />
              <Route exact path="/about" component={ About } />
              <Route exact path="/blog" render={() => <Blog posts={ this.state.posts }/> }/>
              <Route exact path="/blog/:id" render={() => <BlogPost posts={ this.state.posts }/> }/>
              <Route exact path="/projects" component={ Projects } />
              <Route exact path="/projects/:id" component={ ProjectPage } />
              <Route exact path="/resume" component={ Skills } />
              <Route exact path="/contact" component={ About } />
              <Route exact path="/home" component={ HomePage } />
              <Route exact path="/" component={ HomePage } />
          { /* allows for shortpath links to projects. Will direct to 404 as needed from ProjectPage.js */ }
              <Route exact path="/:id" component={ ProjectPage } />
            </Switch>
          </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
