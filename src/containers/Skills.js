import React from 'react'
import SKILLS from '../data/skillList.js'
import SkillItem from '../components/SkillItem'
import styled from 'styled-components'

const SkillsContainer = styled.div`
	min-height: 100%;
	width: 70%;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;

	h1 {
		width: 100%;
		border-bottom: 1px solid lightgray;
		padding-bottom: 7px;
	}
`

function Skills(props)  {
	
	let skills = [...SKILLS]//.sort((a,b) => a.name < b.name ? -1 : 1)
	// if (props.homepage){
	// 	skills = skills.slice(0,8)
	// }

	return (
		<SkillsContainer>
			<h1>Skills</h1>
			{ skills.map(skill => <SkillItem skill={ skill } key={ skill.name }/> ) }
		</SkillsContainer>
	)
}

export default Skills