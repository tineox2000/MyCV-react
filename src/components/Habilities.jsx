import React from 'react'
import "./Habilities.scss";

const Habilities = ({habilities}) => {
  return (
    <div>
    <div className='habilities card'>
     <h3>Habilidades</h3>
    {habilities.map((item) => {
      return (
          <div key={JSON.stringify(item)}>
              <p>{item.html}</p>
              <p>{item.css}</p>
              <p>{item.react}</p>
              <p>{item.angularJS}</p>
              <p>{item.mongoDB}</p>
              <p>{item.php}</p>
              <p>{item.sql}</p>
          </div>
      );
    })};
   </div>
  </div>
);
};

export default Habilities