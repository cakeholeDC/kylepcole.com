import React from 'react'
import { Link, withRouter } from "react-router-dom";
import styled from 'styled-components'
import ReactHtmlParser from 'react-html-parser';


const Project = styled.div`
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
			text-overflow: ellipsis;

			&:after {
				// content: '...';
			}
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
		if (this.props.thumbnail.includes("https://medium.com/_/stat?") || this.props.thumbnail == ''){
			return `https://source.unsplash.com/random/300x200/?${this.props.categories[0]}`
		} else {
			return this.props.thumbnail
		}
	}

	render(){
		var moment = require('moment');
		const { title, pubDate, description, history } = this.props

		const published = moment(pubDate).format(`MMMM D, YYYY`)
		const teaser = ReactHtmlParser(description.replace('&lt;',''))//.substring(4,150)

		return(
			<Project onClick={ () => this.props.history.push(`${title.replace(/ /g,'-').toLowerCase()}`)}>
			{/*<Link to={`/blog/${this.props.title.replace(/ /g,'-').toLowerCase()}`}>*/}
				<img className="blog-image" src={ this.getBlogImage() } onError={event => event.target.src = "https://via.placeholder.com/300x200"} />
				<div className="image-overlay">
					<h2 className="overlay-content">{ published }</h2>
				</div>
				<div className="post-title-teaser">
					<h3>{ title }</h3>
					<hr/>
					<p>{ teaser }</p>
				</div>
			{/*</Link>*/}
			</Project>
		)
	}
}

const $lorem = "Sunt cupidatat consectetur minim dolore sit ullamco sunt esse elit ut esse eiusmod elit anim sed voluptate in incididunt labore tempor occaecat ad non laboris occaecat voluptate ad adipisicing ex cupidatat nisi cillum ut cillum incididunt proident laborum in amet ut in nulla excepteur in laboris dolor laboris tempor qui pariatur proident consectetur aliqua ullamco enim in laboris fugiat mollit sint non aliquip tempor laborum in sunt proident excepteur amet officia et dolor aliqua irure tempor fugiat et adipisicing aute commodo culpa eiusmod veniam excepteur adipisicing sint aliqua culpa occaecat incididunt officia in elit et commodo esse proident velit incididunt ad ut commodo in sit elit minim ut et laboris consequat officia ut anim sit velit excepteur ut nisi dolor ullamco tempor eiusmod laborum reprehenderit sint enim id dolore sit commodo excepteur consectetur exercitation eiusmod occaecat do do non consectetur eu enim ullamco occaecat in sed sint ex anim voluptate consequat est dolore quis labore dolor sed est ut excepteur esse ut nisi labore laborum officia reprehenderit ullamco exercitation anim labore aute consectetur labore sit reprehenderit quis sed dolor dolore sint ad culpa nisi reprehenderit nisi tempor consectetur laborum commodo pariatur elit duis cupidatat irure pariatur exercitation velit sed esse sunt minim ut reprehenderit tempor sunt duis esse aute in tempor proident anim in in ut dolor cillum esse cupidatat adipisicing dolor ea dolore voluptate deserunt voluptate elit veniam cillum dolore do deserunt ex et ex ad exercitation aliquip do adipisicing anim nostrud esse sit pariatur ex tempor et eiusmod eiusmod consequat cillum sunt enim aliqua laboris sint in aute quis nulla dolor pariatur."



export default withRouter(BlogTile)