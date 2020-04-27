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

	.links {
		flex: 1;
	}
`

function Contact(props)  {

	return (
		<ContactContainer>
			<h1>Send a Note</h1>
			<ContactForm />
				<h1>Social Media</h1>
			<SocialContainer>
				<div className="links">
					<p>Github</p>
					<p>LinkedIn</p>
					<p>Stack Overflow</p>
				</div>
				<TwitterFeed/> 
			</SocialContainer>
		</ContactContainer>
	)
}

export default Contact