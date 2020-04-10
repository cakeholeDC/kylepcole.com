import React from 'react'
import { Link } from "react-router-dom";

function ProjectItem(props)  {
	
	return(
			<Link to={`/projects/${props.project.id}`}>
			<div className="project">
				{ <img className="project-image" src={ props.project.thumbnail} onError={event => event.target.src = "https://via.placeholder.com/300"} /> }
				{ /*<div style={{ background: `url(${props.project.thumbnail ? props.project.thumbnail : "https://via.placeholder.com/300"}) 50% 50% no-repeat` }}></div>*/ }
				<div className="project-overlay">
					<h2 className="overlay-content">{props.project.name}</h2>
				</div>
			</div>
			</Link>
	)
}

export default ProjectItem