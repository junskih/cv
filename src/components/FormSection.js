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
        entryData={entry}
        sectionTitle={title}
        handleSave={handleSave}
        handleDelete={handleDelete}
      />
    );

    return (
      <div className='form-section'>
        <h2 className='form-section-title'>{capitalize(title)}</h2>
        {entries}
        <Button
          name='add'
          color='success'
          onClick={handleAdd.bind(this, title)} />
      </div>
    );
  }
}

export default FormSection;