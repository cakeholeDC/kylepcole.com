import React from 'react'

function SkillItem (props) {
	//https://www.fillmurray.com/128/128
	//"https://via.placeholder.com/128"
	console.log("SkillItem", props.skill)
	return(
		<div className="skill">
			<img src={`/icons/skills/${ props.skill.icon ? props.skill.icon : `${props.skill.name.toLowerCase()}-128`}.png`} onError={event => event.target.src = "icons/skills/coding-128.png"} />
			<p>{props.skill.name}</p>
		</div>
	)
}

export default SkillItem