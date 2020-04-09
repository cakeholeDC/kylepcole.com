import React from 'react'
import NavBar from '../components/NavBar.js'

export default function Header() {
	return(
		<div id="header-container">
			<a href='/'><img id="logo" src="/kpclogoTransparent.png" /></a>
			<NavBar />
		</div>
	)
}