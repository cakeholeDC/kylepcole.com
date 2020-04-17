import React from 'react'
import POSTS from '../data/posts.js'
import BlogTile from '../components/BlogTile.js'
import styled from 'styled-components'



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
		padding-bottom: 7px;
	}
`

function Blog(props)  {
	let posts = [...POSTS]

	return (
		<BlogList>
			{ posts.map(post => <BlogTile post={post} key={ post.title }/> ) }
		</BlogList>
	)
}

export default Blog