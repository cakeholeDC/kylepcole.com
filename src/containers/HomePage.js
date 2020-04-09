import React from 'react'
import Skills from '../containers/Skills'
import Projects from '../containers/Projects'

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