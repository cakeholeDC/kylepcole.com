import React from 'react'
import styled from 'styled-components'
import ReactHtmlParser from 'react-html-parser';
import { device } from '../device';

const Fact = styled.div`
	text-align: left;
	width: 90%;
	margin: auto;
	margin-bottom: 1rem;
	border-top: 1px solid lightgray;
    padding-top: 1rem;
    display: flex;

	@media only screen and ${device.mobileL} {
		flex-direction: column;
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

		&.year {
			// font-size: .7rem;
		}
	}

	ul {
		font-size: .8rem;
		margin-bottom: 0px;

		@media only screen and ${device.mobileL} {
			padding-left: 1rem;
		}
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
	}
`

export default function Anecdote(props)  {
	let fact = props.fact
	return (
		<Fact>
			<div className="left">
				<h2>{fact.fact }</h2>
				<p>{ ReactHtmlParser(fact.note) }</p>
			</div>
			<div className="right">
				<p className="year">{ fact.year }</p>
				<p className='location'>{ fact.location }</p>
			</div>
		</Fact>
	)
}