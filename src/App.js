import React from 'react';
import './App.scss';
import { Switch, Route, Link } from "react-router-dom";
import Header from './containers/Header.js'
import HomePage from './containers/HomePage.js'
import About from './components/About.js'
import Projects from './containers/Projects.js'
import Blog from './containers/Blog.js'
import Skills from './containers/Skills.js'
import PROJECTS from './data/projectList.js'
import ProjectPage from './components/ProjectPage.js'
import BlogPost from './components/BlogPost.js'
import Footer from './containers/Footer.js'
import ErrorPage from './components/ErrorPage.js'
// import Feed from 'rss-to-json'


class App extends React.Component {
  state={
    projects: null,
    posts: null,
    skills: null,
  }

  componentDidMount(){
    const corsProxy = "https://cors-anywhere.herokuapp.com/"
    const blogRSS = 'https://medium.com/feed/@cakehole';

    // //npm package
    // //no limits, runs locally
    // var Feed = require('rss-to-json');
    // var blogPosts
    // var test
 
    // debugger
    // Feed.load(corsProxy + blogRSS, function(err, rss){
    //     console.log(rss) // need this output....
    //     blogPosts = [...rss.items]
    //   }
    // )
    // this.setState({
    //   test: blogPosts
    // })


    // use URL converter api
    // one hour update, 10k requests per day
    const apiPrefix = 'https://api.rss2json.com/v1/api.json?rss_url=';

    fetch(apiPrefix + blogRSS)
      .then(res => res.json())
      .then(json => {
        console.log(json.items)
        this.setState({ 
          posts: json.items,
          // projects: [...PROJECTS]
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
              <Route exact path="/projects" render={()=> <Projects projects={ PROJECTS } /> } /> 
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
