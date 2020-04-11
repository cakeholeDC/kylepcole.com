import React from 'react'
import PROJECTS from '../data/projectList.js'
import { Redirect } from "react-router-dom";

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
		<div className="project-page-container">
			<h1>{ project.name }</h1>
			<img className="project-featured" src={ project.thumbnail } onError={event => event.target.src = "https://via.placeholder.com/300"} />
			<ul className="project-tech">
				<h3>Technologies Used:</h3>
				{ project.technologies.map(tech => <li className="tech">{ tech }</li>) }
			</ul>
		</div>
	)
}

export default ProjectPage