import React from 'react';
import FormEntry from './FormEntry';
import Button from './Button';
import { capitalize } from '../utils';

class FormSection extends React.Component {
  render() {
    const {
      title,
      sectionData,
      handleAdd,
      handleSave,
      handleDelete
    } = this.props;

    let entries = sectionData.map(entry => 
      <FormEntry
        key={entry.id}
        isEditing={entry.isEditing}
        fields={entry.fields}
        handleSave={handleSave}
        handleDelete={handleDelete}
      />
    );

    return (
      <div className='form-section'>
        <h2>{capitalize(title)}</h2>
        {entries}
        <Button name='add' onClick={handleAdd.bind(this, title)} />
      </div>
    );
  }
}

export default FormSection;