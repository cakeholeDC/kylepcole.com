import React from 'react'
import styled from 'styled-components'
import { device } from '../device';


const EducationDetails = styled.div`
	text-align: justify;
	width: 90%;
	margin: auto;
	margin-bottom: 2rem;
	border-top: 1px solid lightgray;
    padding-top: 1rem;
	
	h1 {
		font-size: 1.5rem;
		border-bottom: 0px !important;
		margin-bottom: 0px;
		padding-bottom: 0px;
	}

	p, h1 {
		margin-top: 0px;
	}

	.educationHeader {
		display: flex;
		@media only screen and ${device.mobileL} {
			flex-direction: column;
		}

		.left {
			flex: 2;
			text-align: left;
		}

		.right {
			flex: 1;
			text-align: right;
			@media only screen and ${device.mobileL} {
				text-align: left;
			}

			p {
				margin-bottom: 0px;
			}
		}
	}
`

export default function Education(props) {
	console.log(props)
	let school = props.school
	return (
		<EducationDetails>
			<div className="educationHeader">
				<div className="left">
					<h1 className="school">{ school.school }</h1>
					<p className="program">{ school.program }</p>
				</div>
				<div className="right">
					<p className="year">{ school.graduationYear }</p>
					<p className="location">{ school.location }</p>
				</div>
			</div>
		</EducationDetails>
	)
}
				// <div>
				// 	<h1 className="company"><strong>{ job.company }</strong> — { job.location }</h1>
				// 	<p className="dates">{job.fullTerm}</p>
				// </div>