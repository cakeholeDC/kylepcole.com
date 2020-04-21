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
		width: 100%;
		text-align: left;
		margin-top: .75rem;
		
		.project-title{
			display: flex;
			margin-bottom: 1rem;
			border-bottom: 1px solid lightgray;
			
			h1 {
				flex: 2;
				margin-top: 0px;
				font-family: 'Fjalla One', sans-serif;
			}

			.stack-icons {
				text-align: center;
				flex: 2;
				display:flex;
				justify-content: flex-end;
				padding-top: .5rem;

				.stack-icon {
					flex: 1;
					max-height: 2rem;
					max-width: 2rem;
					object-fit: contain;
					margin-right: .5rem;
				}
			}
		}

		.project-details {
			display: flex;
			margin-bottom: 1rem;
			border-bottom: 1px solid lightgray;

			p {
				flex: 2;
				margin-top: 0px;
			}

			.project-collaborators {
			    margin-right: 1rem;
				flex: 2;
				display:flex;
				justify-content: flex-end;
			}
		}

	}
	p {
		flex: 2;
		text-align: right;
		margin-right: 0;
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
	}

	ul {
		clear: left;
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
		let title, icon
		switch(tech.toLowerCase()) {
			case "ruby":
				title = "Ruby"
				icon = 'ruby-128.png'
			break;
			case "rails":
				title = "Ruby on Rails"
				icon = 'rails-128.png'
			break;
			case "react":
				title = "ReactJS"
				icon = 'react-128.png'
			break;
			case "postgres":
				title = "PostgreSQL"
				icon = 'Postgresql_elephant.svg'
			break;
			case "mongo":
				title = "MongoDB"
				icon = 'mongo.png'
			break;
			case "sqlite":
				title = "SQLite"
				icon = 'Sqlite.svg'
			break;
		  	default:
		    	return ''
		}

		return <img className="stack-icon" title={ title } alt={ icon } src={ `/icons/skills/${icon}` }/>
	}

	getStack = (stack) => {
		return Object.values(stack).map(tech => this.getStackIcon(tech))
	}

	getCollaborators = () => {
		if (this.state.project.collaborators.length > 0){
			const devs = this.state.project.collaborators.map(dev => <a className="collaborator"href={dev.link}>{dev.name}</a>)
			return <div className="project-collaborators">Collaboration with&nbsp;{devs}</div>
		} else {
			return null
		}
	}
	
	render(){
		const project = this.state.project

		return(
			<ProjectContainer>
				{ project ?
					<React.Fragment>
					<img src={ project.thumbnail } onError={event => event.target.src = "https://via.placeholder.com/300"} />
					<div className="project-header">
						<div className="project-title">
							<h1>{ project.name }</h1>
							<div className="stack-icons">{ this.getStack(project.stack) }</div>
						</div>
						<div className="project-details">
						<p>Est. { project.year }</p>
						{ this.getCollaborators() }
						</div>
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