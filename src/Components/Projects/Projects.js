import React from 'react';
import Project from './Project';
import './Projects.css';
import Rentalhub from './Images/Rental hub .jpg';
import FreshFruitHub  from './Images/Fresh Fruit Hub .png';
import Rentify  from './Images/Rentify.png';

const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Works</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of <u>most</u> of the projects I've been working .
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="Car selling Website "
            img={Rentalhub}
            tech="js css react node"
            link="https://fresh-fruit-hub.onrender.com/"
            repo="https://github.com/MIHIR2006/mihir-portfolio"
          >
            <small>
              Built using Node, Express, MongoDB, CSS + Bulma, React.js and React Router.
            </small>
            <p>
            DriveDreams is more than just a website; it's a digital gateway to automotive enthusiasts' dreams. This project was born out of my love for both technology and cars, and I channeled that passion into every aspect of its creation.
            </p>
          </Project>

          
          <Project
            title="FreshFruitHub."
            img={FreshFruitHub}
            tech="js css react node"
            link="https://fresh-fruit-hub.onrender.com/"
            repo="https://github.com/MIHIR2006/Fruit-hub"
          >
            <small>
              Built using Node, Express, MongoDB, CSS + Bulma, React.js and React Router.
            </small>
            <p>
              This is a full-stack website that I made which lets the users read and post anonymous
              messages and replies.
            </p>
          </Project>
          
          <Project
            title="FreshFruitHub."
            img={Rentify}
            tech="js css react node"
            link="https://rentify-1iq0.onrender.com"
            repo="https://github.com/MIHIR2006/Rentify"
          >
            <small>
              Built using Node, Express, MongoDB, CSS + Bulma, React.js and React Router.
            </small>
            <p>
              This is a full-stack website that I made which lets the users read and post anonymous
              messages and replies.
            </p>
          </Project>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;


