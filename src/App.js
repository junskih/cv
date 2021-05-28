import React from 'react';
import Form from './components/Form';
import CV from './components/CV';
import uniqid from 'uniqid';
import './App.css';
const clone = require('rfdc')();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.formSections = [
      {
        id: uniqid(),
        title: 'personal information',
        fields: [
          'first name',
          'last name',
          'title',
          'city',
          'zipcode',
          'address',
          'phone number',
          'email',
          'description'
        ],
        deletable: false
      },
      
      {
        id: uniqid(),
        title: 'education',
        fields: [
          'degree',
          'institution',
          'from',
          'to'
        ],
        deletable: true
      },

      {
        id: uniqid(),
        title: 'experience',
        fields: [
          'title',
          'employer',
          'from',
          'to'
        ],
        deletable: true
      }
    ];

    // Initialize state based on form section definitions
    let info = {};
    this.formSections.forEach(formSection => {
      let entry = this.handleAdd(formSection.title);
      info[formSection.title] = [entry];
    });
    this.state = {...info};
    
    // This is what state will/should look like:
    /*
    this.state = {
      'personal information': [
        {
          id: uniqid(),
          fields: {
            'first name': '',
            ...
          }
        }
      ],
      'education': [
        {
          id: uniqid(),
          fields: {
            'degree': '',
            ...
          }
        }
      ],
      ...
    }
    */
  }

  handleAdd(sectionTitle) {
    const formSection = this.formSections.find(section => section.title === sectionTitle);

    let entry = {};
    entry.id = uniqid();
    entry.fields = {};

    formSection.fields.forEach(field => {
      entry.fields[field] = `Meme ${field}`;
    });
    
    // Add section to state along with array including single empty entry
    this.setState(state => {
      return {
        [sectionTitle]: [...state[sectionTitle], entry]
      };
    });

    return entry;
  }

  handleSave(sectionTitle, id, fields) {
    this.setState((state) => {
      // Deep copy array of entries
      let newFormSection = clone(state[sectionTitle]);
      let entry = newFormSection.find(entry => entry.id === id);
      entry.fields = fields;

      return {
        [sectionTitle]: newFormSection
      }
    });
  }

  handleDelete(sectionTitle, id) {
    this.setState((state) => {
      let newFormSection = clone(state[sectionTitle])
        .filter(entry => entry.id !== id);

      return {
        [sectionTitle]: newFormSection
      }
    });
  }
  
  render() {
    return (
      <div>
        <header>
          <h1>CV</h1>
        </header>
        <main>
          <Form
            state={this.state}
            handleAdd={this.handleAdd}
            handleSave={this.handleSave}
            handleDelete={this.handleDelete}
          />
          <CV
            state={this.state}
          />
        </main>
      </div>
    );
  }
}

export default App;
