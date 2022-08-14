import './App.scss';
import Contact from './components/Contact';
import Education from './components/Education';
import { useState } from "react";
import { CV } from "./CV/CV";
import About from './components/About';
import Experience from './components/Experience';
import More from './components/More';
import Habilities from './components/Habilities';

const { contact, aboutMe, education, experience, habilities, languages, moreDates} = CV;

function App() {
  const [menu, setMenu] = useState (0);
  return (
    <div className="App">
    <h1>CV</h1>
        <Contact contact={contact} />
        <div className='nav'>
        <button onClick={() => setMenu(1)}>
          Sobre mi
        </button>
        <button onClick={() => setMenu(2)}>
          Formación Académica
        </button>
        <button onClick={() => setMenu(3)}>
          Experiencia
        </button>
        <button onClick={() => setMenu(4)}>
          Habilidades
        </button>
        <button onClick={() => setMenu(5)}>
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
    </div>
  );
}

export default App;
