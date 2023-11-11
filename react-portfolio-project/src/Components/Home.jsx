import React from 'react'
import { Card, Button } from 'react-bootstrap'
import moh2 from '/images/moh2.gif'
import tsvs2 from '/images/tsvs2.gif'

const Home = () => {
  return (
    <div className='Home'>
      <h2>Home</h2>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={moh2} />
        <Card.Body>
          <Card.Title>My Honest Reaction</Card.Title>
          <Card.Text>
            Honestly my reaction.
          </Card.Text>
          <Button variant="primary">Button</Button>
        </Card.Body>
      </Card>
      <img src={tsvs2} />
    </div>
  )
}

export default Home;