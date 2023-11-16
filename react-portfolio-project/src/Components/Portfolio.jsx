import React from 'react'
import ProjectCard from './ProjectCard'
import lloydchristmas from '/images/lloydchristmas.png'
import jd from '/images/jd.png'
import moh from '/images/moh.gif'
import tsvs from '/images/tsvs.gif'


const Portfolio = () => {
  const projects = [
    { title: 'project 1', description: 'the first project', imgsrc: lloydchristmas },
    { title: 'project 2', description: 'the second project', imgsrc: jd },
    { title: 'project 3', description: 'the third project', imgsrc: moh },
    { title: 'project 4', description: 'the fourth project', imgsrc: tsvs}
  ]
  return (
    <div className='Portfolio'>
      <h2>Portfolio</h2>
      <div className='flex'>
        {/* this box is going to hold the comment cards */}
        {projects.map((project, index) => (
          <ProjectCard title={project.title} description={project.description} imgsrc={project.imgsrc} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio;
