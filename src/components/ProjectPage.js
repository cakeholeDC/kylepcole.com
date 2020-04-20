import React from 'react'
import projectData from '../data/projectList.js'
import { Redirect } from "react-router-dom";
import styled from 'styled-components'

const ProjectContainer = styled.div`
	width: 75%;
	display: inline-block;
	padding: 0 3rem;
	margin-top: 3rem;

	.project-header {
		display: flex;
		width: 100%;
		border-bottom: 1px solid lightgray;
		text-align: left;
		
		h1 {
			flex: 2;
			margin-top: 0px;
			margin-bottom: 1rem;
		}

		.stack-icons {
			text-align: center;
			flex: 1;
			display:flex;
			justify-content: flex-start;
			padding-top: .75rem;

			img.stack-icon {
				flex: 1;
				max-height: 2rem;
				max-width: 2rem;
				object-fit: contain;
				margin-right: .5rem;
			}
		}

		p {
			flex: 2;
			text-align: right;
			margin-right: 0;
		}
	}


	img {
		width: 100%;
	    height: 25rem;
	    object-fit: cover;
	    object-position: center;
	}

	p {
		margin: 1rem;
		text-align: justify;
		// float: right;
	}

	ul {
		clear: left;
		// width: 70%;
		// margin: auto;
		// list-style: none;
		text-align: left;

		li {
			margin: 0 0 1rem 0;
		}
	}
`

class ProjectPage extends React.Component  {
	state={
		project: null
	}

	componentDidMount(){
		if (this.props.project){
			this.setState({ 
				project: this.props.project
			})
		} else {
			this.setState({ 
				project: projectData.find(proj => proj.name.replace(/ /g,'-').toLowerCase() === this.props.match.params.id)
			})
		}
	}

	// @TODO refactor to SWITCH
	getStackIcon(tech){
		const icon = tech.toLowerCase()
		if (icon ==="ruby") {
			return <img className="stack-icon" alt="ruby" src={ '/icons/skills/ruby-128.png' }/> // round
		}
		if (icon ==="rails") {
			return <img className="stack-icon" alt="rails" src={ '/icons/skills/rails-128.png' }/> // round
		}
		if (icon ==="react") {
			return <img className="stack-icon" alt="react" src={ '/icons/skills/react-128.png' }/> // round
		}
		if (icon ==="postgres") {
			return <img className="stack-icon" alt="postgres" src={ '/icons/skills/Postgresql_elephant.svg' }/>
		}
		if (icon ==="mongo") {
			return <img className="stack-icon" alt="mongo" src={ '/icons/skills/mongo.png' }/>
		}
		if (icon ==="sqlite") {
			return <img className="stack-icon" alt="sqlite" src={ '/icons/skills/Sqlite.svg' }/>
		}
		return ''
	}

	getStack = (stack) => {
		console.log("Stack", stack)
		return Object.values(stack).map(tech => this.getStackIcon(tech))
	}
	
	render(){
		const project = this.state.project
		return(
			<ProjectContainer>
				{ project ?
					<React.Fragment>
					<img src={ project.thumbnail } onError={event => event.target.src = "https://via.placeholder.com/300"} />
					<div className="project-header">
						<h1>{ project.name }</h1>
						<div className="stack-icons">{ this.getStack(project.stack) }</div>
						<p>Est. { project.year }</p>
					</div>
					<p>{ project.description }</p>
					<ul>
						<h3>Technologies Used:</h3>
						{ project.technologies.map(tech => <li className="tech" key={ tech.replace(/ /g, '-').toLowerCase() }>{ tech }</li>) }
					</ul>
					</React.Fragment>
				: <h1>Project { this.props.match.params.id.replace(/-/g," ") } Not Found</h1> // @TODO 404 page.
			}
			</ProjectContainer>
		)
	}
}

export default ProjectPage