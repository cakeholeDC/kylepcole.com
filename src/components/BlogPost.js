import React from 'react'
import styled from 'styled-components'
import ReactHtmlParser from 'react-html-parser';
import { withRouter } from "react-router-dom";
import { convertNodeToElement } from 'react-html-parser';


const Post = styled.div`

	width: 65%;
	margin: auto;
	text-align: left;

	figure{
		img {
			width: 100%;
		}

		figcaption {
			text-align: center;
			font-style: italic;
		}
	}

	a[href^="https://medium.com/media/"] {
		text-align: center;
		text-decoration: none;
		color: black;

		&:hover {
			text-decoration: underline;
		}

		&:before {
		font-weight: bold;
			content: "External Media: ";
		}
	}

	pre {
		padding: 1rem;
		background: black;
		color: #4AF626;
	}

	h1 {
		margin-bottom: 0px;
	}

	code {
		background: black;
	}

	blockquote {
		background-color: #e0e0e0;
		padding: 1rem;
		border-left: 5px solid gray;
	}
`
const Disclaimer = styled.div`
	width: 100%;
	background: #e0e0e0;
	font-size: 1rem;
	font-family: monospaced;
	padding: 1rem;
	font-style: italic;
`

const PubDate = styled.div`
	font-style: italic;

`

class BlogPost extends React.Component {
	state={
		post: null
	}

	componentDidMount(){
		fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cakehole")
	      .then(res => res.json())
	      .then(json => {
	        console.log(json.items)
	        const postContent = json.items.find(post => post.title.replace(/ /g,'-').toLowerCase() === this.props.match.params.id)
	      	// debugger
	        this.setState({ 
	          post: postContent
	        })
	      })
	}

	// parseImageLinks = (content) => {
	// 	//<a[\s]+([^>]+)>((?:.(?!\<\/a\>))*.)</a>
	// 	const length = (content.match(/<a href="https:\/\/medium.com\/media\/`/g) || []).length; 
	// 	// jQuery('a[href*="https://medium.com/media/"]').each(function() {
	// 	//     alert('Contains question mark');
	// 	// });
	// }

	getPostContent = () => {
		var moment = require('moment');

		if (this.state.post) {
			return (
				<React.Fragment>
					<Disclaimer>
						Note: This post was imported from Medium's RSS feed. External media may be displayed as text links.
						<br/><a href={ this.state.post.link }>Click here to view the original post.</a>
					</Disclaimer>
					<h1>{ ReactHtmlParser(this.state.post.title) }</h1>
					<PubDate>Published { moment(this.state.post.pubDate).format(`dddd, MMMM D, YYYY`) }</PubDate>
					{ ReactHtmlParser(this.state.post.content) }
				</React.Fragment>
			)
		} else { 
			return <h3>Loading...</h3>
		}
	}

	render() {
		// let content = this.state.post ? this.state.post.content : ''
		// console.log(content.replace(/<a.+?\s*href\s*=\s*["\']?([^"\'\s>]+)["\']?/gi, `<img src='$1' />` ))
		return(
			<Post>	
				{ this.getPostContent() }
			</Post>
		)
	}
}

export default withRouter(BlogPost)