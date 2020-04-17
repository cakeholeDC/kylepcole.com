import React from 'react'
// import { Link } from "react-router-dom";
import styled from 'styled-components'
import ReactHtmlParser from 'react-html-parser';


const Project = styled.div`
	display: flex; 
	flex-direction: column;
	flex-basis: calc(25% - 40px); // numColumns = 100/[percentage] / MINUS / space around = integer  
	justify-content: center;
	position: relative;
	margin: 1rem;

	//styles
	// background: black; //shows through image when transparent

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
      height: 12.5rem;
	  min-width: 100%;
	  object-fit: cover;
	}

	.project-overlay {
		//animations
		transition: .5s ease;
		opacity: 0;
		position: absolute;
		top: 39%;
		left: 50%;
		// width: 18.75rem;
        // height: 12.5rem;
		transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		
		//content
		text-align: center;
		
		.overlay-content {
		  color: black;
		  font-size: 1rem;
		}
	}
`


function BlogTile(props)  {
	const post = props.post
	console.log(props)
	return(
		<Project>
			<img className="project-image" src={ /*props.post.thumbnail*/'https://via.placeholder.com/300x200' } onError={event => event.target.src = "https://via.placeholder.com/300x200"} />
			<div className="project-overlay">
				<h2 className="overlay-content">{ post.title }</h2>
			</div>
			<div>{ post.teaser }</div>
		</Project>
	)
}


export default BlogTile