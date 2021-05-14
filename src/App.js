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
          'title',
          'company/school',
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
  }
  
  render() {
    return (
      <div>
        <header>
          <h1>CV</h1>
        </header>
        <main>
          <Form formSections={this.formSections} />
          <CV formSections={this.formSections} />
        </main>
      </div>
    );
  }
}

export default App;
