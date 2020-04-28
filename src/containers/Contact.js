import React from 'react'
import ContactForm from '../components/ContactForm'
import styled from 'styled-components'
import TwitterFeed from '../components/TwitterFeed'


const ContactContainer = styled.div`
	width: 50%;
	min-height: 100%;
	margin: auto;

  	h1 {
		width: 100%;
		// border-bottom: 1px solid lightgray;
		padding-bottom: .5rem;
		font-family: 'Fjalla One', sans-serif;
	}
`

const SocialContainer = styled.div`
	display: flex;

    margin: 0;
    padding: 1rem 1.5rem;
    border: 1px solid lightgray;
    border-radius: .5rem;
    box-shadow: 0 0px 1px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);

	.links {
		flex: 1;
		display: flex;
		flex-direction: column;
		// justify-content: space-between;

		a {
			flex: 1;
			height: calc(100%/3);
		}

		img {
			max-width: 12rem;
			max-height: 8rem;
		}
	}
`

function Contact(props)  {

	return (
		<ContactContainer>
			<h1>Send me a Note</h1>
			<ContactForm />
				<h1>Or find me on Social Media</h1>
			<SocialContainer>
				<div className="links">
					<a href="https://github.com/cakeholeDC/" target="_blank"><img src="/icons/skills/github-solid.png"/></a>
					<a href="https://www.linkedin.com/in/kylepcole/" target="_blank"><img src="/icons/LI-In-Bug.png"/></a>
					<a href="https://stackoverflow.com/users/12328717/cakehole" target="_blank"><img src="/icons/so-logo.svg"/></a>
				</div>
				<TwitterFeed/> 
			</SocialContainer>
		</ContactContainer>
	)
}

export default Contact