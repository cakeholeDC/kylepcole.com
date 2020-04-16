import React from 'react'
import PROJECTS from '../data/projectList.js'
import ProjectItem from '../components/ProjectItem'
import styled from 'styled-components'

const ProjectsContainer = styled.div`
	width: 80%;
	min-height: 100%;
	margin: auto;
  	display: flex;
  	flex-wrap: wrap;
  	flex-direction: row;
  	justify-content: center;
`

function Projects(props)  {
	let projects = [...PROJECTS]
	// if (props.homepage){
	// 	projects = projects.slice(0,4)
	// }
	return (
		<ProjectsContainer>
			{ projects.map(project => <ProjectItem project={ project } key={ project.name }/> ) }
		</ProjectsContainer>
	)
}

export default Projects