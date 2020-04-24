import React from 'react'
import SKILLS from '../data/skillList.js'
import SkillItem from '../components/SkillItem'
import styled from 'styled-components'
import ReactHtmlParser from 'react-html-parser';


const FactsContainer = styled.div`
	min-height: 100%;
	width: 100%;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: center;

	h1 {
		width: 100%;
		border-bottom: 1px solid lightgray;
		padding-bottom: .5rem;
		font-family: 'Fjalla One', sans-serif;
	}
`
const Fact = styled.div`
	text-align: justify;
	width: 90%;
	margin: auto;
	margin-bottom: 1rem;
	
	h1 {
		font-size: 1.5rem;
		border-bottom: 0px !important;
		margin-bottom: 0px;
		padding-bottom: 0px;
		
	}

	p, h1 {
		margin-top: 0px;
	}

	.sidebar {
		margin-left: 1rem;
		font-size: .8rem;
	}
`

function FunFacts(props)  {
	
	let facts = props.facts
	// Sort alphabetically?
	// skills.sort((a,b) => a.name < b.name ? -1 : 1)

	return (
		<FactsContainer>
			<h1>Fun Facts</h1>
			{ facts.map(fact => { return (
					<Fact>
						<h1>{ fact.year } - {fact.fact }</h1>
						{ fact.note === '' ? null : <p className="sidebar">{ ReactHtmlParser(fact.note) }</p>}
					</Fact>
				) }
			  )
			}
			
		</FactsContainer>
	)
}

export default FunFacts