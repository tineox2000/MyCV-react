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
                <div className='div-calend'>
                <img className='icon' src= "https://img.icons8.com/small/344/calendar.png"  alt='icon-calend'/> 
                <p>{item.date}</p>
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