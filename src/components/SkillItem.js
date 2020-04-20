import React from 'react'
import styled from 'styled-components'

/* DESIGN NOTES */
/* 8rem = 128px */
/* 6.25rem = 100px */
const Skill = styled.div`
	
	@keyframes shake {
	  10%, 90% {
	    transform: translate3d(-2px, 0, 0);
	  }
	  
	  20%, 80% {
	    transform: translate3d(2px, 0, 0);
	  }

	  30%, 50%, 70% {
	    transform: translate3d(-2px, 0, 0);
	  }

	  40%, 60% {
	    transform: translate3d(2px, 0, 0);
	  }
	}

	display: flex; 
	flex-basis: calc(25% - 40px);	
	justify-content: center;
	margin: 1rem;
	flex-direction: column;

	img {
	  max-height: 8rem;
	  max-width: 8rem;
	  margin: auto;
		
		&:hover {
		  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
		  transform: translate3d(0, 0, 0);
		  backface-visibility: hidden;
		  perspective: 1000px;
		}

	}

	p {
		font-weight: bold;
	}
`

function SkillItem (props) {
	console.log("SkillItem", props.skill)
	return(
		<Skill>
			<img src={ `icons/skills/${props.skill.icon}` } onError={event => event.target.src = "https://via.placeholder.com/128"} />
			{/* @TODO => FALLBACK = icons/skills/coding-128.png */}
			<p>{props.skill.name}</p>
		</Skill>
	)
}

export default SkillItem