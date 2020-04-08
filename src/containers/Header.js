import React from 'react'
import NavBar from '../components/NavBar.js'

export default class Header extends React.Component {
	render(){
		return(
			<div id="header-container">
				<img id="logo" src="/kpclogoTransparent.png" /> { /* https://via.placeholder.com/200x50 */ }
				<NavBar />
			</div>
		)
	}
}