import React from 'react'
import RESUME from '../data/resume.js'
import styled from 'styled-components'
import Skills from './Skills.js'
import Experience from '../components/Experience.js'
import Education from '../components/Education.js'


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
	let education = resume.education.sort((a,b) => a.graduationYear > b.graduationYear ? -1 : 1)

	return (
		<ResumeContainer>
			<h1>WORK EXPERIENCE</h1>
			{ resume.experience.map(job => <Experience job={ job } key={ job.company }/> ) }
			<h1>Education</h1>
			{ education.map(school => <Education school={ school }/>) }
			<Skills />
		</ResumeContainer>
	)
}

export default Resume
		// <Skills skills={props.skills}/>