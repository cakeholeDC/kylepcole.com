import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import ReactHtmlParser from 'react-html-parser';
import TwitterFeed from '../components/TwitterFeed'
import { device } from '../device';
import ErrorPage from '../components/ErrorPage.js'


//helper functions
import stringToURL  from '../utils/stringToUrl.js'


const ProjectContainer = styled.div`
	width: 75%;
	display: inline-block;
	padding: 0 1rem;
	margin-top: 3rem;

	@media only screen and ${device.mobileL} {
		width: 90%;
		padding: 0, .5rem;
		margin-top: 1rem;
	}

	.project-header {
		width: 100%;
		text-align: left;
		margin-top: .75rem;
		
		.project-title{
			display: flex;
			margin-bottom: 1rem;
			border-bottom: 1px solid lightgray;

			@media only screen and ${device.mobileL} {
				flex-direction: column;
			}
			
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

				@media only screen and ${device.mobileL} {
					justify-content: space-between;
					margin-bottom: 1rem;
				}

				.stack-icon {
					flex: 1;
					max-height: 2rem;
					max-width: 2rem;
					object-fit: contain;
					margin-right: .5rem;
					@media only screen and ${device.mobileL} {
						margin-right: 0px;
					}
				}
			}
		}

		.project-info {
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

	.project-details {
		display:flex;

		@media only screen and ${device.mobileL} {
			flex-direction: column-reverse;
		}

		.tech {
			flex: 1;

			@media only screen and ${device.mobileL} {
				padding: 0px;
				padding-left: 1rem;
			}
		}

		.desc {
			flex: 2;
		}

		h3 { display: block;}
	}

	p {
		flex: 2;
		text-align: right;
		margin-right: 0;
		margin: 1rem;
		text-align: justify;
	}

	ul {
		clear: left;
		text-align: left;

		li {
			margin: 0 0 1rem 3rem;
		}
	}

	iframe {
	    display: block;
	    margin: auto;
	}

	.launch-app {
		font-family: 'Abril Fatface', cursive;
		font-size: 3rem;
		width: 100%;
		margin: 1rem 0;

		a {
			text-decoration: none;
			color: black;

			&:hover {
				color: #FFCD00;
			}
		}
	}
`
const ProjectImg = styled.img`
	width: 100%;
    height: 25rem;
    object-fit: cover;
    ${props => props.name === "Scootie Gang" ? "object-position: bottom;" : "object-position: center;"}
    // object-position: center;
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

	wakeHungerSwype(){
		console.log("Pinging heroku...")
		fetch('https://hunger-swype.herokuapp.com/about');
		fetch('https://hunger-swype-api.herokuapp.com/about');
	}

	getStackIcon(tech){
		let title, icon
		switch(tech.toLowerCase()) {
			case "ruby": title = "Ruby"; icon = 'ruby.svg'; break;
			case "rails": title = "Ruby on Rails"; icon = 'rails.svg'; break;
			case "react": title = "ReactJS"; icon = 'react.svg'; break;
			case "postgres": title = "PostgreSQL"; icon = 'postgres.svg'; break;
			case "mongo": title = "MongoDB"; icon = 'mongodb-icon.svg'; break;
			case "sqlite": title = "SQLite"; icon = 'sqlite.svg'; break;
			case "heroku": title = "Heroku"; icon = 'heroku.svg'; break;
			case "aws": title = "AWS"; icon = 'aws.svg'; break;
			case "angular": title = "Angular"; icon = 'angular.svg'; break;
			case "sass": title = "Sass"; icon = 'sass.svg'; break;
		  	default: return '';
		}
		const iconPath = '/icons/tech/'
		// const iconPath = '/icons/skills/'

		return <img 
				className="stack-icon" 
				title={ title } 
				key={ icon } 
				alt={ icon } 
				src={ iconPath + icon }
				onError={event => event.target.src = "https://via.placeholder.com/128"}
			/>
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

	getYoutubeEmbed(link){
		let url = link.split('/') // => https://youtu.be/Lu9ow-RFO3c
		return <iframe 
			width="560"
			height="315"
			src={`https://www.youtube.com/embed/${url[3]}`} //"https://www.youtube.com/embed/Lu9ow-RFO3c"
			frameBorder="0"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		/>
	}
	
	render(){
		const project = this.state.project

		return(
			project ?
			<ProjectContainer>
				{ project.name === "Hunger Swype" ? this.wakeHungerSwype() : null }
				<ProjectImg name={project.name} src={ project.name === "Hunger Swype" ? '/projects/hunger-swype.jpg' : project.thumbnail } onError={event => event.target.src = "https://via.placeholder.com/300"} />
					<div className="project-header">
						<div className="project-title">
							<h1>{ project.name }</h1>
							<div className="stack-icons">{ this.getStack(project.stack) }</div>
						</div>
						<div className="project-info">
						<p>Est. { project.year }</p>
						{ this.getCollaborators() }
						</div>
					</div>
					<div className="project-details">
					{ project.technologies.length > 0
						? <ul className="tech">
							<h3>Technologies Used:</h3>
								{ project.technologies.map(tech => <li className="tech" key={ stringToURL(tech) }>{ tech }</li>) }
							</ul>
					: null }
					{/* @@TODO - refactor entire page ScootieGang entirely.*/}
					{/* @@TODO - Add Links.*/}
					<div className="desc">
						{ project.name !== "Scootie Gang" ? ReactHtmlParser(project.description) : <TwitterFeed profile={project.link}/> }
						{ project.link !== '' ? <div className="launch-app"><a  href={project.link}>Launch {project.name}</a></div> : null }
						{ project.demo !== '' ? this.getYoutubeEmbed(project.demo) : null }
					</div>
					</div>
			</ProjectContainer>
			: <ErrorPage />
		)
	}
}

export default withRouter(ProjectPage)