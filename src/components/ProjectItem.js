import React from 'react'

function ProjecItem(props)  {
	
	return(
			<div className="project">
				{ <img src={ props.project.thumbnail} onError={event => event.target.src = "https://via.placeholder.com/300"} /> }
				{ /*<div style={{ background: `url(${props.project.thumbnail ? props.project.thumbnail : "https://via.placeholder.com/300"}) 50% 50% no-repeat` }}></div>*/ }
				<h2>{props.project.name}</h2>
			</div>
	)
}

export default ProjecItem