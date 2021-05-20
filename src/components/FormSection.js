import React from 'react';
import FormEntry from './FormEntry';
import { capitalize } from '../utils';

class FormSection extends React.Component {
  render() {
    const {
      title,
      sectionData,
      handleEdit
    } = this.props;

    let entries = sectionData.map(entry => 
      <FormEntry
        key={entry.id}
        isEditing={entry.isEditing}
        fields={entry.fields}
        handleEdit={handleEdit.bind(this, title, entry.id)}
      />
    );

    return (
      <div className='form-section'>
        <h2>{capitalize(title)}</h2>
        {entries}
      </div>
    );
  }
}

export default FormSection;