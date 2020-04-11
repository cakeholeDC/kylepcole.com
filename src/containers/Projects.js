import React from 'react'
import PROJECTS from '../data/projectList.js'
import ProjectItem from '../components/ProjectItem'

function Projects(props)  {
	let projects = [...PROJECTS]
	// if (props.homepage){
	// 	projects = projects.slice(0,4)
	// }
	return (
		<React.Fragment>
			<hr />
				{  props.homepage ? <h1>Projects</h1> : null  }
			<hr />
			<div className="projects-container" >
				{ projects.map(project => <ProjectItem project={ project } key={ project.name }/> ) }
			</div>
		</React.Fragment>
	)
}

export default Projects