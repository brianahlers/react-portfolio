import React from 'react'
import ProjectCard from './ProjectCard'


const Portfolio = () => {
  const projects = [
    { title: 'React ', description: 'the first project', imgsrc: lloydchristmas, buttonText: 'Austria??' },
    { title: 'Joshua Dobbs', description: 'Throw the Balls', imgsrc: jd, buttonText: 'Pass the Ball' },
    { title: 'Honestly my reaction', description: 'How I Honestly React', imgsrc: moh, buttonText: 'To that Information' },
    { title: 'project 4', description: 'I hate the chiefs', imgsrc: tsvs, buttonText: 'Take me higher'}
  ]
  return (
    <div className='Portfolio'>
      <h2>Portfolio</h2>
      <div className='flex'>
        {projects.map((project, index) => (
          <ProjectCard title={project.title} description={project.description} imgsrc={project.imgsrc} buttonText={project.buttonText}key={index} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio;
