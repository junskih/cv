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
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.formSections = [
      {
        id: uniqid(),
        title: 'personal information',
        fields: [
          'first name',
          'last name',
          'profession',
          'title',
          'city',
          'zipcode',
          'address',
          'phone',
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
          isEditing: false,
          fields: {
            'first name': '',
            ...
          }
        }
      ],
      'education': [
        {
          id: uniqid(),
          isEditing: false,
          fields: {
            'degree': '',
            ...
          }
        }
      ],
      ...
    }

    this.state = {
      formSectionTitle: [
        {
          id: uniqid(),
          isEditing: false,

        }
      ]
    }
    */
  }

  handleAdd(formSectionTitle) {
    const formSection = this.formSections.find(section => section.title === formSectionTitle);

    let entry = {};
    entry.id = uniqid();
    entry.isEditing = false;
    entry.fields = {};

    formSection.fields.forEach(field => {
      entry.fields[field] = '';
    });
    
    // Add section to state along with array including single empty entry
    this.setState(state => {
      return {
        [formSectionTitle]: [...state[formSectionTitle], entry]
      };
    });

    return entry;
  }

  handleEdit(formSectionTitle, id) {
    console.log(formSectionTitle, id);

    this.setState((state) => {
      // Deep copy array of entries
      let newFormSection = clone(state[formSectionTitle]);
      let entry = newFormSection.find(entry => entry.id === id);
      entry.isEditing = !entry.isEditing;

      return {
        [formSectionTitle]: newFormSection
      }
    });
  }

  handleSave(formSection, id, entry) {
    console.log(formSection, id, entry);
  }

  handleDelete(formSection, id) {
    console.log(formSection, id);
  }
  
  render() {
    return (
      <div>
        <header>
          <h1>CV</h1>
        </header>
        <main>
          <Form state={this.state} handleEdit={this.handleEdit} />
          <CV state={this.state} />
        </main>
      </div>
    );
  }
}

export default App;
