import React from 'react'
import ProjectTile from '../components/ProjectTile'
import styled from 'styled-components'

const ProjectsContainer = styled.div`
	width: 75%;
	min-height: 100%;
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

function Projects(props)  {
	let projects = props.projects

	return (
		<ProjectsContainer>
			<h1>Things I've Built</h1>
			{ projects.map(project => <ProjectTile project={ project } key={ project.name }/> ) }
		</ProjectsContainer>
	)
}

export default Projects