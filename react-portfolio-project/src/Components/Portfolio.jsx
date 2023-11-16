import React from 'react'
import ProjectCard from './ProjectCard'
import lloydchristmas from '/images/lloydchristmas.png'
import jd from '/images/jd.png'
import moh from '/images/moh.gif'
import tsvs from '/images/tsvs.gif'


const Portfolio = () => {
  const projects = [
    { title: 'project 1', description: 'the first project', imgsrc: lloydchristmas, buttonText: 'Seabass said that?' },
    { title: 'project 2', description: 'the second project', imgsrc: jd, buttonText: 'Eagle!' },
    { title: 'project 3', description: 'the third project', imgsrc: moh, buttonText: 'I\'m the dude' },
    { title: 'project 4', description: 'the fourth project', imgsrc: tsvs, buttonText: 'Take me higher'}
  ]
  return (
    <div className='Portfolio'>
      <h2>Portfolio</h2>
      <div className='flex'>
        {/* this box is going to hold the comment cards */}
        {projects.map((project, index) => (
          <ProjectCard title={project.title} description={project.description} imgsrc={project.imgsrc} buttonText={project.buttonText}key={index} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio;
