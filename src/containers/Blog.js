import React from 'react'
import BlogTile from '../components/BlogTile.js'
import styled from 'styled-components'
import moment from 'moment'
import { device } from '../device';

const BlogList = styled.div`
	width: 75%;
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

		@media only screen and ${device.mobileL} { 
			margin-bottom: .25rem;
		}
	}
`

const Filters = styled.div`
	text-align: left;
	display: flex;
	width: 100%;
	height: 3rem;
	border-bottom: 1px solid lightgray;
	padding: 0 1rem;

	@media only screen and ${device.mobileL} { 
		flex-direction: column;
		height: 7rem;
	}

	.sort {
		flex: 4;
		display:flex;

		label {
			flex: 1;
		}

		@media only screen and ${device.mobileL} { 
			flex: 1;
			flex-direction: column;
		}
	}

	.filter {
		flex: 6;
		justify-content: flex-end;
		display: flex;

		select {
			margin-left: 1rem;
			margin-top:.25rem;
		}

		@media only screen and ${device.mobileL} { 
			margin-top: 1rem;
			flex: 1;
			display: block;
		}
	}
`

class Blog extends React.Component {
	state={
		sort: "new-old",
		filter: 'all'
	}

	getAllPostYears = () => {
		const years = this.props.posts.map(p => moment(p.pubDate).format('YYYY') )
		
		let onlyUnique = (value, index, self) => { 
		    return self.indexOf(value) === index;
		}
		
		return years.filter( onlyUnique )
	}

	eventToState = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	
	sortedPosts = (array) => {
		if (this.state.sort === "old-new") {
			array.sort((a, b) => a.pubDate > b.pubDate ? 1 : -1 )
		} else {
			array.sort((a, b) => a.pubDate > b.pubDate ? -1 : 1 )
		}

		if (this.state.filter === 'all') {
			return array
		}
		return array.filter(post => moment(post.pubDate).format('YYYY') === this.state.filter)
	}

	render(){
		let posts = this.sortedPosts(this.props.posts)

		return (
			<BlogList>
				<h1>Sometimes I write.</h1>
				<Filters >
					<div className="sort">
						<label htmlFor="sort"><strong>Sort Posts:</strong></label>
						<label htmlFor="new-old">
							<input 
								checked={this.state.sort === "new-old"}
								type="radio"
								name="sort"
								value="new-old"
								onChange={ (e) => this.eventToState(e) }
							/>
						Newest First</label>
						<label htmlFor="old-new">
							<input 
								checked={this.state.sort === "old-new"}
								type="radio"
								name="sort"
								value="old-new"
								onChange={ (e) => this.eventToState(e) }
							/>
						Oldest First</label>
					</div>
					<div className="filter">
						<strong>Filter by Year:</strong>
						<select name="filter" onChange={ (e) => this.eventToState(e) }>
							<option value="all">All</option>
							{ this.getAllPostYears().map(year => <option key={ year } value={ year }>{ year }</option> ) }
						</select>
					</div>
				</Filters>
				{ posts.map(post => <BlogTile { ...post } key={ post.title }/> ) }
			</BlogList>
		)
	}
}

export default Blog