import React from 'react'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

function HomePage() {
	return(
		<div id="homepage-container">
			<img id="full-screen" src="https://via.placeholder.com/1800x200" style={{ width: "100%"}}/>
			<Projects />
			<Skills />
		</div>
	)
}

export default HomePage