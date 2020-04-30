import React from 'react'
import RESUME from '../data/resume.js'
import styled from 'styled-components'
import Skills from './Skills.js'
import FunFacts from './FunFacts.js'
import Experience from '../components/Experience.js'
import Education from '../components/Education.js'
import { device } from '../device';


const ResumeContainer = styled.div`
	width: 75%;
	margin: auto;

	@media only screen and ${device.mobileL} {
		width: 90%;
	}

	h1 {
		width: 100%;
		// border-bottom: 1px solid lightgray;
		padding-bottom: .5rem;
		margin-bottom: 1rem;
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
			{ education.map(school => <Education school={ school } key={ school.school }/>) }
			<Skills />
			<FunFacts facts={ resume.funFacts }/>
		</ResumeContainer>
	)
}

export default Resume
		// <Skills skills={props.skills}/>