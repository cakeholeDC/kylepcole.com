import React from 'react'
import PROJECTS from '../data/projectList.js'
import { Redirect } from "react-router-dom";
import styled from 'styled-components'

const ProjectContainer = styled.div`
	width: 75%;
	display: inline-block;
	padding: 0 3rem;
	margin-top: 3rem;

	.project-header {
		display: flex;
		width: 100vh;
		border-bottom: 1px solid lightgray;
		text-align: left;
		
		h1 {
			flex: 8;
			margin-top: 0px;
			margin-bottom: 1vh;
		}

		p {
			flex: 2;
			text-align: right;
			margin-right: 0;
		}
	}


	img {
		width: 100vh;
	    height: 50vh;
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

function ProjectPage(props)  {
	const projects = [...PROJECTS]
	let project = projects.find(proj => proj.id == props.match.params.id)

	//allow for both projects/id and project/project-name
	if (!project){
		project = projects.find(proj => proj.name.replace(/ /g,'-').toLowerCase() === props.match.params.id)

		if (!project){
			project = 404
		}
	}

	console.log(project)
	if (project === 404){
		props.history.push('/404')
		// return ()
	}
	
	else 
	return(
		<ProjectContainer>
			<img src={ project.thumbnail } onError={event => event.target.src = "https://via.placeholder.com/300"} />
			<div className="project-header">
				<h1>{ project.name }</h1>
				<p>Est. { project.year }</p>
			</div>
			<p>{ project.description }</p>
			<ul>
				<h3>Technologies Used:</h3>
				{ project.technologies.map(tech => <li className="tech" key={ tech.replace(/ /g, '-').toLowerCase() }>{ tech }</li>) }
			</ul>
		</ProjectContainer>
	)
}

export default ProjectPage