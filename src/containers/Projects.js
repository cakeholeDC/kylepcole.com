import React from 'react'
import PROJECTS from '../data/projectList.js'
import ProjectItem from '../components/ProjectItem'

function Projects(props)  {
	let projects = [...PROJECTS]
	// if (props.homepage){
	// 	projects = projects.slice(0,8)
	// }
	return (
		<div className="projects-container" >
			{ projects.map(project => <ProjectItem project={ project } key={ project.name }/> ) }
		</div>
	)
}

export default Projects