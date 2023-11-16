import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard({title, description, imgsrc, buttonText}) {
  return (
    <Card style={{ width: '18rem', backgroundColor: 'rgba(255,255,255,.75)' }}>
      <Card.Img variant="top" src={imgsrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {description}
        </Card.Text>
        <Button variant="primary">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;