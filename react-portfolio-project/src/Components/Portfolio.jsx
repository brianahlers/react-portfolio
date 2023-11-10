import React from 'react'
import ProjectCard from './ProjectCard'
import ExamplePic from '../images/ExamplePic.jpg'

const Portfolio = () => {
  const projects = [
    {title: 'project 1', description:'the first project', imgsrc: ExamplePic}, 
    {title: 'project 2', description: 'the second project'}, 
    {title: 'project 3', description: 'the third project'}
  ]
    return (
        <div className ='Portfolio'>
        <h2>Portfolio</h2>
        <div className='flex'>
          {/* this box is going to hold the comment cards */}
          {projects.map((project) => (
            <ProjectCard title={project.title} description={project.description} imgsrc={imgsrc} />
          ))}
        </div>
      </div>
    )
}

export default Portfolio;