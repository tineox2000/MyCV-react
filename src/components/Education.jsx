import React from "react";
import "./Education.scss";

const Education = ({ education }) => {
  return (
    <div>
      <div className="education card">
      <h3>Formación Académica</h3>
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <h4 className="name"> {item.name1}</h4>
              <div className="div-education">
              <img className="icon" src={item.photo} alt="logo-upgrade" />
              <p>{item.where1}</p>
              </div>
              <div className="div-education">
              <img className="icon" src="./iconCalend.png" alt="icono-calendario"/>
              <p> {item.date1}</p>
              </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;