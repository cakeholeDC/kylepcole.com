import React from 'react'
import PROJECTS from '../data/projectList.js'
import ProjectItem from '../components/ProjectItem'

function Projects()  {
	return (
		<div className="flex-grid-projects" >
			{ PROJECTS.map(project => <ProjectItem project={ project } key={ project.name }/> ) }
		</div>
	)
}

export default Projects