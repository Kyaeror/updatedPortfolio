import React from 'react';
import '../style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import iCarly from '../assets/Project1.png';
import FortressDefense from '../assets/Project2.png';
import Blog from '../assets/Blog.png';
import passwordGenerator from '../assets/passwordGenerator.png';
import Quiz from '../assets/quiz.png';
import noteTaker from '../assets/noteTaker.png';


function Project() {
    
  const projects = [
    {
        title: `Personal Youtube Extraction`,
        imageURL: iCarly,
        description: `This is a personalized website that grabs from the youtube api to extract videos and display comments from that video`,
        githubURL: `https://github.com/IzzyBrassell/iCarly-project-1`
    },
    {
        title: `Fortress Defense Game`,
        imageURL: FortressDefense,
        description: `Me and my team made a fortress defense like game. You can create towers, enemies progressively get harder, a money system, and you can login to save your highscore.`,
        githubURL: `https://github.com/IzzyBrassell/Fortress-Defense`
    },
    {
        title: `Blog`,
        imageURL: Blog,
        description: `I created a website that lets people create blogs after they login or register through a database`,
        githubURL: `https://github.com/Kyaeror/Blog`
    },
    {
        title: `Password Generator`,
        imageURL: passwordGenerator,
        description: `I made a password generator that takes criterias such as the size of password needed, capital letters, and special characters`,
        githubURL: `https://github.com/Kyaeror/Password-Generator`
    },
    {
        title: `Coding Quiz`,
        imageURL: Quiz,
        description: `This is a quiz that has a count down timer. It will let you know the score at the end and then let you save that score for that session to view later. Every answer you get wrong reduces the time you have.`,
        githubURL: `https://github.com/Kyaeror/Coding-Quiz`
    },
    {
        title: `Note Taker`,
        imageURL: noteTaker,
        description: `This is a application that lets you save notes.`,
        githubURL: `https://github.com/Kyaeror/noteTaker`
    },
  ];

  return (
    <div className="container">
      <div className="row justify-content-center">
        {projects.map((project, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <Card style={{ boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)' }}>
              <Card.Img variant="top" src={project.imageURL} style={{ display: 'block', margin: 'auto', width: '100px', height: '100px' }} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <a href={project.githubURL}>{project.githubURL}</a>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;