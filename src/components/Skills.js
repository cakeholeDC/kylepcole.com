import React from 'react'
import SKILLS from '../data/skillList.js'
import SkillItem from '../components/SkillItem'

function Skills()  {

	// const sortedSkills = SKILLS.sort((a,b) => a.name < b.name ? -1 : 1)

	return (
		<div className="flex-grid-skills" >
			{ /* sortedSkills.map(skill => <SkillItem skill={ skill } key={ skill.name }/> )  */ }
			{ SKILLS.map(skill => <SkillItem skill={ skill } key={ skill.name }/> ) }
		</div>
	)
}

export default Skills