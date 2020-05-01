import React from 'react'
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
	
	h2 {
		font-size: 1rem;
		margin-bottom: 0px;
		margin-top: 0px;
	}

	.sidebar {
		font-size: .8rem;
		margin-left: 1rem;
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
					<Fact key={ fact.fact}>
						<h2 key={ fact.fact}>{ fact.year } - {fact.fact }</h2>
						{ fact.note === '' ? null : <p className="sidebar">{ ReactHtmlParser(fact.note) }</p>}
					</Fact>
				) }
			  )
			}
			
		</FactsContainer>
	)
}

export default FunFacts