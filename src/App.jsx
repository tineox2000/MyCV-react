import './App.scss';
import Contact from './components/Contact';
import Education from './components/Education';
// import { useState } from "react";
import { CV } from "./CV/CV";
import About from './components/About';
import Experience from './components/Experience';
import More from './components/More';
import Habilities from './components/Habilities';
import { useDispatch, useSelector, } from 'react-redux';
import { clickAbout, clickEducation, clickExperience, clickHabilities, clickMore } from './redux/cv/cv.actions';

const { contact, aboutMe, education, experience, habilities, languages, moreDates} = CV;

function App() {
  const dispatch = useDispatch();
  const menu = useSelector (state => {
    console.log(state, 'maracuyea');
     return state.menuBlock.menu}
  )

  return (
    <div className="App">
    <h2 className="h2cv">CV</h2>
        <Contact contact={contact} />
        <div className='nav'>
        <button className='btn-nav' onClick={() => dispatch(clickAbout())}>
          Sobre mi
        </button>
        <button className='btn-nav' onClick={() => dispatch(clickEducation())}>
          Formación Académica
        </button>
        <button className='btn-nav' onClick={() => dispatch(clickExperience())}>
          Experiencia
        </button>
        <button className='btn-nav' onClick={() => dispatch(clickHabilities())}>
          Habilidades
        </button>
        <button className='btn-nav' onClick={() => dispatch(clickMore())}>
          Datos de Interés
        </button>
      </div>
     
      {menu === 1 ? (
        <About aboutMe={aboutMe} />
      ) : menu === 2 ? (
        <Education education={education}/>
      ) : menu === 3 ? (
        <Experience experience={experience} />
      ) : menu === 4 ? (
        <Habilities habilities={habilities} />
      ) : menu === 5 ? (
        <More languages={languages} moreDates={moreDates}/>
      ) : (
        ""
      )}
      <div>
        <footer>
          <div className="div-footer">
            <a href={contact.linkedin}><img className="icon-footer" src="https://img.icons8.com/small/344/linkedin.png" alt="icon-linkedin"/><p>Linkedin</p></a>
            </div>
            <div className="div-footer">
            <a href={contact.gitHub}><img className="icon-footer" src="https://img.icons8.com/small/344/github.png" alt="icon-github" /><p>GitHub</p></a>
            </div>  
            <div className="div-footer">
            <img className="icon-footer" src="https://img.icons8.com/small/344/whatsapp.png" alt="icon-whathsapp" /><p>WhathsApp</p>
            </div>  
            <div className="div-footer">
            <img className="icon-footer" src="https://img.icons8.com/small/344/email.png" alt="icon-@" /><p>GMail</p>
            </div>  
        </footer>
      </div>
    </div>
  );
}

export default App;
