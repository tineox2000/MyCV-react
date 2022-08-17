import React from 'react'
import "./Experience.scss";

const Experience = ({ experience }) => {
  return (
    <div>
      <div className='card'>
      <div className='expLab'>
      <h3>Experiencia Laboral</h3>
      </div>
      {experience.map((item) => {
        return (
            <div key={JSON.stringify(item)}>
                <h2 className='name'>{item.name}</h2>
                <div className='div-experience'>
                  <p>{item.where}</p>
                  <div className='div-calend'>
                  <img className='icon' src= "https://img.icons8.com/small/344/calendar.png"  alt='icon-calend'/> 
                  <p>{item.date}</p>
                  </div>
                </div>
                
                <p>{item.description}</p>
            </div>
        )
      })}
     </div>
    </div>
  );
};

export default Experience