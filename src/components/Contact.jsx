import React from "react";
import "./Contact.scss";


function Contact({contact}) {
    return (
        <div className="contact">
          <img src={contact.image} alt="" />
          <div className="card-contact">
          <h1> {contact.name} </h1>
            <p> 🏠 {contact.adress}</p>
            <p>📍{contact.city} </p>
            <p>🗓️{contact.birthDate}</p>
            <p>📧<a href={"mailto:" + contact.email}>javier.tineo@bootcamp-upgrade.com</a></p>
            <p>📱 {contact.phone}</p>
            <p>💻<a href={contact.linkedin}>Linkedin</a></p>
            <p>💾<a href={contact.gitHub}>GitHub</a></p>
        </div>
        </div>
      );
    };






export default Contact;