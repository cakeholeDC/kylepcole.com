import React from 'react'
import { Link, withRouter } from "react-router-dom";
import styled from 'styled-components'
import ReactHtmlParser from 'react-html-parser';
import { device } from '../device';


//helper functions
import stringToURL  from '../utils/stringToUrl.js'

const PostTile = styled.div`
	max-width: 19rem;
	vertical-align: top;
	display: flex; 
	flex-direction: column;
	flex-basis: calc(25% - 40px); // numColumns = 100/[percentage] / MINUS / space around = integer  
	justify-content: center;
	position: relative;
	margin: 1rem;
	// box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
	box-shadow: 0 0px 1px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
	border-radius: .5rem;

	//styles
	// background: black; //shows through image when transparent
	a {
		color: inherit;
		text-decoration: none;

		hr {
			color: lightgray;
		}
	}

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
	  border-radius: .5rem;
	  border-bottom-left-radius: 0px;
	  border-bottom-right-radius: 0px;

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
		padding: .75rem;
		text-align: left;
		height: 9.5rem;
		overflow: hidden;

		
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
		    overflow: hidden;
		}
	}

	//mobile overlays
	@media only screen and ${device.laptop} {
		max-width: 16rem;
		
		.blog-image {
		  opacity: 0.5;
		  width: 16rem;
	      height: 12.5rem;
		}
		.image-overlay {
		  opacity: 1;
		}
	}

	@media only screen and ${device.mobileL} {
		max-width: 20rem;

		.blog-image {
		  width: 20rem;
		  opacity: 0.5;
		}
		.image-overlay {
		  opacity: 1;
		}
	}

`


class BlogTile extends React.Component {
	/*props = {
		title: '',
		pubDate: '',
		link: '',
		guid: '',
		author: '',
		thumbnail: '',
		description: '',
		content: '',
		enclosure: {}
		categories: []
	}*/


	getBlogImage = () => {
		if (this.props.thumbnail.includes("https://medium.com/_/stat?") || this.props.thumbnail === ''){
			return `https://source.unsplash.com/random/300x200/?${this.props.categories[0]}`
		} else {
			return this.props.thumbnail
		}
	}

	render(){
		const PostTeaser = styled.div`
			display: -webkit-box;
		    -webkit-line-clamp: ${this.props.title.length > 35 ? 4 : 5};
		    -webkit-box-orient: vertical;
		    overflow: hidden;
		    height: 79%;
		`
		var moment = require('moment');
		const { title, pubDate, description } = this.props

		const published = moment(pubDate).format(`MMMM D, YYYY`)
		const teaser = ReactHtmlParser(description)

		return(
			<PostTile>
				<Link to={`/blog/${stringToURL(this.props.title)}`}>
					<img className="blog-image" src={ this.getBlogImage() } alt={this.props.title} onError={event => event.target.src = "https://via.placeholder.com/300x200"} />
					<div className="image-overlay">
						<h2 className="overlay-content">{ published }</h2>
					</div>
					<div className="post-title-teaser">
						<h3>{ title }</h3>
						<hr/>
						<PostTeaser>{ teaser }</PostTeaser>
					</div>
				</Link>
			</PostTile>
		)
	}
}


export default withRouter(BlogTile)