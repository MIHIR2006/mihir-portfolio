import React from 'react';
import './About.css';

const About = props => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who's this guy?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Mihir.</h4>
            <p>
              I am a  Passionate web developer web designer App developer and AI enthusiast 
            </p>
            <p>
              I really enjoy solving problems as well as making things pretty and easy to use. I
              can't stop learning new things; the more, the better. I also love to play chess.
            </p>
            <p>
            I love to code because if I can think it, I can make it a reality.
            </p>
          </div>
          <div className="title">
            <h3>What does he do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm a programmer.</h4>
            <p>
              For the front-end I usually work with Javascript,or including
              popular frameworks like ReactJS and NextJS. I also make the web pretty by using CSS and, whenever needed, any of their friends: Bootstrap, tailwind, etc.
            </p>
            <p>
              For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc). 
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">Also a App Developer.</h4>
            <p>
              I feel comfortable working with many Adobe products. Photoshop, Illustrator, InDesign,
              Lightroom or Xd are some kind of industry standards and I love working with them. I'm
              not limited to them, though: Gimp, Inkscape or Figma are also very valid applications
              that I've been working with.
            </p>
            <p>
              User interfaces, brochures, books, branding... You name it! As I mentioned, creating
              pretty things is particularly important for me.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;