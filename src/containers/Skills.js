import React from 'react'
import SKILLS from '../data/skillList.js'
import SkillItem from '../components/SkillItem'

function Skills(props)  {
	
	let skills = [...SKILLS]//.sort((a,b) => a.name < b.name ? -1 : 1)
	// if (props.homepage){
	// 	skills = skills.slice(0,8)
	// }

	return (
		<div className="skills-container" >
			{ /* props.homepage ? <h1>Top Skills</h1> : null */ }
			{ skills.map(skill => <SkillItem skill={ skill } key={ skill.name }/> ) }
		</div>
	)
}

export default Skills