import React from 'react'

function ProjecItem(props)  {
	console.log("ProjectItem", props.project)
	return(
			<div className="project">
				<img src={ props.project.thumbnail } />
				<h2>{props.project.name}</h2>
			</div>
	)
}

export default ProjecItem