import React from 'react';
import './App.css';
import uniqid from 'uniqid';
import Form from './components/Form';
import CV from './components/CV';

class App extends React.Component {
  constructor(props) {
    super(props);

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

  handleEdit(formSection, id) {

  }

  handleSave(formSection, id, entry) {

  }
  
  render() {
    return (
      <div>
        <header>
          <h1>CV</h1>
        </header>
        <main>
          <Form state={this.state}  />
          <CV state={this.state} />
        </main>
      </div>
    );
  }
}

export default App;
