import React from 'react'
import SKILLS from '../data/skillList.js'
import SkillItem from '../components/SkillItem'

function Skills(props)  {
	
	let skills = [...SKILLS]//.sort((a,b) => a.name < b.name ? -1 : 1)
	// if (props.homepage){
	// 	skills = skills.slice(0,8)
	// }

	return (
		<React.Fragment>
		<hr />
			{  props.homepage ? <h1>Technologies and Software</h1> : null  }
		<hr />
			<div className="skills-container" >
				{ skills.map(skill => <SkillItem skill={ skill } key={ skill.name }/> ) }
			</div>
		</React.Fragment>
	)
}

export default Skills