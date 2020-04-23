import React from 'react'
import RESUME from '../data/resume.js'
import styled from 'styled-components'
import Skills from './Skills.js'
import Experience from '../components/Experience.js'


const ResumeContainer = styled.div`
	// min-height: 100%;
	width: 75%;
	margin: auto;
	// display: flex;
	// flex-wrap: wrap;
	// flex-direction: row;
	// justify-content: center;

	h1 {
		width: 100%;
		border-bottom: 1px solid lightgray;
		padding-bottom: .5rem;
		font-family: 'Fjalla One', sans-serif;
	}
`

function Resume(props)  {
	
	let resume = RESUME

	return (
		<ResumeContainer>
			<h1>WORK EXPERIENCE</h1>
			{ resume.experience.map(job => <Experience job={ job } key={ job.company }/> ) }
			<Skills />
		</ResumeContainer>
	)
}

export default Resume
		// <Skills skills={props.skills}/>