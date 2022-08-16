import React from "react";
import "./Contact.scss";


function Contact({contact}) {
    return (
        <div className="contact">
          <img src={contact.image} alt="" />
          <div className="card-contact">
          <h1> {contact.name} </h1>
          <h2>Full Stack Developer Jr</h2>
          <div className="div-contact">
          <img className="icon" src="./iconoHome.png" alt="iconoCasa"/>
          <p>{contact.adress}</p>
          </div>
          <div className="div-contact">
          <img className="icon" src="iconoUbicacion.png" alt="icon-ubi"/>
          <p> {contact.city} </p>
          </div>
          <div className="div-contact">
          <img className="icon" src="./iconoCalendario.png" alt="icon-calend"/>
          <p>{contact.birthDate}</p>
          </div>
          <div className="div-contact">
          <img className="icon" src="./iconoCorreo.png" alt="icon-email"/>
          <p><a href={"mailto:" + contact.email}>javier.tineo@bootcamp-upgrade.com</a></p>
          </div>
          <div className="div-contact">
          <img className="icon" src="iconoTelefono.png" alt="icon-phone"/>
          <p>{contact.phone}</p>
          </div>
          
        </div>
        </div>
      );
    };






export default Contact;