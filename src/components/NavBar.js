import React from 'react'
import styled from 'styled-components'
import { device, size } from '../device';
import ResponsiveMenu from 'react-responsive-navbar';
// import { FaBars, FaClose } from 'react-icons/fa';

const Navbar = styled.nav`
	display: flex;
	flex-direction: row;
    flex-wrap: wrap;
	justify-content: space-evenly;

	@media only screen and ${device.tablet} { 
		justify-content: flex-end;
	}

	@media only screen and ${device.laptop} { 
		justify-content: flex-end;
	}
		
	a {
		text-decoration: none;
		color: black;
		text-transform: uppercase;

		&:hover {
			border-bottom: 2px solid lightgray;
			color: lightgray;
		}

		@media only screen and ${device.tablet} { 
			margin-right: 1rem;
		}

		@media only screen and ${device.laptop} { 
			margin-right: 1rem;
		}
	}
	

	@media only screen and ${device.mobileL} {
		flex-direction: column;
		background-color: white;
	    padding: 1rem;
	    border: 1px solid black;
	    text-align: right;
	    clear: right;
	}
`

const MobileMenuButton = styled.img`
	max-height: 2rem;
	max-width: 2rem;
	float:right;
	margin-bottom: .5rem;
`

export default class NavBar extends React.Component {
	render(){
		return(
			<ResponsiveMenu
		        menuOpenButton={<MobileMenuButton src="/icons/navigation/bars-solid.svg" />}
	            menuCloseButton={<MobileMenuButton src="/icons/navigation/times-solid.svg" />}
		        changeMenuOn={ size.mobileL }
		        largeMenuClassName="large-menu"
		        smallMenuClassName="mobile-menu"
		        menu={<Navbar>
					<a href="/">About</a>
					<a href="/projects">Projects</a>
					<a href="/blog">Blog</a>
					<a href="/resume">Resume</a>
					<a href="/contact">Contact</a>
					</Navbar>
				}
			/>
		)
	}
}