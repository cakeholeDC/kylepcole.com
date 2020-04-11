import React from 'react'
import NavBar from '../components/NavBar.js'

export default function Header() {
	return(
		<div id="header">
			<NavBar />
			<a href='/'><img id="logo" src="/kpclogoTransparent.png" /></a>
			<h1>Kyle P. Cole</h1>
			<h3>Web Developer</h3>
		</div>
	)
}