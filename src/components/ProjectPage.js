import React from 'react'
import PROJECTS from '../data/projectList.js'
// import { Link } from "react-router-dom";

function ProjectPage(props)  {
	console.log(props)
	const projects = [...PROJECTS]
	const project = projects.find(proj => proj.id == props.match.params.id)
	console.log(project)
	
	return(
			<div className="project-page-container">
				<div>{ props.match.url }</div>
				<div>{ project.name }</div>
			</div>
	)
}

export default ProjectPage