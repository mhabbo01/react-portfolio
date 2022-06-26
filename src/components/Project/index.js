import React from 'react';
import Card from 'react-bootstrap/Card';

function Project(props) {
    return (
        <Card className='mb-3'>
            <Card.Header className='text-black'>
                <h4>{props.name}</h4>
            </Card.Header>
            <Card.Img src={props.src} alt={props.alt} />
            <Card.Footer>
                <Card.Link href={props.github} target="_blank" >Github Repo</Card.Link>
                <Card.Link href={props.liveLink} target="_blank" >Live Web App</Card.Link>
            </Card.Footer>
        </Card>
    );
}

export default Project;