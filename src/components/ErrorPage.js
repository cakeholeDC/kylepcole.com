import React from 'react'
import styled from 'styled-components'

const Error404 = styled.div`
	width: 60%;
	margin: auto;
	text-align: center;

	img {
		width: 50%;
		float: left;
	}
`

const ReturnHome = styled.button``


export default function ErrorPage() {
	// const header = document.getElementById('header')
	// header.classList.add("404")
	return(
		<Error404>
			<img src="diving-404.png" alt="404"/>
			<h1>Hmmm. We're having trouble finding that page.</h1>
			<p>Here's some things you can try:
			<ul>
				<li>Check your URL</li>
				<li>Check your Internet Connection</li>
				<li>Do you have a cat? If so, check your tubes for clogs.</li>
			</ul>
			</p>
			<ReturnHome><a href="/">Return Home</a></ReturnHome>
			<p><small>graphic by <a href="https://icons8.com">Ouch.pics</a></small></p>
		</Error404>
	)
}