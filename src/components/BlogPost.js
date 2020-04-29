import React from 'react'
import styled from 'styled-components'
import ReactHtmlParser from 'react-html-parser';
import { withRouter } from "react-router-dom";
import AngularBlog from '../data/AngularBlog'
import moment from 'moment'

//helper functions
import stringToURL from '../utils/stringToUrl.js'
import getMediumBlogPosts from '../utils/getMediumBlogPosts.js'

const Post = styled.div`
	width: 65%;
	margin: auto;
	text-align: left;

	figure{
		text-align: center;

		img {
			width: 100%;
		}

		figcaption {
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
		color: #4AF626;
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

	async componentDidMount(){
		//FETCH POSTS IF NOT PASSED AS PROPS.
		const posts = this.props.posts.length > 0 ? this.props.posts : await getMediumBlogPosts()
	    const postContent = posts.find(post => stringToURL(post.title) === this.props.match.params.id)
        this.setState({ 
          post: postContent
        })
	}

	showMediumImportDisclaimer(post){
		if (post.title !== "Try-Angular"){
			return (
				<Disclaimer>
					Note: This post was imported from Medium's RSS feed. External media may be displayed as text links.
					<br/><a href={ post.link }>Click here to view the original post.</a>
				</Disclaimer>
			)
		} else return null
	}

	getPostContent = () => {
		if (this.state.post) {

			const post = this.state.post
			const postContent = post.content.replace('"https://cdn-images-1.medium.com/max/1024/1*tfBMJe7IqTliA5w3hfc6lQ.jpeg"', 'https://cdn-images-1.medium.com/max/1024/1*RTM5nUISCNJbl_yOZTO7WQ.png')
			console.log(post)
			return (
				<React.Fragment>
					{ this.showMediumImportDisclaimer(post) }
					<h1>{ ReactHtmlParser(post.title) }</h1>
					<PubDate>Published { moment(post.pubDate).format(`dddd, MMMM D, YYYY`) }</PubDate>
					{ ReactHtmlParser(postContent) }
				</React.Fragment>
			)
		} else { 
			return <h3>Loading...</h3>
		}
	}

	render() {
		return(
			<Post>	
				{ this.getPostContent() }
			</Post>
		)
	}
}

export default withRouter(BlogPost)