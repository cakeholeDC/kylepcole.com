import React from 'react'
import NavBar from '../components/NavBar.js'
import styled from 'styled-components'

const HeaderBar = styled.div`
	text-align: left;

	img {
		display: block;
		height: 8rem;
		width: 8rem;
		float: left;
		margin: 1rem;
	}

	.title {
		position: absolute;
	    margin-top: 1.5rem;
	    margin-left: 10rem;
	}
`

export default function Header() {
	return(
		<HeaderBar>
			<NavBar />
			<a href='/'><img id="logo" src="/kpclogoTransparent.png" /></a>
			<div className="title">
				<h1>Kyle P. Cole</h1>
				<h3>Web Developer</h3>
			</div>
		</HeaderBar>
	)
}