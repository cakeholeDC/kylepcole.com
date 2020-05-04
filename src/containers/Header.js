import React from 'react'
import NavBar from '../components/NavBar.js'
import styled from 'styled-components'
import Headroom from 'react-headroom'
import { device } from '../device';


const HeaderBar = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
	text-align: left;
    padding: 2.5rem;
    padding-left: 4.5rem;
    padding-right: 4.5rem;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;

    h1 {
		display: inline-block;
		margin: 0px;
		margin-top: -.375rem;
	}

	.nav-container {
		flex: 5;
		text-align: right;

		@media only screen and ${device.mobileL} { 
			flex: 1;
			margin-top: -.25rem;
		}
	}

	#home { 
		flex: 4;
		text-decoration: none;
		color: black;

		:hover {
			text-decoration: none;
		}

		@media only screen and ${device.tablet} {
			flex: 3;
		}
	}


	@media only screen and ${device.tablet} {
    	height: 9vh; 
		padding: 1.75rem;
		padding-top: 2rem;
	}
    
    @media only screen and ${device.mobileL} { 
    	height: 9vh;
		padding: 1.5rem;
		padding-top: 1.5rem;
	}

	@media only screen and ${device.mobileM} { 
    	height: 10vh;
	    padding: 1rem;

		h1 {
			font-size: 1.5rem;
			margin-top: 0px;
		}
	}
	
`

export default function Header() {
	return(
		<Headroom style={{
            background: 'rgb(255, 255, 255)',
            boxShadow: '2px 2px 2px rgba(0,0,0,0.25)',
          }}>
		<HeaderBar>
			<a id="home" href='/'><h1 className="title">
				Kyle P. Cole
			</h1></a>
			<div className="nav-container">
				<NavBar />
			</div>
		</HeaderBar>
		</Headroom>
	)
}