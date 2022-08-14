import React from 'react';
import "./More.scss";

const More = ({ moreDates }) => {
    return (
        <div className='moreDates'>
          <div className="card moreDates">
          <h3>Datos de Interés</h3>
          {moreDates.map((item) => {
            return (
              <div key={item.info}>
                <p>
                  {item.info1}
                </p>
                <p>
                  {item.info2}
                </p>
                <p>
                  {item.info3}
                </p>
                <p>
                  {item.info4}
                </p>
              </div>
            );
          })}
          </div>
        </div>
      );
    };

export default More