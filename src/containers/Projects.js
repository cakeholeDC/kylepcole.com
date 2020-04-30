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
		padding-bottom: .5rem;
	}
`

function Projects(props)  {
	let projects = props.projects

	return (
		<ProjectsContainer>
			<h1>Sometimes I code.</h1>
			{ projects.map(project => <ProjectTile project={ project } key={ project.name }/> ) }
		</ProjectsContainer>
	)
}

export default Projects