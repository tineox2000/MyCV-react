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
              <h4 className="name"> {item.name}</h4>
              <p>{item.where}</p>
              <p> {item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;