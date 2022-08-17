import React from 'react'
import "./About.scss";

const About = ({aboutMe}) => {
  return (
    <div className='about'>
      <div className="card">
      <div className='aboutMe'>
      <h3>Sobre mi</h3>
      </div>
      
      {aboutMe.map((item) => {
        return (
          <div key={item.info}>
            <p>
              {item.info}
            </p>
            <p>
              {item.info2}
            </p>
            <p>
              {item.info3}
            </p>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default About