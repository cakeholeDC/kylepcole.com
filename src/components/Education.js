import React from 'react'
import styled from 'styled-components'
import ReactHtmlParser from 'react-html-parser';

const EducationDetails = styled.div`
	text-align: justify;
	width: 90%;
	margin: auto;
	
	h1 {
		font-size: 1.5rem;
		border-bottom: 0px !important;
		margin-bottom: 0px;
		padding-bottom: 0px;
	}

	p, h1 {
		margin-top: 0px;
	}

	.job-header {
		display: flex;

		.left {
			flex: 2;
			text-align: left;
		}

		.right {
			flex: 1;
			text-align: right;

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
			<div className="job-header">
				<div className="left">
					<h1 className="name">{ school.school }</h1>
					<p className="company">{ school.program }</p>
				</div>
				<div className="right">
					<p className="term">{ school.graduationYear }</p>
					<p className="term">{ school.location }</p>
				</div>
			</div>
		</EducationDetails>
	)
}
				// <div>
				// 	<h1 className="company"><strong>{ job.company }</strong> — { job.location }</h1>
				// 	<p className="dates">{job.fullTerm}</p>
				// </div>