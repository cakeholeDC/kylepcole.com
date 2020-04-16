import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Project = styled.div`
	display: flex; 
	flex-direction: column;
	flex-basis: calc(25% - 40px); // numColumns = 100/[percentage] / MINUS / space around = integer  
	justify-content: center;
	position: relative;
	margin: 1rem;

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
		text-align: center;
		
		.overlay-content {
		  color: white;
		  font-size: 2rem;
		}
	}
`


function ProjectItem(props)  {
	
	return(
			<Link to={`/projects/${props.project.name.replace(/ /g,'-').toLowerCase()}`}>
			<Project>
				<img className="project-image" src={ props.project.thumbnail} onError={event => event.target.src = "https://via.placeholder.com/300"} />
				<div className="project-overlay">
					<h2 className="overlay-content">{props.project.name}</h2>
				</div>
			</Project>
			</Link>
	)
}


export default ProjectItem