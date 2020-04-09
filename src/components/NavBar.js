import React from 'react'

export default class NavBar extends React.Component {
	render(){
		return(
			<nav id="navbar">
				<a href="/about">About</a>
				<a href="/projects">Projects</a>
				<a href="/resume">Resume</a>
				<a href="/contact">Contact</a>
			</nav>
		)
	}
}