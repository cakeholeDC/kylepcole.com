import React from 'react'
import NavBar from '../components/NavBar.js'
import styled from 'styled-components'
import Headroom from 'react-headroom'

const HeaderBar = styled.div`
    // display: inline-block;
    display: flex;
    // position: relative;
    width: 100%;
    height: 100px;
	text-align: left;
    padding: 2.5rem;
    padding-left: 4.5rem;
    padding-right: 4.5rem;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;

	#home { 
		flex: 2;
		text-decoration: none;
		color: black;

		:hover {
			text-decoration: none;
		}
	}

	.title {
		font-family: 'Fjalla One', sans-serif;
		display: inline-block;
		margin: 0px;
		margin-top: -.375rem;
	}

	.nav-container {
		flex: 1;
		text-align: right;
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
				Kyle P. Cole — Web Developer
			</h1></a>
			<div className="nav-container">
				<NavBar />
			</div>
		</HeaderBar>
		</Headroom>
	)
}