import React from 'react'
import Card from './Card'
import Student from './Student'

const Resume = () => {
  return (
    <div className='Resume'>
      <h2>Resume</h2>
      <p>Paragraph</p>
      <Card />
      <Student name="Spongebob" age={30}/>
    </div>
  )
}

export default Resume;