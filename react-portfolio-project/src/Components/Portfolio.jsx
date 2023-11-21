import React from 'react'
import ProjectCard from './ProjectCard'
import lloydchristmas from '/images/lloydchristmas.png'
import jd from '/images/jd.png'
import moh from '/images/moh.gif'
import tsvs from '/images/tsvs.gif'


const Portfolio = () => {
  const projects = [
    { title: 'I am a limo driver', description: 'the first project', imgsrc: lloydchristmas, buttonText: 'Austria??' },
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
