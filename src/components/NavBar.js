import React from 'react'
import PROJECTS from '../data/projectList.js'
import styled from 'styled-components'

const links = 4

const Navbar = styled.nav`
	float: right;
	min-width: 35%;
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
				<a href="/projects">
					Projects
					{ /* PROJECTS.map(p => <a href={`/${p.name.replace(/ /g,'-').toLowerCase()}`} >{p.name}</a>) */ }
				</a>
				<a href="/resume">Resume</a>
				<a href="/contact">Contact</a>
			</Navbar>
		)
	}
}