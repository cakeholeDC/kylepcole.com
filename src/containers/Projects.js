import React from 'react'
import PROJECTS from '../data/projectList.js'
import ProjectItem from '../components/ProjectItem'
import styled from 'styled-components'

const ProjectsContainer = styled.div`
	width: 70%;
	min-height: 100%;
	margin: auto;
  	display: flex;
  	flex-wrap: wrap;
  	flex-direction: row;
  	justify-content: center;

  	h1 {
		width: 100%;
		border-bottom: 1px solid lightgray;
		padding-bottom: 7px;
	}
`

function Projects(props)  {
	let projects = [...PROJECTS]
	// if (props.homepage){
	// 	projects = projects.slice(0,4)
	// }
	return (
		<ProjectsContainer>
			{ props.homepage ? <h1>Projects</h1> : null }
			{ projects.map(project => <ProjectItem project={ project } key={ project.name }/> ) }
		</ProjectsContainer>
	)
}

export default Projects