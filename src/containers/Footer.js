import React from 'react'
import styled from 'styled-components'

const FooterBar = styled.div`
	flex-shrink: 0;
    display: inline-block;
    position: relative;
    width: 100%;
    // height: 100px;
	text-align: left;
    padding: 1rem;
    padding-left: 4.5rem;
    padding-right: 4.5rem;
    border-top: 1px solid lightgray;
    margin-top: 2.5rem;

	a { 
		text-decoration: none;
		color: black;

		:hover {
			text-decoration: none;
		}
	}

	.title {
		display: inline-block;
	    // margin-left: 5rem;
	}
`

export default function Footer() {
	const currentYear = new Date()
	console.log(currentYear)
	return(
		<FooterBar>
			Copyright & Design &copy;2020 Kyle P. Cole
		</FooterBar>
	)
}