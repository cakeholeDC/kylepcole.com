import React from 'react'

function SkillItem(props)  {
	return(
			<div className="col">
				<img src={`/icons/skills/${props.skill.name.toLowerCase()}-128.png`} />
				<p>{props.skill.name}</p>
			</div>
	)
}

export default SkillItem