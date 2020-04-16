import React from 'react'
import NavBar from '../components/NavBar.js'
import styled from 'styled-components'
import Headroom from 'react-headroom'

const HeaderBar = styled.div`
    display: inline-block;
    position: relative;
    width: 100%;
    height: 100px;
	text-align: left;
    border-bottom: 1px solid black;
    padding: 1em;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;

	img {
		display: inline-block;
		height: 8rem;
		width: 8rem;
		float: left;
		// margin: 1rem;
	}

	a { 
		text-decoration: none;
		color: black;

		:hover {
			text-decoration: none;
		}
	}

	.title {
		display: inline-block;
	    margin-left: 5rem;
	}
`

export default function Header() {
	return(
		<Headroom style={{
            background: 'rgb(255, 255, 255)',
            boxShadow: '1px 1px 1px rgba(0,0,0,0.25)',
          }}>
		<HeaderBar>
			<NavBar />
			{/*<a href='/'><img id="logo" src="/kpclogoTransparent.png" /></a>*/}
			<a href='/'><div className="title">
				Kyle P. Cole — Web Developer
			</div></a>
		</HeaderBar>
		</Headroom>
	)
}