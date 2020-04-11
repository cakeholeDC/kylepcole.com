import React from 'react'


export default function ErrorPage() {
	// const header = document.getElementById('header')
	// header.classList.add("404")
	return(
		<div id="error404">
			<h1>We've searched everywhere. That page doesn't exist.</h1>
			<div><a href="/">Return Home</a></div>
			<img src="diving-404.png"/>
			<p><small>graphic by <a href="https://icons8.com">Ouch.pics</a></small></p>
		</div>
	)
}