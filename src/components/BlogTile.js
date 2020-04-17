import React from 'react'
// import { Link } from "react-router-dom";
import styled from 'styled-components'
import ReactHtmlParser from 'react-html-parser';


const Project = styled.div`
	vertical-align: top;
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
		.blog-image {
		  opacity: 0.3;
		}
		.image-overlay {
		  opacity: 1;
		}
	}

	.blog-image {
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

	.image-overlay {
		//animations
		transition: .5s ease;
		opacity: 0;
		position: absolute;
		top: 26.5%;
		left: 50%;
		width: 80%;
		// width: 18.75rem;
        // height: 12.5rem;
		transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		
		//content
		text-align: center;
		
		.overlay-content {
		  color: black;
		  font-size: 1.5rem;
		  font-family: 'Fjalla One', sans-serif;
		}
	}

	.post-title-teaser {
		padding: .5rem;
		text-align: left;
		height: 10rem;
		
		h3{
			margin-top: 0;
			margin-bottom: 0.375rem;
			font-family: 'Fjalla One', sans-serif;
		}

		hr{
			margin: 0;
		}

		p{
			margin-top: 0.375rem;
		}
	}
`


function BlogTile(props)  {
	const post = props.post
	return(
		<Project>
			<img className="blog-image" src={ /*props.post.thumbnail*/'https://via.placeholder.com/300x200' } onError={event => event.target.src = "https://via.placeholder.com/300x200"} />
			<div className="image-overlay">
				<h2 className="overlay-content">{ post.timestamp !== '' ? post.timestamp : "January 1, 1970" }</h2>
			</div>
			<div className="post-title-teaser">
				<h3>{ post.title }</h3>
				<hr/>
				<p>{ post.teaser }</p>
			</div>
		</Project>
	)
}


export default BlogTile