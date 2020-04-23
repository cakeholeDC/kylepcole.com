import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

//helper functions
import stringToURL  from '../utils/stringToUrl.js'


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
		project: {
			id: 0,
			year: 1111,
			name: '',
			thumbnail: '',
			teaser: '',
			description: '',
			stack: {},
			technologies: [],
			collaborators: [],
			demo: '',
			gallery: [],
			link: ''
		}
	}

	componentDidMount(){
		this.setState({ 
			project: this.props.projects.find(proj => stringToURL(proj.name) === this.props.match.params.id)
		})
	}

	getStackIcon(tech){
		let title, icon
		switch(tech.toLowerCase()) {
			case "ruby": title = "Ruby"; icon = 'ruby-128.png'; break;
			case "rails": title = "Ruby on Rails"; icon = 'rails-128.png'; break;
			case "react": title = "ReactJS"; icon = 'react-128.png'; break;
			case "postgres": title = "PostgreSQL"; icon = 'Postgresql_elephant.svg'; break;
			case "mongo": title = "MongoDB"; icon = 'mongo.png'; break;
			case "sqlite": title = "SQLite"; icon = 'Sqlite.svg'; break;
			case "heroku": title = "Heroku"; icon = 'heroku-logo-solid-purple.svg'; break;
			case "aws": title = "AWS"; icon = 'aws.png'; break;
			case "angular": title = "Angular"; icon = 'angular-official.png'; break;
		  	default: return '';
		}
		const awsIcon = "https://d0.awsstatic.com/logos/powered-by-aws.png"
		return <img className="stack-icon" title={ title } key={ icon } alt={ icon } src={ `/icons/skills/${icon}` }/>
	}

	getStack = (stack) => {
		return Object.values(stack).map(tech => this.getStackIcon(tech))
	}

	getCollaborators = () => {
		if (this.state.project.collaborators.length > 0){
			const devs = this.state.project.collaborators.map(dev => 
				<a 
					className="collaborator" 
					key={ stringToURL(dev.name) } 
					href={ dev.link }
				>{ dev.name }</a>
			)
			return <div className="project-collaborators">Collaboration with&nbsp;{devs}</div>
		} else {
			return null
		}
	}
	
	render(){
		const project = this.state.project

		return(
			<ProjectContainer>
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
						{ project.technologies.map(tech => <li className="tech" key={ stringToURL(tech) }>{ tech }</li>) }
					</ul>
			</ProjectContainer>
		)
	}
}

export default withRouter(ProjectPage)