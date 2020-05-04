import React from 'react'
// import Skills from '../containers/Skills'
// import Projects from '../containers/Projects'
import styled from 'styled-components'
// import TwitterFeed from '../components/TwitterFeed'
import { device } from '../device';

const PrimaryImg = styled.img`
	width: 100vw;
	height: 50vh;
    object-fit: cover;
    object-position: center;

	@media only screen and ${device.mobileL} { 
	    height: 30vh;
	}

`
const HomePageContent = styled.div`
	display:flex;
    flex-direction: row;
	width: 90%;
	margin: auto;
	text-align: left;

	@media only screen and ${device.mobileL} { 
	    flex-direction: column;
	}
`

const Left = styled.h3`
	font-family: 'Fjalla One', sans-serif;
	flex: 4;
`

const Right = styled.div`
	margin-left: 1rem;
	flex: 5;

	@media only screen and ${device.mobileL} { 
	    margin-left: 0px;
	}
`

function HomePage() {
	const codeImg = "https://images.unsplash.com/photo-1504639725590-34d0984388bd"
	// const metroImg = "https://images.unsplash.com/photo-1508046894814-45baae4132da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80"
	const notebook = "/images/notebook.jpg"

	return(
		<div id="homepage-container">
			<PrimaryImg 
				src={ notebook }
				onError={event => event.target.src = codeImg}
			/>
			<HomePageContent>
				<Left>Hi, I'm a Web Developer living in Washington, DC. <br/>My passions are code, music, sustainability, and accesibility.</Left>
				<Right><p>I am a full-stack engineer specializing in creating engaging digital experiences. I am currently seeking a position where I can leverage my background in communications, marketing, and product management to achieve impactful goals.</p><p>I spent the last few years at <a href="https://www.morevang.com">More Vang</a> where I coded PDFs from scratch on a daily basis while overseeing the product team. Before that, I worked at Apple and managed a print shop. When I'm not writing code I can be found ouside enjoying nature or playing guitar in my basement.</p>
				<p>Check out my <a href='/projects'>projects</a> &amp; <a href='blog'>blog</a> to see what I have been up to lately.</p>
				</Right>
			</HomePageContent>
			
		</div>
	)
}

export default HomePage
			// <Projects homepage/>
			// <Skills homepage/>