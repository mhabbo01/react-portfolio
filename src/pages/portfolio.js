import React from 'react';
import { Container, Col } from 'react-bootstrap';
import Project from '../components/Project';
import projects from '../assets/portfolio';
import Header from '../components/Header';

function Portfolio() {
    return (
        <Container>
            <Header page={''} />
            <Col className="pb-5 pt-5 row mt-5">
                {projects.map((project) => (
                    <Project name={project.name} src={project.src} github={project.github} liveLink={project.liveLink} />
                ))}
            </Col>
        </Container>
    )
}

export default Portfolio;