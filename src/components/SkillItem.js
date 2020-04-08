import React from 'react'

function SkillItem (props) {
	//https://www.fillmurray.com/128/128
	return(
		<div className="col">
			<img src={`/icons/skills/${props.skill.name.toLowerCase()}-128.png`} onError={event => event.target.src = "https://via.placeholder.com/128"} />
			<p>{props.skill.name}</p>
		</div>
	)
}

export default SkillItem