import React from 'react'
import styled from 'styled-components'
import ReactHtmlParser from 'react-html-parser';
import { device } from '../device';


const PositionDetails = styled.div`
	text-align: left;
	width: 90%;
	margin: auto;
	margin-bottom: 1rem;
	border-top: 1px solid lightgray;
    padding-top: 1rem;

	@media only screen and ${device.mobileL} {
		ul {
			padding-left: 1rem;
		}
		.job-header {
			flex-direction: column;
		}
	}
	
	h2 {
		font-size: 1rem;
		margin-bottom: 0px;
		margin-top: 0px;
	}

	p {
		font-size: .8rem;
		margin-top: .125rem;
		margin-bottom: 0px;

		&.term {
			font-size: .7rem;
		}
	}

	ul {
		font-size: .8rem;
		// margin-top: .125rem;
		margin-bottom: 0px;
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

			@media only screen and ${device.mobileL} {
				display: flex;
				flex-direction: column-reverse;
				text-align: left;
			}
		}
	}
`

export default class Experience extends React.Component {
	positionDetails = (job) => {
		return(
			<PositionDetails key={job.role}>
				<div className="job-header">
				<div className="left">
					<h2 className="role">{ job.role }</h2>
					<p className="company">{ this.props.job.company }</p>
				</div>
				<div className="right">
					<p className="term">{ job.positionTerm }</p>
					<p className="location">{ this.props.job.location }</p>
				</div>
				</div>
				{ /*job.positionTerm === this.props.job.fullTerm ? null : <p>{ job.positionTerm }</p> */}
				<ul>
					{ job.bullets.map((b, index) => <li key={index}>{ ReactHtmlParser(b) }</li>) }
				</ul>
			</PositionDetails>
		)
	}


	render(){
		let job = this.props.job

		return job.positions.map(j => this.positionDetails(j)) 
	}
}
				// <div>
				// 	<h1 className="company"><strong>{ job.company }</strong> — { job.location }</h1>
				// 	<p className="dates">{job.fullTerm}</p>
				// </div>