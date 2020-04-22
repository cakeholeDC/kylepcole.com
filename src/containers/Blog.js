import React from 'react'
// import POSTS from '../data/posts.js'
import BlogTile from '../components/BlogTile.js'
import styled from 'styled-components'
import AngularBlog from '../data/AngularBlog'



const BlogList = styled.div`
	width: 70%;
	min-height: 100%;
	margin: auto;
  	display: flex;
  	flex-wrap: wrap;
  	flex-direction: row;
  	justify-content: center;

  	h1 {
		width: 100%;
		border-bottom: 1px solid lightgray;
		padding-bottom: .5rem;
		font-family: 'Fjalla One', sans-serif;
	}
`

function Blog(props)  {
	// let posts = [...POSTS]
	let posts = props.posts

	// if (posts && AngularBlog) { 
	// 	posts.push(AngularBlog)
	// 	posts.sort((a, b) => a.pubDate > b.pubDate ? -1 : 1 )
	// }

	return (
		<BlogList>
			<h1>Sometimes I write.</h1>
			{ posts ? posts.map(post => <BlogTile {...post} key={ post.title }/> ) : <h3>Loading...</h3> }
		</BlogList>
	)
}

export default Blog