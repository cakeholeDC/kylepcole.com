import React from 'react'
// import Skills from '../containers/Skills'
// import Projects from '../containers/Projects'
import styled from 'styled-components'
// import TwitterFeed from '../components/TwitterFeed'


const PrimaryImg = styled.img`
	width: 100vw;
	height: 50vh;
    object-fit: cover;
    object-position: center;

`
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
	const codeImg = "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3353&q=80"
	const metroImg = "https://images.unsplash.com/photo-1508046894814-45baae4132da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80"
	const notebook = "/images/notebook.jpg"

	return(
		<div id="homepage-container">
			<PrimaryImg 
				src={ notebook }
				onError={event => event.target.src = "https://via.placeholder.com/1800x600"}
			/>
			<HomePageContent>
				<Left>Hi, I'm Kyle. I'm a Web Developer living in Washington, DC. <br/>My passions are code, music, sustainability, and accesibiilty.</Left>
				<Right><p>I'm a product manager turned engineer with a background in graphic arts. I spent the last few years at <a href="https://www.morevang.com">More Vang</a> where I coded PDFs from scratch on a daily basis while overseeing the product team. Before that, I worked at Apple and managed a print shop. When I'm not writing code I can be found ouside enjoying nature or playing guitar in my basement.</p>
				<p>Checkout my <a href='/projects'>projects</a> to see what I'm into, or my <a href='blog'>blog</a> to see what I'm up to.</p>
				</Right>
			</HomePageContent>
			
		</div>
	)
}

export default HomePage
			// <Projects homepage/>
			// <Skills homepage/>