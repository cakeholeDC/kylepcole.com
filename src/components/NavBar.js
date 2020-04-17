import React from 'react'
import PROJECTS from '../data/projectList.js'
import styled from 'styled-components'

const links = 4

const Navbar = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
		
	a {
		text-decoration: none;
		color: black;
		text-transform: uppercase;

		&:hover {
			text-decoration: underline;
			color: lightgray;
		}
	}


`

export default class NavBar extends React.Component {
	render(){
		return(
			<Navbar>
				<a href="/about">About</a>
				<a href="/projects">Projects</a>
				<a href="/blog">Blog</a>
				<a href="/resume">Resume</a>
				<a href="/contact">Contact</a>
			</Navbar>
		)
	}
}