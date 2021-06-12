import React, { useState } from 'react';
import Form from './components/Form';
import CV from './components/CV';
import uniqid from 'uniqid';
import './App.css';

const App = () => {
  const [personal, setPersonal] = useState([
    {
      id: uniqid(),
      fields: {
        'first name': '',
        'last name': '',
        'title': '',
        'city': '',
        'zipcode': '',
        'address': '',
        'phone number': '',
        'email': '',
        'description': ''
      }
    }
  ]);
  const [education, setEducation] = useState([
    {
      id: uniqid(),
      fields: {
        'degree': '',
        'institution': '',
        'from': '',
        'to': ''
      }
    }
  ]);
  const [experience, setExperience] = useState([
    {
      id: uniqid(),
      fields: {
        'title': '',
        'company': '',
        'from': '',
        'to': ''
      }
    }
  ]);

  function getSetter(sectionTitle) {
    switch (sectionTitle) {
      case 'personal':
        return setPersonal;

      case 'education':
        return setEducation;

      case 'experience':
        return setExperience;

      default:
        return null;
    }
  }

  function handleAdd(sectionTitle) {
    let setState = getSetter(sectionTitle);
    setState(prevState => {
      let firstEntry = prevState[0];
      let fields = {...firstEntry.fields};

      for (const prop in fields) {
        fields[prop] = '';
      }

      let entry = {};
      entry.id = uniqid();
      entry.fields = fields;

      return [...prevState, entry];
    });
  }

  function handleSave(sectionTitle, id, fields) {
    let setState = getSetter(sectionTitle);

    setState(prevState => {
      let newState = [...prevState];
      let entry = newState.find(entry => entry.id === id);
      entry.fields = fields;
      return newState;
    });
  }

  function handleDelete(sectionTitle, id) {
    let setState = getSetter(sectionTitle);

    setState(prevState => {
      // Prevent deleting all entries
      if (prevState.length === 1) return prevState;
      let newState = [...prevState].filter(entry => entry.id !== id);
      return newState;
    });
  }

  // Render
  return (
    <div>
      <header>
        <h1 className='header-title'>CV</h1>
      </header>
      <main>
        <Form
          personal={personal}
          education={education}
          experience={experience}
          handleAdd={handleAdd}
          handleSave={handleSave}
          handleDelete={handleDelete}
        />
        <CV
          personal={personal}
          education={education}
          experience={experience}
        />
      </main>
    </div>
  );
};

export default App;