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
	height: 100%;

    margin: 0;
    padding: 1rem 1.5rem;
    border: 1px solid lightgray;
    border-radius: .5rem;
    box-shadow: 0 0px 1px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);

    .social-header {
	  margin: 0px auto;
	  width: 94%;
	  font-size: 1.5em;
	  border-bottom: 1px solid rgba(15,70,100,.12);
	  margin-bottom: 1.25rem;
	}

	.social-icons {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.social-link {
			width: 100%;
			padding-bottom: 2rem;

			a {
				min-width: 100%;
				min-height: 100%;
			}		

			img {
				flex: 3;
				max-width: 100%;
				max-height: 5rem;
			}

			p {
				display: none;
			}

			span {
				flex: 1;
			}
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
				<div className="social-icons">
  				<h1 className ="social-header">Social:</h1>
					<a className="social-link" href="https://github.com/cakeholeDC/" target="_blank"><img src="/icons/tech/github.svg"/></a>
					<a className="social-link" href="https://www.linkedin.com/in/kylepcole/" target="_blank"><img src="/icons/social/LI-In-Bug.png"/></a>
					<a className="social-link" href="https://stackoverflow.com/users/12328717/cakehole" target="_blank"><img src="/icons/social/so-logo.svg"/></a>
				</div>
				<TwitterFeed/> 
			</SocialContainer>
		</ContactContainer>
	)
}

export default Contact