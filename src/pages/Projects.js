import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';

const Projects = ({ projects, myRef }) => {
  const renderCards = () => {
    const projectCards = [];
    for (const [name, proj] of Object.entries(projects)) {
      projectCards.push(<ProjectCard {...proj} shorthand={name} key={name} />)
    }
    return projectCards
  }

  return (
    <section id="projects" className="projects section" ref={myRef}>
    <Typography variant="h2" component="h2" gutterBottom align="center">
      Projects
    </Typography>
    <Container style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
      {renderCards()}
    </Container>
    {/*
    <Typography variant="h6" component="h6" gutterBottom>
      Apps for Learning
    </Typography>
    <Typography variant="body1" gutterBottom>
      As a teacher/coach at Flatiron School, I made a few "mini" projects designed to help students learn the fundamentals of software engineering. Here are just a few!
    </Typography>
    */}
  </section>
  );
}

Projects.propTypes = {
  projects: PropTypes.object,
};

export default Projects;
