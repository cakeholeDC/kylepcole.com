import React from 'react'
import ContactForm from '../components/ContactForm'
import styled from 'styled-components'

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

function Contact(props)  {

	return (
		<ContactContainer>
			<h1>Send a Note</h1>
			<ContactForm />
		</ContactContainer>
	)
}

export default Contact