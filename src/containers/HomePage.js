import React from 'react'
// import Skills from '../containers/Skills'
// import Projects from '../containers/Projects'
import styled from 'styled-components'

const HomePageContent = styled.div`
	display:flex;
	width: 90%;
	margin: auto;
	text-align: left;
`

const Left = styled.h3`
	font-family: 'Fjalla One', sans-serif;
	flex: 4;
`

const Right = styled.div`
	margin-left: 1rem;
	flex: 5;
`

function HomePage() {
	return(
		<div id="homepage-container">
			<img id="full-screen" src="https://via.placeholder.com/1800x600" style={{ width: "100%"}}/>
			<HomePageContent>
				<Left>Hi, I'm Kyle. I'm a Web Developer living in Washington, DC. <br/>My passions are code, music, sustainability, and accesibiilty.</Left>
				<Right><p>I'm a product manager turned engineer with a design background. I spent the last few years at <a href="https://www.morevang.com">More Vang</a> where I was coding PDFs from scratch on a daily basis and oversaw the product team. Before that, I worked at Apple and managed a print shop. When I'm not writing code I can be found ouside enjoying nature or playing guitar in my basement.</p>
				<p>Checkout my <a href='/projects'>projects</a> to see what I'm into, or my <a href='blog'>blog</a> to see what I'm up to.</p>
				</Right>
			</HomePageContent>
		</div>
	)
}

export default HomePage
			// <Projects homepage/>
			// <Skills homepage/>