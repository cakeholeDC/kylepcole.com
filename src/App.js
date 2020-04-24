import React from 'react';
import './App.scss';
import { Switch, Route, Link } from "react-router-dom";
import Header from './containers/Header.js'
import HomePage from './containers/HomePage.js'
import Projects from './containers/Projects.js'
import Blog from './containers/Blog.js'
import Resume from './containers/Resume.js'
import ProjectPage from './components/ProjectPage.js'
import BlogPost from './components/BlogPost.js'
import Contact from './containers/Contact.js'
import Footer from './containers/Footer.js'
import ErrorPage from './components/ErrorPage.js'
import { withTheme } from 'styled-components';

//helpers
import getMediumBlogPosts from './utils/getMediumBlogPosts.js'

//static content
import $ProjectList from './data/projectList.js'
import $SkillList from './data/skillList.js'

// let theme = {
//   $header: "'Fjalla One', sans-serif;",
//   $body: "'Cantarell', sans-serif;"
// }

class App extends React.Component {
  state={
    projects: $ProjectList,
    posts: [],
    skills: $SkillList,
  }

  async componentDidMount(){
    this.setState({ 
      posts: await getMediumBlogPosts()
    })
  }


  render(){
    console.log(this.props)
    return (
      <div className="App">
      	<Header />
        <div className="content">
        	<Switch>
              <Route exact path="/404" component={ ErrorPage } />
              <Route exact path="/about" component={ HomePage } />
              <Route exact path="/blog" render={ () => <Blog posts={ this.state.posts }/> }/>
              <Route exact path="/blog/:id" render={ () => <BlogPost posts={ this.state.posts }/> }/>
              <Route exact path="/projects" render={ ()=> <Projects projects={ this.state.projects } /> } /> 
              <Route exact path="/projects/:id" render={ () => <ProjectPage projects={ this.state.projects } /> } />
              <Route exact path="/resume" render={ () => <Resume skills={ this.state.skills }/> } />
              <Route exact path="/contact" component={ Contact } />
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

export default withTheme(App);
