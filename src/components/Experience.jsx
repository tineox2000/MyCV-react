import React from 'react'
import "./Experience.scss";

const Experience = ({ experience }) => {
  return (
    <div>
      <div className='experience card'>
       <h3>Experiencia Laboral</h3>
      {experience.map((item) => {
        return (
            <div key={JSON.stringify(item)}>
                <h2 className='name'>{item.name}</h2>
                <p>{item.where}</p>
                <p>{item.date}</p>
                <p>{item.description}</p>
            </div>
        );
      })};
     </div>
    </div>
  );
};

export default Experience