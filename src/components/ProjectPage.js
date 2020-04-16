import React from 'react'
import PROJECTS from '../data/projectList.js'
import { Redirect } from "react-router-dom";
import styled from 'styled-components'

const ProjectContainer = styled.div`

	display: inline-block;
	padding: 0 3rem;

	img {
		width: 25rem;
		float: left;
	}

	p {
		margin: 1rem;
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
	console.log(props)
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
			<h1>{ project.name }</h1>
			<img src={ project.thumbnail } onError={event => event.target.src = "https://via.placeholder.com/300"} />
			<p>{ project.description }</p>
			<ul>
				<h3>Technologies Used:</h3>
				{ project.technologies.map(tech => <li className="tech">{ tech }</li>) }
			</ul>
		</ProjectContainer>
	)
}

export default ProjectPage