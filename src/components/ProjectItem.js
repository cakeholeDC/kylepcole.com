import React from 'react'
import { Link } from "react-router-dom";

function ProjectItem(props)  {
	
	return(
			<Link to={`/projects/${props.project.name.replace(/ /g,'-').toLowerCase()}`}>
			<div className="project">
				<img className="project-image" src={ props.project.thumbnail} onError={event => event.target.src = "https://via.placeholder.com/300"} />
				<div className="project-overlay">
					<h2 className="overlay-content">{props.project.name}</h2>
				</div>
			</div>
			</Link>
	)
}

export default ProjectItem