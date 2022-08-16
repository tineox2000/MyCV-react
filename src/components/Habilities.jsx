import React from 'react'
import "./Habilities.scss";

const Habilities = ({habilities}) => {
  return (
    <div className='card'>
    <div className= 'habilities'>
     <h3>Habilidades</h3>
    </div>
    {habilities.map((item) => {
      return (
          <div key={JSON.stringify(item)}>
              <button className='item-habilities'>{item}</button>
          </div>
      );
    })}
  
   </div>
);
};

export default Habilities