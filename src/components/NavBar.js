import React from 'react'
import styled from 'styled-components'

const links = 4

const Navbar = styled.nav`
	border: 1px black solid;
	float: right;
	margin: 1rem 1rem 0 0;
	min-width: 45%;
	height: 2rem;
	display: flex;
	text-align: right;
		
	a {
		flex: 1;
		text-decoration: none;
		color: black;

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
				<a href="/resume">Resume</a>
				<a href="/contact">Contact</a>
			</Navbar>
		)
	}
}