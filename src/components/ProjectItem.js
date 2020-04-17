import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Project = styled.div`
	display: flex; 
	flex-direction: column;
	flex-basis: calc(25% - 40px); // numColumns = 100/[percentage] / MINUS / space around = integer  
	justify-content: center;
	position: relative;
	// margin: 1rem;

	//styles
	background: black; //shows through image when transparent

	//animations
	&:hover {
		.project-image {
		  opacity: 0.3;
		}
		.project-overlay {
		  opacity: 1;
		}
	}

	.project-image {
	  //animations 
	  opacity: 1;
	  display: block;
	  transition: .5s ease;
	  backface-visibility: hidden;

	  //content
	  align-content: center;
	  width: 18.75rem;
      height: 18.75rem;
	  min-width: 100%;
	  object-fit: cover;
	}

	.project-overlay {
		//animations
		transition: .5s ease;
		opacity: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		
		//content
		width: 80%;
		text-align: center;
		
		.overlay-content {
		  color: white;
		  font-size: 1.5rem;

		  h2 {
		  	line-height: 1;
		  }

		  p {
		  	font-size: 1rem;
		  }
		}
	}
`


function ProjectItem(props)  {
	let project = props.project
	
	return(
			<Link to={`/projects/${project.name.replace(/ /g,'-').toLowerCase()}`}>
			<Project>
				<img className="project-image" src={ project.thumbnail} onError={event => event.target.src = "https://via.placeholder.com/300"} />
				<div className="project-overlay">
					<div className="overlay-content">
						<h2>{ project.name }</h2>
						<p>{ project.teaser }</p>
					</div>
				</div>
			</Project>
			</Link>
	)
}


export default ProjectItem